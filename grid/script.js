var jogada = 1;
var valorcasa1 = 0;
var valorcasa2 = 0;
var valorcasa3 = 0;
var valorcasa4 = 0;
var valorcasa5 = 0;
var valorcasa6 = 0;
var valorcasa7 = 0;
var valorcasa8 = 0;
var valorcasa9 = 0;

var vez = document.querySelector("span");
vez.innerHTML = "<h2 class='player1'>Vez do player 1</h2>";

function update() {
  if (jogada > 2) {
    jogada = 1;
  }

  if (jogada === 1) {
    vez.innerHTML = "<h2 class='player1'>Vez do player 1</h2>";
  }
  if (jogada === 2) {
    vez.innerHTML = "<h2 class='player2'>Vez do player 2</h2>";
  }
}

function verificarVitoria() {
  //Jogador 1
  if (valorcasa1 === 1 && valorcasa2 === 1 && valorcasa3 === 1) {
    var canvas = document.getElementById("canvas");
    vez.innerHTML = "<h2 class='player1'>Vencedor: player 1</h2>";
    canvas.style.display = "none";
  }
  if (valorcasa4 === 1 && valorcasa5 === 1 && valorcasa6 === 1) {
    var canvas = document.getElementById("canvas");
    vez.innerHTML = "<h2 class='player1'>Vencedor: player 1</h2>";
    canvas.style.display = "none";
  }
  if (valorcasa7 === 1 && valorcasa8 === 1 && valorcasa9 === 1) {
    var canvas = document.getElementById("canvas");
    vez.innerHTML = "<h2 class='player1'>Vencedor: player 1</h2>";
    canvas.style.display = "none";
  }
  if (valorcasa1 === 1 && valorcasa4 === 1 && valorcasa7 === 1) {
    var canvas = document.getElementById("canvas");
    vez.innerHTML = "<h2 class='player1'>Vencedor: player 1</h2>";
    canvas.style.display = "none";
  }
  if (valorcasa2 === 1 && valorcasa5 === 1 && valorcasa8 === 1) {
    var canvas = document.getElementById("canvas");
    vez.innerHTML = "<h2 class='player1'>Vencedor: player 1</h2>";
    canvas.style.display = "none";
  }
  if (valorcasa3 === 1 && valorcasa6 === 1 && valorcasa9 === 1) {
    var canvas = document.getElementById("canvas");
    vez.innerHTML = "<h2 class='player1'>Vencedor: player 1</h2>";
    canvas.style.display = "none";
  }
  if (valorcasa1 === 1 && valorcasa5 === 1 && valorcasa9 === 1) {
    var canvas = document.getElementById("canvas");
    vez.innerHTML = "<h2 class='player1'>Vencedor: player 1</h2>";
    canvas.style.display = "none";
  }
  if (valorcasa3 === 1 && valorcasa5 === 1 && valorcasa7 === 1) {
    var canvas = document.getElementById("canvas");
    vez.innerHTML = "<h2 class='player1'>Vencedor: player 1</h2>";
    canvas.style.display = "none";
  }
  //Jogador2
  if (valorcasa1 === 2 && valorcasa2 === 2 && valorcasa3 === 2) {
    var canvas = document.getElementById("canvas");
    vez.innerHTML = "<h2 class='player2'>Vencedor: player 2</h2>";
    canvas.style.display = "none";
  }
  if (valorcasa4 === 2 && valorcasa5 === 2 && valorcasa6 === 2) {
    var canvas = document.getElementById("canvas");
    vez.innerHTML = "<h2 class='player2'>Vencedor: player 2</h2>";
    canvas.style.display = "none";
  }
  if (valorcasa7 === 2 && valorcasa8 === 2 && valorcasa9 === 2) {
    var canvas = document.getElementById("canvas");
    vez.innerHTML = "<h2 class='player2'>Vencedor: player 2</h2>";
    canvas.style.display = "none";
  }
  if (valorcasa1 === 2 && valorcasa4 === 2 && valorcasa7 === 2) {
    var canvas = document.getElementById("canvas");
    vez.innerHTML = "<h2 class='player2'>Vencedor: player 2</h2>";
    canvas.style.display = "none";
  }
  if (valorcasa2 === 2 && valorcasa5 === 2 && valorcasa8 === 2) {
    var canvas = document.getElementById("canvas");
    vez.innerHTML = "<h2 class='player2'>Vencedor: player 2</h2>";
    canvas.style.display = "none";
  }
  if (valorcasa3 === 2 && valorcasa6 === 2 && valorcasa9 === 2) {
    var canvas = document.getElementById("canvas");
    vez.innerHTML = "<h2 class='player2'>Vencedor: player 2</h2>";
    canvas.style.display = "none";
  }
  if (valorcasa1 === 2 && valorcasa5 === 2 && valorcasa9 === 2) {
    var canvas = document.getElementById("canvas");
    vez.innerHTML = "<h2 class='player2'>Vencedor: player 2</h2>";
    canvas.style.display = "none";
  }
  if (valorcasa3 === 2 && valorcasa5 === 2 && valorcasa7 === 2) {
    var canvas = document.getElementById("canvas");
    vez.innerHTML = "<h2 class='player1'>Vencedor: player 1</h2>";
    canvas.style.display = "none";
  }
  if (
    valorcasa1 !== 0 &&
    valorcasa2 !== 0 &&
    valorcasa3 !== 0 &&
    valorcasa4 !== 0 &&
    valorcasa5 !== 0 &&
    valorcasa6 !== 0 &&
    valorcasa7 !== 0 &&
    valorcasa8 !== 0 &&
    valorcasa9 !== 0
  ) {
    var canvas = document.getElementById("canvas");
    vez.innerHTML = "<h2>Empate</h2>";
    canvas.style.display = "none";
  }
}

