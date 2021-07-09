export default function indexOfObject(arr, property, value) {
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i][property] === value) return i;
  }
  return -1;
}
