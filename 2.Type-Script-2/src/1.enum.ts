///enums are used when we have a group of closely related constants
/*
 -Jan,Feb,Mar...,
 -Mon,Tues,Wed...,
 -loading,error,suceess...,
 -drafts, sumbmitted,approved,rejected...
*/

enum Direction {
  East = "east",
  West = "west",
  North = "north",
  South = "south",
}
console.log(Direction);
enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Satday,
  Sunday,
}
enum DaysName {
  Mon="Monday",
  Tues="Tuesday",
  Wed="Wednesday",
  Thurs="Thursday",
  Fri="Friday",
  Sat="Saturday",
  Sun="Sunday",
}
let days_of_week=Days;
console.log(days_of_week)