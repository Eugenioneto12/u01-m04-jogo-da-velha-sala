let jogador = "X";

// function checkWinSequence(idx01, idx02, idx03) {
//   let elements = document.getElementById("container").children;
//   if (
//     elements[idx01].innerText === elements[idx02].innerText &&
//     elements[idx02].innerText === elements[idx03].innerText &&
//     elements[idx03].innerText.length !== 0
//   ) {
//     return true;
//   }
// }

function checkWin() {
  let sequence = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 3, 6, 1, 3, 7, 2, 5, 8, 0, 4, 8, 2, 4, 6,
  ];
  let elements = document.getElementById("container").children;
  for (let idx = 0; idx < sequence.length - 3; idx += 3) {
    if (
      elements[sequence[idx]].innerText ===
        elements[sequence[idx + 1]].innerText &&
      elements[sequence[idx + 1]].innerText ===
        elements[sequence[idx + 2]].innerText &&
      elements[sequence[idx + 2]].innerText.length !== 0
    ) {
      debugger;
      return true;
    }
  }
  return false;
  // if(checkWinSequence(0, 1, 2)) {
  //     debugger;
  //     return true;
  // } else if(checkWinSequence(3, 4, 5)) {
  //     debugger;
  //     return true;
  // } else if(checkWinSequence(6, 7, 8)) {
  //     debugger;
  //     return true;
  // } else if(checkWinSequence(0, 3, 6)) {
  //     debugger;
  //     return true;
  // } else if(checkWinSequence(1, 4, 7)) {
  //     debugger;
  //     return true;
  // } else if(checkWinSequence(2, 5, 8)) {
  //     debugger;
  //     return true;
  // } else if(checkWinSequence(0, 4, 8)) {
  //     debugger;
  //     return true;
  // } else if(checkWinSequence(2, 4, 6)) {
  //     debugger;
  //     return true;
  // } else {
  //     return false;
  // }
}

function mark(element) {
  // element.innerText.length == 0 ? element.innerText = jogador : alert("Elemento já preenchido");
  if (element.innerText.length == 0) {
    element.innerText = jogador;
    jogador == "X" ? (jogador = "O") : (jogador = "X");
    checkWin();
  } else {
    alert("Elemento já preenchido");
  }
}
