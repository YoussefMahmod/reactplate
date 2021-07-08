export default function moveItem(arr, from, to) {
  var f = arr.splice(from, 1)[0];
  arr.splice(to, 0, f);
}
