console.log("Hi")

function validateForm() {
    var fullname = document.forms["reservationForm"]["name"].value;
    var phone = document.forms["reservationForm"]["phone"].value;
    var date = document.forms["reservationForm"]["date"].value;
    var time = document.forms["reservationForm"]["time"].value;
    var guests = document.forms["reservationForm"]["guests"].value;
    
    if (fullname == "" ||  phone == "" || date == "" || time == "" || guests == "") {
      alert("Please fill in all required fields.");
      return false;
    }
    
    
    return true;
  }
