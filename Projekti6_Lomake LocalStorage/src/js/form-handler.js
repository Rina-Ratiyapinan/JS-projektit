document.getElementById("infoForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default behavior

  // Collect form data into an object
  const formData = {
      etunimi: document.getElementById("etunimi").value,
      sukunimi: document.getElementById("sukunimi").value,
      lahiosoite: document.getElementById("lahiosoite").value,
      postinumero: document.getElementById("postinumero").value,
      postitoimipaikka: document.getElementById("postitoimipaikka").value,
      puhelin: document.getElementById("puhelin").value,
      sahkoposti: document.getElementById("sahkoposti").value,
  };

  // Save data to localStorage
  const savedData = JSON.parse(localStorage.getItem("formData")) || [];
  savedData.push(formData);
  localStorage.setItem("formData", JSON.stringify(savedData));

  // Alert user
  alert("Tiedot tallennettu!");

  // Clear form
  event.target.reset();
});
