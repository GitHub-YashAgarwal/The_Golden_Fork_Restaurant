function BookTable() {

    var People = (document.getElementById("Number of People").value);

    if(People == "Number of People") {
        alert("Please select the Number of People");
        document.getElementById("Number of People").focus();          
        return;
    }

    var date = (document.getElementById("Date").value);

    if(date == "") {
        alert("Please select the Date");
        document.getElementById("Date").focus();            
        return;
    }

    var time = (document.getElementById("Time").value);

    if(time == "") {
        alert("Please select the Time");
        document.getElementById("Time").focus();
        return;
    } 

    else {
        alert("Your Table is Booked for " + People + " for " + date + " for " + time + " .\nThanks for Booking.");
    }
    
}

function addtocart1() {
    document.getElementById("items1").style.display = "block";
    document.getElementById("add-to-cart1").style.display = "none";
}

function quantplus1() {
    var value = parseInt(document.getElementById("quant1").value);
    value++;
    document.getElementById("quant1").value = value;
}

function quantsub1() {

    var value = parseInt(document.getElementById("quant1").value);

    if(value<=1) {
        document.getElementById("items1").style.display = "none";
        document.getElementById("add-to-cart1").style.display = "block";
    }
    else {
        value--;
        document.getElementById("quant1").value = value;
    }   
}

function addtocart2() {
    document.getElementById("items2").style.display = "block";
    document.getElementById("add-to-cart2").style.display = "none";
}

function quantplus2() {
    var value = parseInt(document.getElementById("quant2").value);
    value++;
    document.getElementById("quant2").value = value;
}

function quantsub2() {

    var value = parseInt(document.getElementById("quant2").value);

    if(value<=1) {
        document.getElementById("items2").style.display = "none";
        document.getElementById("add-to-cart2").style.display = "block";
    }
    else {
        value--;
        document.getElementById("quant2").value = value;
    }
}

function addtocart3() {
    document.getElementById("items3").style.display = "block";
    document.getElementById("add-to-cart3").style.display = "none";
}

function quantplus3() {
    var value = parseInt(document.getElementById("quant3").value);
    value++;
    document.getElementById("quant3").value = value;
}

function quantsub3() {

    var value = parseInt(document.getElementById("quant3").value);

    if(value<=1) {
        document.getElementById("items3").style.display = "none";
        document.getElementById("add-to-cart3").style.display = "block";
    }
    else {
        value--;
        document.getElementById("quant3").value = value;
    }
}

function addtocart4() {
    document.getElementById("items4").style.display = "block";
    document.getElementById("add-to-cart4").style.display = "none";
}

function quantplus4() {
    var value = parseInt(document.getElementById("quant4").value);
    value++;
    document.getElementById("quant4").value = value;
}

function quantsub4() {

    var value = parseInt(document.getElementById("quant4").value);

    if(value<=1) {
        document.getElementById("items4").style.display = "none";
        document.getElementById("add-to-cart4").style.display = "block";
    }
    else {
        value--;
        document.getElementById("quant4").value = value;
    }
}

function addtocart5() {
    document.getElementById("items5").style.display = "block";
    document.getElementById("add-to-cart5").style.display = "none";
}

function quantplus5() {
    var value = parseInt(document.getElementById("quant5").value);
    value++;
    document.getElementById("quant5").value = value;
}

function quantsub5() {

    var value = parseInt(document.getElementById("quant5").value);

    if(value<=1) {
        document.getElementById("items5").style.display = "none";
        document.getElementById("add-to-cart5").style.display = "block";
    }
    else {
        value--;
        document.getElementById("quant5").value = value;
    }
}

function addtocart6() {
    document.getElementById("items6").style.display = "block";
    document.getElementById("add-to-cart6").style.display = "none";
}

function quantplus6() {
    var value = parseInt(document.getElementById("quant6").value);
    value++;
    document.getElementById("quant6").value = value;
}

function quantsub6() {

    var value = parseInt(document.getElementById("quant6").value);

    if(value<=1) {
        document.getElementById("items6").style.display = "none";
        document.getElementById("add-to-cart6").style.display = "block";
    }
    else {
        value--;
        document.getElementById("quant6").value = value;
    }
}

function addtocart7() {
    document.getElementById("items7").style.display = "block";
    document.getElementById("add-to-cart7").style.display = "none";
}

function quantplus7() {
    var value = parseInt(document.getElementById("quant7").value);
    value++;
    document.getElementById("quant7").value = value;
}

function quantsub7() {

    var value = parseInt(document.getElementById("quant7").value);

    if(value<=1) {
        document.getElementById("items7").style.display = "none";
        document.getElementById("add-to-cart7").style.display = "block";
    }
    else {
        value--;
        document.getElementById("quant7").value = value;
    }
}

function addtocart8() {
    document.getElementById("items8").style.display = "block";
    document.getElementById("add-to-cart8").style.display = "none";
}

function quantplus8() {
    var value = parseInt(document.getElementById("quant8").value);
    value++;
    document.getElementById("quant8").value = value;
}

function quantsub8() {

    var value = parseInt(document.getElementById("quant8").value);

    if(value<=1) {
        document.getElementById("items8").style.display = "none";
        document.getElementById("add-to-cart8").style.display = "block";
    }
    else {
        value--;
        document.getElementById("quant8").value = value;
    }
}

function addtocart9() {
    document.getElementById("items9").style.display = "block";
    document.getElementById("add-to-cart9").style.display = "none";
}

function quantplus9() {
    var value = parseInt(document.getElementById("quant9").value);
    value++;
    document.getElementById("quant9").value = value;
}

