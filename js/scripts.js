// Business Logic

// User Interface Logic
function handleSelect(event) {
  event.preventDefault();
  const selection1 = parseInt(document.getElementById("answer1").value);
  const selection2 = parseInt(document.getElementById("answer2").value);
  const selection3 = parseInt(document.getElementById("answer3").value);
  const selection4 = parseInt(document.getElementById("answer4").value);
  const selection5 = parseInt(document.getElementById("answer5").value);
  const answerValue = selection1 + selection2 + selection3 + selection4 + selection5;

  let result;

  if (selection1 === 1) {
    result = result + 1;
  }

  if (selection2 === 1) {
    result = result + 1;
  }

  if (selection3 === 1) {
    result = result + 1;
  }

  if (selection4 === 1) {
    result = result + 1;
  } else {

  }

  if (selection4 === 1) {
    result = result + 1;
  } else {
    
  }
}

window.addEventListener("load", function() {
  document.getElementById("select-form").addEventListener("submit", handleSelect);
});