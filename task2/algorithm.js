function longest(arr) {
  var map = {};
  // using a map to create a new array for each element of the array
  let maximum = 0;
  var start = 0;
  var end = 0;
  var number = 0;
  let n = arr.length;
  for (var i = 0; i < n; i++) {
    number = arr[i];
    if (map[number]) continue;
    if (map[number - 1]) {
      start = map[number - 1].start;
    } else {
      start = number;
    }
    if (map[number + 1]) {
      end = map[number + 1].end;
    } else {
      end = number;
    }

    map[number] = { start: number, end: number };
    map[start].end = end;
    map[end].start = start;
    maximum = Math.max(end - start + 1, maximum);
  }
  return maximum;
}
var answer = longest([1, 2, 3, 4, 5, 6, 8, 9, 7, 11, 12, 10]);
console.log(answer);
