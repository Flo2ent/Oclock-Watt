function randomNumberMinMax(min, max) {
  return Math.floor(Math.random() * (max - min) + min + 1);
}

module.exports = randomNumberMinMax;
