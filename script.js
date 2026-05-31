function checkGrade() {
  var nameInput = document.getElementById("studentName");
  var markInput = document.getElementById("studentMark");
  var resultDiv = document.getElementById("result");
  var studentList = document.getElementById("studentList");

  var name = nameInput.value.trim();
  var mark = parseInt(markInput.value);

  if (name === "") {
    resultDiv.textContent = "Please enter a student name.";
    resultDiv.className = "error";
    return;
  }

  if (isNaN(mark) || mark < 0 || mark > 100) {
    resultDiv.textContent = "Please enter a valid mark between 0 and 100.";
    resultDiv.className = "error";
    return;
  }

  var result;
  var grade;

  if (mark >= 80) {
    result = "PASS";
    grade = "Distinction";
  } else if (mark >= 65) {
    result = "PASS";
    grade = "Merit";
  } else if (mark >= 50) {
    result = "PASS";
    grade = "Pass";
  } else {
    result = "FAIL";
    grade = "Fail";
  }

  resultDiv.textContent = name + ": " + result + " — " + grade + " (" + mark + "/100)";

  if (result === "PASS") {
    resultDiv.className = "pass";
  } else {
    resultDiv.className = "fail";
  }

  var listItem = document.createElement("li");
  listItem.textContent = name + " — " + mark + "/100 — " + result + " (" + grade + ")";
  studentList.appendChild(listItem);

  nameInput.value = "";
  markInput.value = "";
}