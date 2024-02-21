const palindrome = document.querySelector("#text-input");
const check = document.getElementById("check-btn")
const resultContainer = document.getElementById("result")

function cleanText (text) {
  const regex = /[_\s\W]+/ig
  return text.toString()
  .toLowerCase()
  .replaceAll(regex, "");
}

function checkPalindrome() {
  if (!palindrome.value ) {
    alert("Please input a value")
  }
  const word = cleanText(palindrome.value);
   let resultText
  let checkWord = word.split("")
  .reverse()
  .join("")
  if (checkWord === word) {
    resultText = `${palindrome.value} is a palindrome`
}
else {
  resultText = `${palindrome.value} is not a palindrome`
  }
  resultContainer.innerHTML = `${resultText}`;
}


check.addEventListener("click", checkPalindrome)
