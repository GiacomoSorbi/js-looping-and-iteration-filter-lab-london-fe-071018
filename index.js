// Code your solution in this file
const findMatching = (d,s) => d.filter(e=>e.toLowerCase() === s.toLowerCase());
const findMatching= (d,s) => d.filter(e=>e.startsWith(s));
const matchName = (d,s) => d.filter(e=>e.toLowerCase() === s.toLowerCase());