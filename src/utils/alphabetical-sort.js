function alphabeticalSort(x, y) {
  if (x.value < y.value) {
    return -1;
  }
  
  if (x.value > y.value) {
    return 1;
  }

  return 0;
}

export default alphabeticalSort;
