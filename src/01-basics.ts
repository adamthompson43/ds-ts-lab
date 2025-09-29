import {Friend, Colleague, ColleagueHistory } from './myTypes'

const friend1 = {
  name: "Anna Shevtsova",
  phone: "087-12345",
  age: 19,
  dob: new Date("2005-11-22") ,
};

const friend2 = {
  name: "Shane Power",
  phone: "086--12345",
  age: 31,
  interests: ['Smoking', 'Drinking']
};

const friend3 = {
  name: "Ben O'Keeffe",
  phone: "085-56789",
  age: 29,
}

export const friends = [friend1, friend2, friend3];
// console.log(friends[1]);

//   -------------------
const colleague1 = {
  name: "Ralph Graham",
  department: "Engineering",
  contact: {
    email: "rgraham@company.com",
    extension: 121,
  },
};

const colleague2 = {
  name: "Patti Burke",
  department: "Finance",
  contact: {
    email: "pburke@company.com",
    extension: 132,
  },
};

const colleague3 = {
  name: "Ben O'Keeffe",
  department: "HR",
  contact: {
    email: "dos@company.com",
    extension: 125,
  },
};

export const colleagues : ColleagueHistory = {
  current: [colleague1, colleague2, colleague3],
  former: [],
};




// console.log(colleagues.current[0]);

