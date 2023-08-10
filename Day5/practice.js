// الطباعة
{
    console.log("Abdullah"); // امر الطباعة
}
// المتغيرات
{
    // explicit
    let TuwaiqAcademy = "Tuwaiq"; // امر التعريف بمتغير بطريقة explicit
    console.log(TuwaiqAcademy);
    // implicit
    let Tuwaiq; // امر التعريف بمتغير بطريقة ال implicit
    Tuwaiq="TuwaiqAcademy";
    console.log(Tuwaiq);
    // const ثابته لا تتغير
    const Id = 1136167000; // امر التعريف بثابت ولا يمكن تعريفه بطريقة ال implicit
    console.log("My id is :", Id);
}
// انواع البيانات
{
    let #Boolean = true; // تحتمل قميتين 
    let $Symbol = Symbol(1); // قيمة ثابته
    let $null = null; // قيمة فارغه
    let $Undefiend; // قيمة غير محددة
    let Numbers { // object
        int : 12, // عدد صحيح
        double : 12.5, // عدد عشري
        bigin : 100000000n // عدد كبير
    }
    let $string = "Abdullah"; // قيمة نصية
}
// الاقتباس
{
    let Quote = "Hello from 'JavaScript' class"; // الطريقة الاولى
    let Quote2 = 'Hello from "JavaScript" class'; // الطريقة الثانيه
    console.log(Quote);
    console.log(Quote2);
}
//
{
    let Quote;
    Quote = "Hello from \'Javascript\' class"; // الطريقة الثالثه
    console.log(Quote);
}
// الاستبدال المنطقي
{
    let City = 'Sudair';
    let State = 'Riyadh';
    let logic = `${City} in ${State} State`;
    console.log(logic);
}
// خصائص النصوص
{
    let Word;
    Word = 'Hello from JavaScript class';
    console.log(Word.length); // > ( عدد الاحرف )
    console.log(Word.charAt(0)); // > (0 = اول حرف)
    console.log(Word.slice(0, 10)); // > حذف حرف
    console.log(Word.split(" ", 2)); // > تقسيم الكلمات 
}
// التحويل بين البيانات
{
    // $str = String()
    // $num = Number()
    // $Boolean = Boolean()

}