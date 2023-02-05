///enums are used when we have a group of closely related constants
/*
 -Jan,Feb,Mar...,
 -Mon,Tues,Wed...,
 -loading,error,suceess...,
 -drafts, sumbmitted,approved,rejected...
*/
var Direction;
(function (Direction) {
    Direction["East"] = "east";
    Direction["West"] = "west";
    Direction["North"] = "north";
    Direction["South"] = "south";
})(Direction || (Direction = {}));
console.log(Direction);
var Days;
(function (Days) {
    Days[Days["Monday"] = 0] = "Monday";
    Days[Days["Tuesday"] = 1] = "Tuesday";
    Days[Days["Wednesday"] = 2] = "Wednesday";
    Days[Days["Thursday"] = 3] = "Thursday";
    Days[Days["Friday"] = 4] = "Friday";
    Days[Days["Satday"] = 5] = "Satday";
    Days[Days["Sunday"] = 6] = "Sunday";
})(Days || (Days = {}));
var DaysName;
(function (DaysName) {
    DaysName["Mon"] = "Monday";
    DaysName["Tues"] = "Tuesday";
    DaysName["Wed"] = "Wednesday";
    DaysName["Thurs"] = "Thursday";
    DaysName["Fri"] = "Friday";
    DaysName["Sat"] = "Saturday";
    DaysName["Sun"] = "Sunday";
})(DaysName || (DaysName = {}));
let days_of_week = Days;
console.log(days_of_week);
