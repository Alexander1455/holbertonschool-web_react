interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: string | number | boolean | undefined; // Allow any additional attribute
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0);
  return `${firstLetter}. ${lastName}`;
};

const director1: Directors = {
  firstName: 'John',
  fullTimeEmployee: true,
  lastName: 'Doe',
  location: 'London',
  numberOfReports: 17,
};

console.log(director1);

const printedTeacher = printTeacher("John", "Doe");
console.log(printedTeacher);