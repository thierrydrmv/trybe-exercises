const imcWithHeightInMeters = (weight, height) => {
  return weight / (height * 2)
};

console.log(imcWithHeightInMeters(80, 1.70));