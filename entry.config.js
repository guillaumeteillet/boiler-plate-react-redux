/* *****************************************************************************
 conventions:
 this will register JS entries and generate corresponding HTML files in build
 foler:
 - dist (prod)
 - local (dev)
*/

// entries is an array of entry object
const entries = [
  // e.g. { name: 'index', title: 'Home' }
  // generates index.html with <title>Home</title>
  // e.g. { name: 'index' }
  // generates index.html with <title>index<title>
  // your code below
  { name: 'index', title: 'Index' },
  { name: 'signin', title: 'Sign In' },
  { name: 'resume', title: 'Resume' },
  { name: 'job', title: 'Jobs' }
]

module.exports = { entries }
