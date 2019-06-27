const _ = require('lodash')

const students = [
  { name: 'Isaac', grade: 9 },
  { name: 'Mary', grade: 8.2 },
  { name: 'Peter', grade: 7 }
]

const average = _.sumBy(students, 'grade') / students.length
console.log(average)
