//currently checks if the information fields are empty, any changes possible...
function check(event)
{
  event.preventDefault();
  var etunimi = document.getElementById('fname').value;
  var sukunimi = document.getElementById('lname').value;
  var email = document.getElementById('email').value;
  var salasana = document.getElementById('password').value;
  var palaute = document.getElementById('textfield').value;
  var mail = /\S+@\S+/;
  if (etunimi == "" || sukunimi == "" || salasana == ""|| palaute == "")
  var mail = /\S+@\S+/;
  if (etunimi == "" || sukunimi == "" || salasana == "")
    {
      alert ("You didn't give all the all the information. Please check.");
    }
  else if (!mail.test(email))
    {
    alert ("Give valid email address");
  }


  //checks password
  if (salasana.length < 12) {
    alert("Password needs to be at least 12 characters long");
  }

  else if (!/[a-z]/.test(salasana)) {
    alert("Passwords needs to have one lower case letter(a-z)");
  }

  else if (!/[A-Z]/.test(salasana)){
    alert("Password needs to have one capital letter(A-Z");
  }
  else if (!/[0-9]/.test(salasana)) {
    alert("Password needs to have number");
  }
// checks checkboxes
event.preventDefault();
    var chk = document.getElementsByName("device");
    var hasChecked = false;
    for (var i = 0; i < chk.length; i++) 
      {
      if (chk[i].checked) {
        hasChecked = true;
      }
    }
    if (hasChecked == false) {
      alert("Check at least one device");
    }
//checks radioboxes
  var chkR = document.getElementsByName(leffa);
  var hasChk = false;
  for(var i = 0; i < chkR.length; i++)
  {
    if(chkR[i].checked) {
      hasChk = true;
    }
  }
      if (hasChk == false) {
        alert("Check at least one movie");
    }
}