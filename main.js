document.getElementById("hello_text").textContent = "はじめてのJavaScript";

var count = 0;
setInterval(function() {
  count++;
  document.getElementById("hello_text").textContent = "はじめてのJavaScript(" + count + ")";
  var td_array = document.getElementsByTagName("td");
  var cells = [];
  var index = 0;
  for (var row = 0; row < 20; row++) {
    cells[row] = [];
    for (var col = 0; col < 10; col++) {
      cells[row][col] = td_array[index];
      index++;
    }
  }
  // 一番下の行のクラスを空にする
  for (var i = 0; i < 10; i++) {
    cells[19][i].className = "";
  }
  // 下から二番目の行から繰り返しクラスを下げていく
  for (var row = 18; row >= 0; row--) {
    for (var col = 0; col < 10; col++) {
      if (cells[row][col].className !== "") {
        cells[row + 1][col].className = cells[row][col].className;
        cells[row][col].className = "";
      }
    }
  }
}, 1000);
