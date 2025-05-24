interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Ola",
    lastName: "Rasaq",
    age: 30,
    location: "Lagos"
}

const student2: Student = {
    firstName: "John",
    lastName: "Stone",
    age: 25,
    location: "Abuja"
}


const studentList: Student[] = [student1, student2];

const table = document.createElement('table');

studentList.forEach((student) => {
const row = table.insertRow();
const nameCell = row.insertCell();
const locationCell = row.insertCell();

nameCell.textContent = student.firstName;
locationCell.textContent = student.location;
});

document.body.appendChild(table);
