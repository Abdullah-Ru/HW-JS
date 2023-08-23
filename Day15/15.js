let Addbutton = document.getElementById("Button_add")
let Deletebutton = document.getElementById("Button_delete")
list = []
createdate = []
BOOLEAN = []
window.addEventListener("load", function () {
    list = JSON.parse(localStorage.getItem("list")) || [];
    createdate = JSON.parse(this.localStorage.getItem("createdate")) || [];
    BOOLEAN = JSON.parse(this.localStorage.getItem("BOOLEAN")) || [];
    for (let i = 0; i < list.length; i++) {
        let listt = list[i]
        let createdatee = createdate[i]
        let BOOLEANN = BOOLEAN[i]
        let myelement = document.getElementById("table")
        let myelementtr = document.createElement("tr")
        let myelementtd = document.createElement("td")
        let myelement_truefalse = document.createElement("td")
        let myelement_createdate = document.createElement("td")
        let myelement_editdate = document.createElement("td")
        const d = new Date().toLocaleDateString('ar-sa', { weekday: "long", year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric" });
        let updatebutton = document.createElement("button")
        let dbutton = document.createElement("button")

        let spa = document.createElement("span")
        let $spa = document.createElement("span")
        let td = document.createElement("td")
        myelementtd.textContent = listt;
        myelement_truefalse.textContent = BOOLEANN;
        spa.textContent = "تحديث المهمة";
        $spa.textContent = "حذف المهمة";
        myelement_createdate.textContent = createdatee;
        Deletebutton.addEventListener("click", function () {
            list.splice(list)
            localStorage.setItem("list", JSON.stringify(list))
            createdate.splice(createdate)
            localStorage.setItem("createdate", JSON.stringify(createdate))
            BOOLEAN.splice(BOOLEAN)
            localStorage.setItem("BOOLEAN", JSON.stringify(BOOLEAN))
            myelementtr.removeChild(myelementtd)
            myelement.removeChild(myelementtr)
            myelement.removeChild(Deletebutton)
        })
        updatebutton.addEventListener("click", function () {
            localStorage.setItem("list", JSON.stringify(list))
            localStorage.setItem("createdate", JSON.stringify(createdate))
            localStorage.setItem("BOOLEAN", JSON.stringify(BOOLEAN))
            let up = prompt("ادخل المهمة الجديدة")
            myelementtd.textContent = up;
            myelement_editdate.textContent = new Date().toLocaleDateString('ar-sa', { weekday: "long", year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric" });;
        })

        dbutton.addEventListener("click", function () {
            list.splice(list, 1)
            localStorage.setItem("list", JSON.stringify(list))
            createdate.splice(createdate)
            localStorage.setItem("createdate", JSON.stringify(createdate))
            BOOLEAN.splice(BOOLEAN)
            localStorage.setItem("BOOLEAN", JSON.stringify(BOOLEAN))
            myelement.removeChild(myelementtr)
        })
        myelement.appendChild(myelementtr)
        myelementtr.appendChild(myelementtd)
        myelementtr.appendChild(myelement_truefalse)
        myelementtr.appendChild(myelement_createdate)
        myelementtr.appendChild(myelement_editdate)
        myelementtr.appendChild(updatebutton)
        myelementtr.appendChild(dbutton)
        myelementtr.appendChild(td)
        td.appendChild(dbutton)
        dbutton.appendChild($spa)
        updatebutton.appendChild(spa)

    }
})
Addbutton.addEventListener("click", function () {
    let myelement = document.getElementById("table")
    let myelementtr = document.createElement("tr")
    let myelementtd = document.createElement("td")
    let myelement_truefalse = document.createElement("td")
    let myelement_createdate = document.createElement("td")
    let myelement_editdate = document.createElement("td")
    const d = new Date().toLocaleDateString('ar-sa', { weekday: "long", year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric" });
    let updatebutton = document.createElement("button")
    let dbutton = document.createElement("button")

    let spa = document.createElement("span")
    let $spa = document.createElement("span")
    let td = document.createElement("td")

    spa.textContent = "تحديث المهمة";
    $spa.textContent = "حذف المهمة";
    myelement.appendChild(myelementtr)
    myelementtr.appendChild(myelementtd)
    myelementtr.appendChild(myelement_truefalse)
    myelementtr.appendChild(myelement_createdate)
    myelementtr.appendChild(myelement_editdate)
    myelementtr.appendChild(updatebutton)
    myelementtr.appendChild(dbutton)
    myelementtr.appendChild(td)
    td.appendChild(dbutton)
    dbutton.appendChild($spa)
    updatebutton.appendChild(spa)


    let usertd = prompt("ادخل المهمة")
    myelementtd.textContent = usertd;
    let user_ask = confirm("هل انهيتها ؟")
    if (user_ask == true) {
        myelement_truefalse.textContent = "تمت"
    } else {
        myelement_truefalse.textContent = "لم تتم"
    }
    myelement_createdate.textContent = d;
    Deletebutton.addEventListener("click", function () {
        myelementtr.removeChild(myelementtd)
        myelement.removeChild(myelementtr)
        myelement.removeChild(Deletebutton)
    })
    updatebutton.addEventListener("click", function () {
        let up = prompt("ادخل المهمة الجديدة")
        myelementtd.textContent = up;
        myelement_editdate.textContent = new Date().toLocaleDateString('ar-sa', { weekday: "long", year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric" });;
    })

    dbutton.addEventListener("click", function () {
        myelement.removeChild(myelementtr)
    })
    list.push(myelementtd.textContent)
    localStorage.setItem("list", JSON.stringify(list))
    createdate.push(myelement_createdate.textContent)
    localStorage.setItem("createdate", JSON.stringify(createdate))
    BOOLEAN.push(myelement_truefalse.textContent)
    localStorage.setItem("BOOLEAN", JSON.stringify(BOOLEAN))
})