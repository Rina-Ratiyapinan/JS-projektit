function lahetaVastaukset() {
  // Initialize variables
  var yhteensa = 5;
  var pisteet = 0; // Alustetaan yhteispisteet 0:ksi
  var huom = 0; // Huomio, jos kysymyksiin ei ole vastattu

  // Retrieve user inputs from the form
  var k1 = document.forms["kyselyLomake"]["k1"].value;
  var k2 = document.forms["kyselyLomake"]["k2"].value;
  var k3 = document.forms["kyselyLomake"]["k3"].value;
  var k4 = document.forms["kyselyLomake"]["k4"].value;
  var k5 = document.forms["kyselyLomake"]["k5"].value;

  // Check if all questions have been answered
  for (var i = 1; i <= yhteensa; i++) {
      if (eval('k' + i) == null || eval('k' + i) == '') {
          alert('Et vastannut kysymykseen numero: ' + i);
          huom = 1;
      }
  }
  if (huom == 1) return false; // If any question is unanswered, stop function execution

  // Define the correct answers in an array
  var vastaukset = ["b", "a", "d", "b", "d"];
  
  // Check user answers against the correct answers
  for (var i = 1; i <= yhteensa; i++) {
      if (eval('k' + i) == vastaukset[i - 1]) {
          pisteet++; // Increment score for each correct answer
      }
  }

  // Display the result using both an alert and in HTML on the page
  var tulokset = document.getElementById('tulokset');
  alert('Sait ' + pisteet + ' pistettä, kun maksimi pistemäärä oli ' + yhteensa);
  tulokset.innerHTML = '<h3>Sait <span>' + pisteet + '</span> pistettä, kun maksimi pistemäärä oli <span>' + yhteensa + '</span></h3>';
  return false;
}