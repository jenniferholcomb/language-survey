function getAndSetSelection() {
  let selection1 = parseInt(document.getElementById("input1").value);
  let selection2 = parseInt(document.getElementById("input2").value);
  let selection3 = parseInt(document.getElementById("input3").value);
  let selection4 = parseInt(document.getElementById("input4").value);
  let selection5 = parseInt(document.getElementById("input5").value);

  let jsTally = 0;
  let cSharpTally = 0;
  let swiftTally = 0;

  if (selection1 === 1) {
    jsTally += 1;
  }

  if (selection2 === 1) {
    cSharpTally += 1;
    swiftTally += 1;
  }

  if (selection3 === 1) {
    jsTally += 1;
    swiftTally += 1;
  }

  if (selection4 === 1) {
    jsTally += 1;
    cSharpTally += 1;
    swiftTally += 1;
  } else if (selection4 === 0){
    jsTally += 1;
    cSharpTally += 1;
  }

  if (selection5 === 1) {
    jsTally += 1;
    cSharpTally += 1;
  } else if (selection5 === 0) {
    swiftTally += 1;
  }

  let result = "";
  if (jsTally > cSharpTally && jsTally != cSharpTally) {
    if (jsTally > swiftTally && jsTally != swiftTally) {
      result = "javaScript";
    } else if (jsTally === swiftTally ) {
      result = "javaAndSwift";
    } else if (swiftTally > jsTally) {
      result = "swift";
    }
  } else if (cSharpTally === jsTally) {
    result = "javaAndC";
  } else if (cSharpTally === swiftTally) {
    result = "cAndSwift";
  } else if (cSharpTally > swiftTally) {
    result = "cSharp";
  } else if (swiftTally > cSharpTally) {
    result = "swift";
  }
  return result;
}

function hideResults() {
  document.getElementById("javaScript").setAttribute("class", "hidden");
  document.getElementById("javaAndSwift").setAttribute("class", "hidden");
  document.getElementById("swift").setAttribute("class", "hidden");
  document.getElementById("javaAndC").setAttribute("class", "hidden");
  document.getElementById("cAndSwift").setAttribute("class", "hidden");
  document.getElementById("cSharp").setAttribute("class", "hidden");
}

function handleSelect(form) {
  form.onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    result = getAndSetSelection();
    document.getElementById(result).removeAttribute("class");
    document.querySelector("form#select-form").reset();
  };
}

window.addEventListener("load", function() {
  const form = document.getElementById("select-form");
  form.addEventListener("submit", handleSelect(form));
});
