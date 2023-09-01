function addNewWEField() {
    //console.log("Adding new Field");
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("addWEhere");
    weOb.insertBefore(newNode, weAddButtonOb);

}

function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let aqOb = document.getElementById("aq")
    let aqAddbuttonOb = document.getElementById("addEQhere");
    aqOb.insertBefore(newNode, aqAddbuttonOb);
}
function generateCV() {
    //    console.log("generating CV");  
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;
    //direct
    document.getElementById("nameT2").innerHTML = nameField;

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

    //address
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;
    document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;

    //objective
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    let wes = document.getElementsByClassName("weField");

    let str = "";
    for (let e of wes) {
        str = str + `<li>${e.value} </li>`;
    }
    console.log(str)
    document.getElementById("weT").innerHTML = str;
    //aq
    let aqs = document.getElementsByClassName("eqField");
    let str1 = " ";
    for (let e of aqs) {

        str1 += `<li>${e.value}<li>`;
    }
    document.getElementById("aqT").innerHTML = str1;
    console.log("run")
    document.getElementById("cv-form").classList.add("hide")
    document.getElementById("cv-template").classList.remove("hide");

}

//print CV
function PrintCV() {
    window.print();
}