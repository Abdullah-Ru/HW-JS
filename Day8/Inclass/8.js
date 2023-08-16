let number = 2;
if (number > 0) {
    console.log("Yes");
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let Name = "Abdulaziz"
let Age = 17;
if (Age <= 17 && Name == "Abdulaziz" ) {
    console.log("Hi "+Name+" Welcome back");
} else if (Name == "Ghali" || Name == "Abdullah") {
    console.log("Hi "+Name);
} else {
    console.log("You are not remember");
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let Score = prompt("enter your score :");
if (Score >= 101) {
    alert("Impossible")
} else if (Score >= 95) {
    alert("Your grade is A+")
} else if (Score >= 90) {
    alert("Your grade is A")
} else if (Score >= 85) {
    alert("Your grade is B+")
} else if (Score >= 80) {
    alert("Your grade is B")
} else if (Score >= 75) {
    alert("Your hrade is C+")
} else if (Score >= 70) {
    alert("Your grade is D+")
} else if (Score >= 65) {
    alert("Your grade is D")
} else {
    alert("Fail")
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let speed = prompt("Enter Your speed :");
let speedLimit = 120;

let Message = speed > speedLimit ? "أنت تقود بسرعة زائدة" : "أنت تقود بأمان";

alert(Message)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let Name_2 = prompt("Enter your name :")
switch (Name_2) {
    case "Abdullah":
        alert("Hi "+Name_2)
        break;
    case "Ghali":
        alert("Hi "+Name_2)
        break;
    default:
        alert("Who are you ?")
        break;
}