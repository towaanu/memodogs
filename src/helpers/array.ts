function shuffle<T>(arr: T[]): T[] {
  let arrayToSchuffle = [...arr];
  for (let i = arrayToSchuffle.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let tmp = arrayToSchuffle[i];
    arrayToSchuffle[i] = arrayToSchuffle[j];
    arrayToSchuffle[j] = tmp;
  }
  return arrayToSchuffle;
}

export { shuffle };
