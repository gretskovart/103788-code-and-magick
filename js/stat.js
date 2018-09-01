'use strict';

window.renderStatistics = function(ctx, names, times) {
  ctx.beginPath();
  ctx.moveTo(0, 75);
  ctx.bezierCurveTo(0, 75, 50, 0, 100, 50);
  ctx.bezierCurveTo(100, 50, 150, 0, 200, 50);
  ctx.bezierCurveTo(200, 50, 250, 0, 300, 75);
  ctx.bezierCurveTo(300, 75, 250, 150, 200, 100);
  ctx.bezierCurveTo(200, 100, 150, 150, 100, 100);
  ctx.bezierCurveTo(100, 100, 50, 150, 0, 75);
  ctx.stroke();

  ctx.fillStyle = "#fff";
  ctx.fill();

};
