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