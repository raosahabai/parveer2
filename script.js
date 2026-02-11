let students = JSON.parse(localStorage.getItem("students")) || [];

function calculateGrade(marks) {
    if (marks >= 80) return "A";
    if (marks >= 60) return "B";
    if (marks >= 40) return "C";
    return "Fail";
}

function addStudent() {
    let roll = document.getElementById("roll").value;
    let name = document.getElementById("name").value;
    let marks = document.getElementById("marks").value;
    let attendance = document.getElementById("attendance").value;

    if (roll === "" || name === "" || marks === "") {
        alert("Please fill all fields");
        return;
    }

    students.push({
        roll: roll,
        name: name,
        marks: marks,
        grade: calculateGrade(marks),
        attendance: attendance
    });

    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

function displayStudents() {
    let table = document.getElementById("studentList");
    table.innerHTML = "";

    students.forEach((student, index) => {
        table.innerHTML += `
            <tr>
                <td>${student.roll}</td>
                <td>${student.name}</td>
                <td>${student.marks}</td>
                <td>${student.grade}</td>
                <td>${student.attendance}</td>
                <td>
                    <button onclick="deleteStudent(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

displayStudents();
