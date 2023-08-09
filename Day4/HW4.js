// First practice
{
    let Num = Number(42);
    let $Num = String(Num);
    console.log(`${typeof $Num}:${$Num}`); // string:42
    //
    let StrNum = String("25");
    let $StrNum = Number(StrNum);
    console.log(`${typeof $StrNum}:${$StrNum}`) // number:25
}
//
console.log("------------------------------------------------------------------------------------------------------------------------");
// Second practice
{
    let $$StrNum = String("10");
    console.log($$StrNum + 10); // 1010
    console.log($$StrNum - 10); // 0
}
//
console.log("------------------------------------------------------------------------------------------------------------------------");
// Third practice
{
    let FloNum = "15.5";
    let $FloNum = Number(FloNum);
    console.log($FloNum * 2); // 31
    console.log($FloNum / 2); // 7.75
}
//
console.log("------------------------------------------------------------------------------------------------------------------------");
// 4th practice
{
    let $5 = String("5");
    let $3 = Number(3);
    console.log($5 + $3); // 53
}
//
console.log("------------------------------------------------------------------------------------------------------------------------");
// 5th practice
{
    let bool = Boolean(true);
    let $boolNum = Number(1);
    console.log(bool + $boolNum); // 2
}