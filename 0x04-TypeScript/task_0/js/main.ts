interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const firstStudent: Student = {
	firstName: "Rasaq",
	lastName: "Omobolaji",
	age: 30,
	location: "Abuja",
}

const secondStudent: Student = {
	firstName: "Rasaq",
	lastName: "Mosunmola",
	age: 23,
	location: "Ekiti",
}

const studentsList: Student[] = [firstStudent,secondStudent];

function renderTable(students: Student[]): void {
    // Create Table
    const table = document.createElement('table');

    // Create Table Headers
    const headers = table.createTHead();
    const headerRow = headers.insertRow();
    const header1 = headerRow.insertCell();
    const header2 = headerRow.insertCell();

    header1.textContent = 'First Name';
    header2.textContent = 'Location';

    // Create Table Body
    const tbody = table.createTBody();

    students.forEach((student) => {
        // Create Table Row
        const row = tbody.insertRow();

        // Create and Insert Cells
        const firstCell = row.insertCell();
        firstCell.textContent = student.firstName;

        const secondCell = row.insertCell();
        secondCell.textContent = student.location;
    });

    // Append the table to the document body
    document.body.appendChild(table);
}
