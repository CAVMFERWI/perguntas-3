function mostrar(texto) {
  document.getElementById("saida").textContent = texto;
}

function ehPrimo(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

function nomeDia(n) {
  switch (n) {
    case 1: return "Domingo";
    case 2: return "Segunda";
    case 3: return "Terça";
    case 4: return "Quarta";
    case 5: return "Quinta";
    case 6: return "Sexta";
    case 7: return "Sábado";
  }
}

function pedirDia() {
  let n;
  do {
    n = Number(prompt("Digite um número de 1 a 7:"));
  } while (n < 1 || n > 7 || !Number.isInteger(n));
  return n;
}

// 1. Switch - Dias da Semana
function ex1() {
  let n = pedirDia();
  let tipo = (n == 1 || n == 7) ? "Final de semana" : "Dia útil";
  mostrar(nomeDia(n) + " - " + tipo);
}

// 2. While - Contagem regressiva
function ex2() {
  let texto = "";
  let i = 30;
  while (i >= 1) {
    if (i % 3 == 0 && i % 5 == 0) texto += i + " PingPong\n";
    else if (i % 3 == 0) texto += i + " Ping\n";
    else if (i % 5 == 0) texto += i + " Pong\n";
    else texto += i + "\n";
    i--;
  }
  mostrar(texto);
}

// 3. Do...while - Login
function ex3() {
  let tentativas = 0;
  let ok = false;
  do {
    let login = prompt("Login:");
    let senha = prompt("Senha:");
    ok = login == "admin" && senha == "1234";
    tentativas++;
  } while (!ok && tentativas < 3);
  mostrar(ok ? "Acesso liberado" : "Conta bloqueada");
}

// 4. For - Tabuada filtrada
function ex4() {
  let n = Number(prompt("Número de 1 a 10:"));
  let texto = "";
  let soma = 0;
  for (let i = 1; i <= 10; i++) {
    let r = n * i;
    if (r % 4 == 0) {
      texto += n + " x " + i + " = " + r + "\n";
      soma += r;
    }
  }
  mostrar(texto + "Soma: " + soma);
}

// 5. Break - Múltiplo de 7 e primo
function ex5() {
  let achado;
  for (let i = 1; i <= 100; i++) {
    if (i % 7 == 0 && ehPrimo(i)) {
      achado = i;
      break;
    }
  }
  mostrar("Número encontrado: " + achado);
}

// 6. Continue - Ímpares filtrados
function ex6() {
  let texto = "";
  for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0 || i % 3 == 0 || i % 7 == 0) continue;
    texto += i + " ";
  }
  mostrar(texto);
}

// 7. While - Soma acumulada
function ex7() {
  let i = 1;
  let soma = 0;
  while (i <= 20) {
    if (i % 2 == 0 && i % 4 != 0) soma += i;
    i++;
  }
  mostrar("Soma: " + soma);
}

// 8. Do...while - Número válido e primos
function ex8() {
  let n;
  do {
    n = Number(prompt("Digite um número maior que 0:"));
  } while (!(n > 0));
  let texto = "";
  for (let i = 2; i <= n; i++) {
    if (ehPrimo(i)) texto += i + " ";
  }
  mostrar("Primos até " + n + ": " + texto);
}

// 9. For - Quadrado e cubo
function ex9() {
  let texto = "";
  for (let i = 2; i <= 30; i += 2) {
    texto += i + "² = " + i ** 2 + " | " + i + "³ = " + i ** 3 + "\n";
  }
  mostrar(texto);
}

// 10. Switch + Loop - Meses
function ex10() {
  let texto = "";
  for (let m = 1; m <= 12; m++) {
    let nome;
    switch (m) {
      case 1: nome = "Janeiro"; break;
      case 2: nome = "Fevereiro - 28 ou 29 dias"; break;
      case 3: nome = "Março"; break;
      case 4: nome = "Abril"; break;
      case 5: nome = "Maio - Mês de provas"; break;
      case 6: nome = "Junho"; break;
      case 7: nome = "Julho - Férias"; break;
      case 8: nome = "Agosto - Mês de provas"; break;
      case 9: nome = "Setembro"; break;
      case 10: nome = "Outubro - Mês de provas"; break;
      case 11: nome = "Novembro"; break;
      case 12: nome = "Dezembro - Férias"; break;
    }
    texto += m + " - " + nome + "\n";
  }
  mostrar(texto);
}

// 11. Integrado - Switch, For, Break
function ex11() {
  let n = pedirDia();
  let texto = "Dia: " + nomeDia(n) + "\nÍmpares: ";
  let soma = 0;
  for (let i = 1; i <= n; i += 2) {
    if (i > 20) break;
    texto += i + " ";
    soma += i;
  }
  texto += "\nSoma: " + soma + (ehPrimo(soma) ? " (é primo)" : " (não é primo)");
  mostrar(texto);
}
