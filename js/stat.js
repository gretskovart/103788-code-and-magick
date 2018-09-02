'use strict';

var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var GAP = 50;
var YOUR_COLOR = 'rgba(255, 0, 0, 1)';
var saturate = Math.ceil(Math.random() * 100) + '%';
var othersColor = 'hsl(240,' + saturate + ',50%)';

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

var addScore = function(ctx, name, color, x, y) {
  ctx.fillStyle = '#000';
  ctx.fillText(name, x, y);

  ctx.fillStyle = color;
  ctx.fillRect(x, y - 15, BAR_WIDTH, '-' + BAR_HEIGHT);
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 235, 60);
  ctx.fillText('Список результатов:', 235, 70);

  addScore(ctx, 'Вы', YOUR_COLOR, 250, 245);
  addScore(ctx, 'Иван', othersColor, 250 + GAP, 245);
  addScore(ctx, 'Юлия', othersColor, 250 + GAP + GAP, 245);
};
