// Problem
str1 = "maam";
str2 = "mehaeam";

// Output
result = "m|a|am";

// ***************************************** //

var indexMatch = [];

let quizForm = document.getElementById("quizForm");
var finalOutput = document.getElementById("finalOutput");
var slider = document.getElementById("slider");

quizForm.addEventListener("submit", (e) => {
  slider.style.display = "block";
  indexMatch = [];
  e.preventDefault();

  var result = "";
  var result_String = "";

  finalOutput.innerHTML = "";

  var str1 = quizForm.str1.value.trim();
  var str2 = quizForm.str2.value.trim();

  var result = isSubStrig(str1, str2);

  if (!result) {
    result = "String_1 is not SubString of String_2.";
    setTimeout(() => {
      slider.style.display = "none";
      finalOutput.innerHTML = `<p style='color: red'>${result}</p>`;
    }, 1000);
  } else {
    indexMatch.forEach((e, index) => {
      if (index == 0) {
        result_String += str1[index];
      } else {
        if (e - 1 == indexMatch[index - 1]) {
          result_String += str1[index];
        } else {
          result_String += " | " + str1[index];
        }
      }
    });

    setTimeout(() => {
      slider.style.display = "none";
      finalOutput.innerHTML = `<p style='color: green'>${result_String}</p>`;
    }, 1000);
  }
});

function isSubStrig(str1, str2) {
  if (str1.length > str2.length) {
    return 0;
  }

  var check = 0;
  for (i = 0; i < str2.length; i++) {
    if (str2[i] == str1[check]) {
      indexMatch.push(i);
      check++;
    }
  }

  if (check == str1.length) {
    return 1;
  } else {
    return 0;
  }
}
