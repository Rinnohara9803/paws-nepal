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

// type alias

type Person = {
  name: string;
  age: number;
};

let friend: Person;

friend = {
  name: "Ajay",
  age: 23,
};

let friends: Person[];

friends = [friend];

// type inference

let course = "react";

// union types

let theCourse: string | number = "react";
theCourse = 123;

// functions and types

const add = (a: number, b: number): string | number => {
  return "";
};

// generics

const updateArray = <T>(array: T[], value: T) => {
  return [value, ...array];
};

const newArray = updateArray(['3'], '4');
