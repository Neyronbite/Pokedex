export function take(array, count) {
  return array.slice(0, count);
}

export function skip(array, count) {
  return array.slice(count, array.length);
}