function casa1() {
  var casa1 = document.getElementById("casa1");
  if (valorcasa1 === 0) {
    if (jogada === 1) {
      casa1.innerHTML = "X";
      jogada += 1;
      valorcasa1 = 1;
      update();
      verificarVitoria();
    } else {
      casa1.innerHTML = "O";
      jogada += 1;
      valorcasa1 = 2;
      update();
      verificarVitoria();
    }
  }
}

function casa2() {
  var casa2 = document.getElementById("casa2");
  if (valorcasa2 === 0) {
    if (jogada === 1) {
      casa2.innerHTML = "X";
      jogada += 1;
      valorcasa2 = 1;
      update();
      verificarVitoria();
    } else {
      casa2.innerHTML = "O";
      jogada += 1;
      valorcasa2 = 2;
      update();
      verificarVitoria();
    }
  }
}

function casa3() {
  var casa3 = document.getElementById("casa3");
  if (valorcasa3 === 0) {
    if (jogada === 1) {
      casa3.innerHTML = "X";
      jogada += 1;
      valorcasa3 = 1;
      update();
      verificarVitoria();
    } else {
      casa3.innerHTML = "O";
      jogada += 1;
      valorcasa3 = 2;
      update();
      verificarVitoria();
    }
  }
}

function casa4() {
  var casa4 = document.getElementById("casa4");
  if (valorcasa4 === 0) {
    if (jogada === 1) {
      casa4.innerHTML = "X";
      jogada += 1;
      valorcasa4 = 1;
      update();
      verificarVitoria();
    } else {
      casa4.innerHTML = "O";
      jogada += 1;
      valorcasa4 = 2;
      update();
      verificarVitoria();
    }
  }
}

function casa5() {
  var casa5 = document.getElementById("casa5");
  if (valorcasa5 === 0) {
    if (jogada === 1) {
      casa5.innerHTML = "X";
      jogada += 1;
      valorcasa5 = 1;
      update();
      verificarVitoria();
    } else {
      casa5.innerHTML = "O";
      jogada += 1;
      valorcasa5 = 2;
      update();
      verificarVitoria();
    }
  }
}

function casa6() {
  var casa6 = document.getElementById("casa6");
  if (valorcasa6 === 0) {
    if (jogada === 1) {
      casa6.innerHTML = "X";
      jogada += 1;
      valorcasa6 = 1;
      update();
      verificarVitoria();
    } else {
      casa6.innerHTML = "O";
      jogada += 1;
      valorcasa6 = 2;
      update();
      verificarVitoria();
    }
  }
}

function casa7() {
  var casa7 = document.getElementById("casa7");
  if (valorcasa7 === 0) {
    if (jogada === 1) {
      casa7.innerHTML = "X";
      jogada += 1;
      valorcasa7 = 1;
      update();
      verificarVitoria();
    } else {
      casa7.innerHTML = "O";
      jogada += 1;
      valorcasa7 = 2;
      update();
      verificarVitoria();
    }
  }
}

function casa8() {
  var casa8 = document.getElementById("casa8");
  if (valorcasa8 === 0) {
    if (jogada === 1) {
      casa8.innerHTML = "X";
      jogada += 1;
      valorcasa8 = 1;
      update();
      verificarVitoria();
    } else {
      casa8.innerHTML = "O";
      jogada += 1;
      valorcasa8 = 2;
      update();
      verificarVitoria();
    }
  }
}

function casa9() {
  var casa9 = document.getElementById("casa9");
  if (valorcasa9 === 0) {
    if (jogada === 1) {
      casa9.innerHTML = "X";
      jogada += 1;
      valorcasa9 = 1;
      update();
      verificarVitoria();
    } else {
      casa9.innerHTML = "O";
      jogada += 1;
      valorcasa9 = 2;
      update();
      verificarVitoria();
    }
  }
}
