'use strict';

// Dom Elements
const studentForm = document.getElementById('studentForm');
const studentsContainer = document.querySelector('.students');
const addBtn = document.getElementById('add');
const clearBtn = document.getElementById('clear');
// getting input values from form container
const nameInput = studentForm['name'];
const ageInput = studentForm['age'];
const rollInput = studentForm['roll'];

let students = JSON.parse(localStorage.getItem('students')) || [];

const addStudent = (name, age, roll) => {
  students.push({
    name,
    age,
    roll,
  });

  localStorage.setItem('students', JSON.stringify(students));

  return { name, age, roll };
};

const createStudentElement = ({ name, age, roll }) => {
  // Create Elements
  const studentDiv = document.createElement('ul');
  const studentName = document.createElement('h2');
  const studentAge = document.createElement('li');
  const studentRoll = document.createElement('li');

  // Fill the Elements
  studentName.innerText = `Student Name: ${name}`;
  studentAge.innerText = `Student Age: ${age}`;
  studentRoll.innerText = `Student Roll: ${roll}`;

  // Add Elements to the DOM
  studentDiv.append(studentName, studentAge, studentRoll);
  studentsContainer.append(studentDiv);
  studentsContainer.style.display = students.length === 0 ? 'none' : 'flex';
};
studentsContainer.style.display = students.length === 0 ? 'none' : 'flex';

students.forEach(createStudentElement);

studentForm.onsubmit = (e) => {
  e.preventDefault();

  const newStudent = addStudent(nameInput.value, ageInput.value, rollInput.value);

  createStudentElement(newStudent);
  nameInput.value = '';
  ageInput.value = '';
  rollInput.value = '';
};

clearBtn.addEventListener('click', (e) => {
  if (
    students &&
    Array.isArray(students) &&
    students.length > 0 &&
    !students.some((item) => item === null || item === undefined)
  ) {
    e.preventDefault();

    nameInput.value = '';
    ageInput.value = '';
    rollInput.value = '';

    localStorage.clear();
    students = [];
    // Remove all child elements from the studentsContainer
    while (studentsContainer.firstChild) {
      studentsContainer.removeChild(studentsContainer.firstChild);
    }
    studentsContainer.style.display = 'none';
  } else if (!students) {
    alert('Add Student Details first!');
  }
});
