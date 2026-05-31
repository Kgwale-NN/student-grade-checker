function checkGrade() {
  // 1. Select elements and read values
  var nameInput = document.getElementById("studentName");
  var markInput = document.getElementById("studentMark");
  var resultDiv = document.getElementById("result");
  var studentList = document.getElementById("studentList");

  var name = nameInput.value.trim();
  var mark = parseInt(markInput.value);

  // 2. Validate input
  if (name === "") {
    resultDiv.textContent = "Please enter a student name.";
    resultDiv.className = "";
    return;
  }

  if (isNaN(mark) || mark < 0 || mark > 100) {
    resultDiv.textContent = "Please enter a valid mark between 0 and 100.";
    resultDiv.className = "";
    return;
  }

  // 3. Determine grade using if / else if / else
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

  // 4. Update result area
  resultDiv.textContent = name + ": " + result + " — " + grade + " (" + mark + "/100)";

  if (result === "PASS") {
    resultDiv.className = "pass";
  } else {
    resultDiv.className = "fail";
  }

  // 5. Append to the list
  var listItem = document.createElement("li");
  listItem.textContent = name + " — " + mark + "/100 — " + result + " (" + grade + ")";
  studentList.appendChild(listItem);

  // 6. Clear inputs
  nameInput.value = "";
  markInput.value = "";
}