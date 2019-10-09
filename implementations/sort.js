/**
 *
  sort() method returns a sorted array from it's calling array.

  sort() takes at most 1 parameter:

  - comparator, compreing function which specifies how to compare elements. If
    not provided, a default comparator which compares 2 elements by their
    values in ascending order.

  The comparator function takes 2 parameters, value for comparing 2 elements.
  
  Test Example 1:
  let numberArray = [4, 8, 9, 1, 2, 3, 5, 5];
  console.log(numberArray.sort());
  Return:
  [ 1, 2, 3, 4, 5, 5, 8, 9 ]

  Test Example 2:
  let stringArray = ['a', 'b', 'h', 'y', 'q', 'j', 't', 'h'];
  console.log(stringArray.sort());
  Return:
  [ 'a', 'b', 'h', 'h', 'j', 'q', 't', 'y' ]

  Test Example 3:
  let numberElements = [{ a:5 }, { a:2 }, { a:9 }, { a:7 }, { a:4 }, { a:8 }];
  console.log(numberElements.sort((a, b) => { return a.a - b.a; } ))
  Return:
  [ { a: 2 }, { a: 4 }, { a: 5 }, { a: 7 }, { a: 8 }, { a: 9 } ]

  Test Example 4:
  let stringElements = [{ a:'5' }, { a:'2' }, { a:'9' }, { a:'7' }, { a:'4' }, { a:'8' }];
  console.log(stringElements.sort((a, b) => { return a.a - b.a; } ))
  Return:
  [ { a: '2' }, { a: '4' }, { a: '5' }, { a: '7' }, { a: '8' }, { a: '9' } ]
*/

Array.prototype.sort = function sort(comparator) {
  if (comparator == null) {
    comparator = function(a, b) {
      if (a < b) {
        return -1;
      }

      if (a > b) {
        return 1;
      }

      return 0;
    }
  }

  let sortedArray = [...this];

  function recursiveSort(start, end) {
    if (end - start < 1) {
      return;
    }

    const pivot = sortedArray[end];
    let split = start;

    for (let i = start; i < end; i++) {
      const compareVaule = comparator(sortedArray[i], pivot);

      if (compareVaule < 0) {
        if (split != i) {
          const temp = sortedArray[split];
          sortedArray[split] = sortedArray[i];
          sortedArray[i] = temp;
        }

        split++;
      }
    }

    sortedArray[end] = sortedArray[split];
    sortedArray[split] = pivot;

    recursiveSort(start, split - 1);
    recursiveSort(split + 1, end);
  }

  recursiveSort(0, this.length - 1);

  return sortedArray;
};
