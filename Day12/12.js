// الواجب الاول ( كلاس )
function isGreaterThan () {
    let x = 5;
    if (user > x) {
        alert(user + x)
    } else if (user == x) {
        alert("=")
    } else {
        alert("Error")
    }
}
let apply = (value, operation) => {
    return operation(value)
}
let user = Number(prompt("Enter number :"))
let result = apply(user, isGreaterThan)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// الواجب الثاني
let javascript_Boot_camp = (teach) => {
    alert("This javaScript BootCamp with teacher1 OK?");
    alert("This javaScript BootCamp with teacher2 OK?");
}
javascript_Boot_camp()
// 
let average = (number_a, number_b) => {
    let number_all = number_a + number_b;
    alert(number_all / 2)
}
average(8, 10)
average(5.5, 9.5)
