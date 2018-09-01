'use strict';

window.renderStatistics = function(ctx, names, times) {
  ctx.beginPath();
  ctx.moveTo(10, 85);
  ctx.bezierCurveTo(10, 85, 60, 10, 110, 60);
  ctx.bezierCurveTo(110, 60, 160, 10, 210, 60);
  ctx.bezierCurveTo(210, 60, 260, 10, 310, 85);
  ctx.bezierCurveTo(310, 85, 260, 160, 210, 110);
  ctx.bezierCurveTo(210, 110, 160, 160, 110, 110);
  ctx.bezierCurveTo(110, 110, 60, 160, 10, 85);
  ctx.stroke();

  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fill();

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
