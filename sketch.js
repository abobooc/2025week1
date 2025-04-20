function setup() { //設定
  //產生一個寬高為整個視窗的寬高畫布
  createCanvas(windowWidth, windowHeight);//畫布大小
}

function draw() { //畫圖
  //產生一個背景顏色為藍色
  background("#bde0fe");//背景色
  
  // 設定邊框顏色和粗細
  stroke("#003049"); // 設定邊框顏色
  strokeWeight(2.5); // 設定邊框粗細
  
  // 設定方框和圓的大小
  let size = 200;
  
  // 使用巢狀的 for 迴圈來繪製多組方框與圓
  for (let x = 0; x < windowWidth; x += size) {
    for (let y = 0; y < windowHeight; y += size) {
      // 設定旋轉中心點
      push();
      translate(x + size / 2, y + size / 2);
      rotate(radians(mouseX + mouseY));
      
      // 繪製方框
      fill("#ffafcc"); // 設定方框的顏色
      rect(-size / 2, -size / 2, size, size); // 繪製方框
      
      // 繪製圓
      fill("#cdb4db"); // 設定圓的顏色
      ellipse(0, 0, size, size); // 繪製圓
      
      pop();
    }
  }
}