function add7(a) {
 return a + 7;
}
console.log(add7(5))

function multiply(a, b) {
  return a * b;
}

console.log(multiply(5, 51))

function capitalize() {
  let anyString = ("heyoo! im chopper.")
  let firstLetter = anyString.charAt(0)
  let firstLetterBig = firstLetter.toUpperCase()
  let otherLetters = anyString.slice(1)
  let wholeWord = firstLetterBig + otherLetters
  return wholeWord
}

function lastLetter() {
  let anyString = ("heyoo! im chopper.")
  let lastLetter = anyString.charAt(anyString.length - 1)
  return lastLetter
}

console.log(lastLetter())