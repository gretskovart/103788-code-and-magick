'use strict';

window.renderStatistics = function(ctx, names, times) {
  ctx.beginPath();
  ctx.moveTo(10, 145);
  ctx.bezierCurveTo(10, 145, 80, 10, 150, 60);
  ctx.bezierCurveTo(150, 60, 220, 10, 290, 60);
  ctx.bezierCurveTo(290, 60, 360, 10, 430, 145);
  ctx.bezierCurveTo(430, 145, 360, 280, 290, 230);
  ctx.bezierCurveTo(290, 230, 220, 280, 150, 230);
  ctx.bezierCurveTo(150, 230, 80, 280, 10, 145);
  ctx.stroke();

  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(0, 135);
  ctx.bezierCurveTo(0, 135, 70, 0, 140, 50);
  ctx.bezierCurveTo(140, 50, 210, 0, 280, 50);
  ctx.bezierCurveTo(280, 50, 350, 0, 420, 135);
  ctx.bezierCurveTo(420, 135, 350, 270, 280, 220);
  ctx.bezierCurveTo(280, 220, 210, 270, 140, 220);
  ctx.bezierCurveTo(140, 220, 70, 270, 0, 135);
  ctx.stroke();

  ctx.fillStyle = "#fff";
  ctx.fill();
};
