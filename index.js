function getFirstSelector (selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
return document.querySelector('#nested.target')
}
nestedTarget()
document.querySelector('div')