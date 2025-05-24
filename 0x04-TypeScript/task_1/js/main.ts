interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    yearOfExperience?: number;
    fullTimeEmployee: boolean;
    location: string;
    [key: string]: any
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1:Directors = {
    firstName: "Ola",
    lastName: "Rasaq",
    yearOfExperience: 30,
    location: "Lagos",
    fullTimeEmployee: false,
    contract: false,
    numberOfReports: 17
}

console.log(director1);