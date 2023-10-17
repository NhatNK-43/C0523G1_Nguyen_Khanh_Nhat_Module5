const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    gender: 'male',
    occupation: 'developer',
    nationality: 'American',
    city: 'New York',
    hobbies: ['reading','traveling','photography'],
    languages: ['English','Spanish'],
    education: {
        degree: 'Bachelor',
        major: 'Computer Science',
        university: 'Harvard University'
    }
};

let {firstName,gender,education, languages} = person;
let {degree} = education;
let english = languages[0];

let person1 = {
    firstName,
    gender,
    degree,
    english
}
console.log(person1);