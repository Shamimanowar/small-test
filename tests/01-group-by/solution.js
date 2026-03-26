/**
 * TEST 1 — Group By Key (10 min)
 *
 * Task: Fix the bugs in groupBy() so the output matches the expected result below.
 * Run with: node solution.js
 */

const users = [
  { name: 'Ali',  role: 'admin' },
  { name: 'Sara', role: 'user'  },
  { name: 'Omar', role: 'admin' },
  { name: 'Lena', role: 'user'  },
];

function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    const groupKey = item.key; // BUG 1

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }

    return acc[groupKey].push(item); // BUG 2
  }, {});
}

const result = groupBy(users, 'role');
console.log(JSON.stringify(result, null, 2));

/*
  Expected output:
  {
    "admin": [
      { "name": "Ali",  "role": "admin" },
      { "name": "Omar", "role": "admin" }
    ],
    "user": [
      { "name": "Sara", "role": "user" },
      { "name": "Lena", "role": "user" }
    ]
  }
*/
