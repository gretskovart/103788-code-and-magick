'use strict';

window.renderStatistics = function(ctx, names, times) {
  ctx.beginPath();
  ctx.moveTo(110, 155);
  ctx.bezierCurveTo(110, 155, 180, 20, 250, 70);
  ctx.bezierCurveTo(250, 70, 320, 20, 390, 70);
  ctx.bezierCurveTo(390, 70, 460, 20, 530, 155);
  ctx.bezierCurveTo(530, 155, 460, 290, 390, 240);
  ctx.bezierCurveTo(390, 240, 320, 290, 250, 240);
  ctx.bezierCurveTo(350, 240, 180, 290, 110, 155);
  ctx.stroke();

  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(100, 145);
  ctx.bezierCurveTo(100, 145, 170, 10, 240, 60);
  ctx.bezierCurveTo(240, 60, 310, 10, 380, 60);
  ctx.bezierCurveTo(380, 60, 450, 10, 520, 145);
  ctx.bezierCurveTo(520, 145, 450, 280, 380, 230);
  ctx.bezierCurveTo(380, 230, 310, 280, 240, 230);
  ctx.bezierCurveTo(240, 230, 170, 280, 100, 145);
  ctx.stroke();

  ctx.fillStyle = "#fff";
  ctx.fill();
};
