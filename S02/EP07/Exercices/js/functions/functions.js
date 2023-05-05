function averageOfAnArray(array) {
  let average = 0;
  let total = 0;
  let count = 0;

  for (const value of array) {
    total = total + value;
    count++;
  }

  return (average = total / count);
}