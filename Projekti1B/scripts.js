function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm() {
  const email = document.getElementById('email').value; //Getting the email input value
  const form = document.getElementById('kyselylomake'); //Selecting the form

  //email validation
  if (emailIsValid(sahkoposti)) {
    // If the email is valid, do nothing, form submission can proceed
    return true;
  } else {
    // If the email is not valid
    alert("Anna oikea sähköpostiosoitteesi"); // Alert user
    lomake.email.focus(); // Focus on email input field
    return false; // Prevent form submission
  }
}