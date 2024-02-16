// primitive types: number, string, boolean
// complex types: array, object
// function types: parameters

// primitive types

let age: number;

age = 4;

let username: string;

username = "Sagar";

let isTrue: boolean;

isTrue = true;

// complex types

let hobbies: string[];

hobbies = ["table tennis", "pool"];

let friend: {
  name: string;
  age: number;
};

friend = {
  name: "Ajay",
  age: 23,
};

let friends: {
  name: string;
  age: number;
}[];

friends = [friend];


// type inference

let course = 'react';

// union types

let theCourse: string | number = 'react';
theCourse = 123;