function quantsub9() {

    var value = parseInt(document.getElementById("quant9").value);

    if(value<=1) {
        document.getElementById("items9").style.display = "none";
        document.getElementById("add-to-cart9").style.display = "block";
    }
    else {
        value--;
        document.getElementById("quant9").value = value;
    }
}

function addtocart10() {
    document.getElementById("items10").style.display = "block";
    document.getElementById("add-to-cart10").style.display = "none";
}

function quantplus10() {
    var value = parseInt(document.getElementById("quant10").value);
    value++;
    document.getElementById("quant10").value = value;
}

function quantsub10() {

    var value = parseInt(document.getElementById("quant10").value);

    if(value<=1) {
        document.getElementById("items10").style.display = "none";
        document.getElementById("add-to-cart10").style.display = "block";
    }
    else {
        value--;
        document.getElementById("quant10").value = value;
    }
}

function addtocart11() {
    document.getElementById("items11").style.display = "block";
    document.getElementById("add-to-cart11").style.display = "none";
}

function quantplus11() {
    var value = parseInt(document.getElementById("quant11").value);
    value++;
    document.getElementById("quant11").value = value;
}

function quantsub11() {

    var value = parseInt(document.getElementById("quant11").value);

    if(value<=1) {
        document.getElementById("items11").style.display = "none";
        document.getElementById("add-to-cart11").style.display = "block";
    }
    else {
        value--;
        document.getElementById("quant11").value = value;
    }
}

function addtocart12() {
    document.getElementById("items12").style.display = "block";
    document.getElementById("add-to-cart12").style.display = "none";
}

function quantplus12() {
    var value = parseInt(document.getElementById("quant12").value);
    value++;
    document.getElementById("quant12").value = value;
}

function quantsub12() {

    var value = parseInt(document.getElementById("quant12").value);

    if(value<=1) {
        document.getElementById("items12").style.display = "none";
        document.getElementById("add-to-cart12").style.display = "block";
    }
    else {
        value--;
        document.getElementById("quant12").value = value;
    }
}

function addtocart13() {
    document.getElementById("items13").style.display = "block";
    document.getElementById("add-to-cart13").style.display = "none";
}

function quantplus13() {
    var value = parseInt(document.getElementById("quant13").value);
    value++;
    document.getElementById("quant13").value = value;
}

function quantsub13() {

    var value = parseInt(document.getElementById("quant13").value);

    if(value<=1) {
        document.getElementById("items13").style.display = "none";
        document.getElementById("add-to-cart13").style.display = "block";
    }
    else {
        value--;
        document.getElementById("quant13").value = value;
    }
}

function addtocart14() {
    document.getElementById("items14").style.display = "block";
    document.getElementById("add-to-cart14").style.display = "none";
}

function quantplus14() {
    var value = parseInt(document.getElementById("quant14").value);
    value++;
    document.getElementById("quant14").value = value;
}

function quantsub14() {

    var value = parseInt(document.getElementById("quant14").value);

    if(value<=1) {
        document.getElementById("items14").style.display = "none";
        document.getElementById("add-to-cart14").style.display = "block";
    }
    else {
        value--;
        document.getElementById("quant14").value = value;
    }
}

function addtocart15() {
    document.getElementById("items15").style.display = "block";
    document.getElementById("add-to-cart15").style.display = "none";
}

function quantplus15() {
    var value = parseInt(document.getElementById("quant15").value);
    value++;
    document.getElementById("quant15").value = value;
}

function quantsub15() {

    var value = parseInt(document.getElementById("quant15").value);

    if(value<=1) {
        document.getElementById("items15").style.display = "none";
        document.getElementById("add-to-cart15").style.display = "block";
    }
    else {
        value--;
        document.getElementById("quant15").value = value;
    }
}

function addtocart16() {
    document.getElementById("items16").style.display = "block";
    document.getElementById("add-to-cart16").style.display = "none";
}

function quantplus16() {
    var value = parseInt(document.getElementById("quant16").value);
    value++;
    document.getElementById("quant16").value = value;
}

function quantsub16() {

    var value = parseInt(document.getElementById("quant16").value);

    if(value<=1) {
        document.getElementById("items16").style.display = "none";
        document.getElementById("add-to-cart16").style.display = "block";
    }
    else {
        value--;
        document.getElementById("quant16").value = value;
    }
}

function addtocart17() {
    document.getElementById("items17").style.display = "block";
    document.getElementById("add-to-cart17").style.display = "none";
}

function quantplus17() {
    var value = parseInt(document.getElementById("quant17").value);
    value++;
    document.getElementById("quant17").value = value;
}

function quantsub17() {

    var value = parseInt(document.getElementById("quant17").value);

    if(value<=1) {
        document.getElementById("items17").style.display = "none";
        document.getElementById("add-to-cart17").style.display = "block";
    }
    else {
        value--;
        document.getElementById("quant17").value = value;
    }
}

function addtocart18() {
    document.getElementById("items18").style.display = "block";
    document.getElementById("add-to-cart18").style.display = "none";
}

function quantplus18() {
    var value = parseInt(document.getElementById("quant18").value);
    value++;
    document.getElementById("quant18").value = value;
}

function quantsub18() {

    var value = parseInt(document.getElementById("quant18").value);

    if(value<=1) {
        document.getElementById("items18").style.display = "none";
        document.getElementById("add-to-cart18").style.display = "block";
    }
    else {
        value--;
        document.getElementById("quant18").value = value;
    }
}
