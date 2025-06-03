//1.0
var str = "Wonderful, Joyful, Happiness, Time, Task, Apple"
var pattern = /\b[^Aa]{6,}\b/;
console.log(str.match(pattern));
//1.1
var str = "Wonderful, Joyful, Happiness, Time, Task, Apple"
var pattern = /\b[b-z]{6,}\b/ig;
console.log(str.match(pattern));
//2.0
var str = "Wonderful, Joyful, Happiness, Time, Task, Apple"
var pattern = /[B-Z][^a,\s]{5,}/g;
console.log(str.match(pattern));
//final
var str = "Wonderful, Joyful, Happiness, Time, Task, Apple"
var pattern = /\b[^Aa\s]{6,}\b/g;
console.log(str.match(pattern));