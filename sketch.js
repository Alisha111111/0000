let canvas;
let stars = []; // 儲存星星的位置
let meteorCount = 6; // 流星數量

function setup() {
  canvas = createCanvas(windowWidth, windowHeight); // 設定畫布為視窗大小
  generateStars(); // 生成星星
}

function draw() {
  background('#003049'); // 設定背景顏色為 #003049

  // 繪製星星
  fill('#FFD700'); // 設定星星顏色為黃色
  noStroke();
  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];

    // 如果是流星，讓它移動
    if (i < meteorCount) {
      star.x += random(2, 5); // 流星向右移動
      star.y += random(-1, 1); // 流星有輕微上下波動

      // 如果流星超出畫布，重置位置
      if (star.x > width || star.y > height || star.y < 0) {
        star.x = random(-50, 0); // 重置到畫布左側外
        star.y = random(height); // 隨機高度
      }
    }

    // 如果滑鼠靠近星星，讓星星跳開
    let d = dist(mouseX, mouseY, star.x, star.y);
    if (d < 50) { // 距離小於 50 時跳開
      star.x += random(-50, 50);
      star.y += random(-50, 50);
    }

    // 繪製星星
    ellipse(star.x, star.y, star.size);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布大小
  generateStars(); // 重新生成星星
}

function generateStars() {
  stars = []; // 清空星星陣列
  let starCount = 100; // 星星總數
  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: random(width), // 隨機 x 座標
      y: random(height), // 隨機 y 座標
      size: random(2, 9) // 調整星星大小範圍為 2 到 9
    });
  }
}
