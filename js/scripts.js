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

  let jsTally = 0;
  let cSharpTally = 0;
  let swiftTally = 0;

  if (selection1 === 1) {
    jsTally = jsTally + 1;
  }

  if (selection2 === 1) {
    cSharpTally = cSharpTally + 1;
    swiftTally = swiftTally + 1;
  }

  if (selection3 === 1) {
    jsTally = jsTally + 1;
    swiftTally = swiftTally + 1;
  }

  if (selection4 === 1) {
    jsTally = jsTally + 1;
    cSharpTally = cSharpTally + 1;
    swiftTally = swiftTally + 1;
  } else if (selection4 === 0){
    jsTally = jsTally + 1;
    cSharpTally = cSharpTally + 1;
  }

  if (selection5 === 1) {
    jsTally = jsTally + 1;
    cSharpTally = cSharpTally + 1;
  } else if (selection5 === 0) {
    swiftTally = swiftTally + 1;
  }

  if (jsTally > cSharpTally && jsTally != cSharpTally) {
    if (jsTally > swiftTally && jsTally != swiftTally) {
      document.getElementById("javaScript").removeAttribute("class");
    } else if (jsTally === swiftTally ) {
      document.getElementById("javaScript").removeAttribute("class");
      document.getElementById("swift").removeAttribute("class");
    } else if (swiftTally > jsTally) {
      document.getElementById("swift").removeAttribute("class");
    }
  } else if (cSharpTally === jsTally) {
    document.getElementById("javaScript").removeAttribute("class");
    document.getElementById("cShartTally").removeAttribute("class");
  } else if (cSharpTally === swiftTally) {
    document.getElementById("javaScript").removeAttribute("class");
    document.getElementById("cShartTally").removeAttribute("class");
  } else if (cSharpTally > swiftTally) {
    document.getElementById("cShartTally").removeAttribute("class");
  } else if (swiftTally > cSharpTally) {
    document.getElementById("swiftTally").removeAttribute("class");
  } else {
    document.getElementById("none").removeAttribute("class");
  }
  
}

window.addEventListener("load", function() {
  document.getElementById("select-form").addEventListener("submit", handleSelect);
});