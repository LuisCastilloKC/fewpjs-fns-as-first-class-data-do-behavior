/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(str){
  let newStr = str.split(":")
  if (newStr[0] < 12){
    return "Good Morning"
  } else if (newStr[0] >= 12 && newStr[0] <= 17){
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(greeting){
  let h1 = document.getElementById("greeting")
  h1.innerText = greeting
}