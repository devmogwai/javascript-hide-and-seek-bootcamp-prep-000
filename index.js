function getFirstSelector (selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var a = document.querySelector('.ranked-list')
  a = a + n
  console.log('stuff stuff')
}
