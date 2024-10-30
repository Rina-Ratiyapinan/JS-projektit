function check()
{
  var etunimi = document.getElementById('fname').value;
  var sukunimi = document.getElementById('lname').value;
  var email = document.getElementById('email').value;
  var salasana = document.getElementById('password').value;
  if (etunimi == "" || sukunimi == "" || email == "" || salasana == "")
  {
    alert ("Et antanut kaikkia tietoja. Ole hyvä ja tarkista");
    }
  else
{
    document.getElementById('p1').innerHTML = "Viestisi on lähetetty."
}
}