'use strict';

var renderCloud = function(ctx, x, y, color) {
  ctx.beginPath();
  ctx.moveTo(10 + x, 145 + y);
  ctx.bezierCurveTo(10 + x, 145 + y, 80 + x, 10 + y, 150 + x, 60 + y);
  ctx.bezierCurveTo(150 + x, 60 + y, 220 + x, 10 + y, 290 + x, 60 + y);
  ctx.bezierCurveTo(290 + x, 60 + y, 360 + x, 10 + y, 430 + x, 145 + y);
  ctx.bezierCurveTo(430 + x, 145 + y, 360 + x, 280 + y, 290 + x, 230 + y);
  ctx.bezierCurveTo(290 + x, 230 + y, 220 + x, 280 + y, 150 + x, 230 + y);
  ctx.bezierCurveTo(150 + x, 230 + y, 80 + x, 280 + y, 10 + x, 145 + y);
  ctx.stroke();

  ctx.fillStyle = color;
  ctx.fill();
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = "16px PT Mono";
  ctx.fillText("Ура вы победили!", 110 + 135, 90);
  ctx.fillText("Список результатов:", 110 + 135, 110);
};
