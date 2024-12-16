document.addEventListener("DOMContentLoaded", function () {
  const savedData = JSON.parse(localStorage.getItem("formData")) || [];
  const tableBody = document.querySelector("#dataTable tbody");
  const totalSumElement = document.getElementById("totalSum");
  const searchInput = document.getElementById("search");
  const searchButton = document.getElementById("searchButton");

  // Render saved data to table
  function renderTable(data) {
      tableBody.innerHTML = ""; // Clear existing rows
      data.forEach((entry, index) => {
          const row = document.createElement("tr");

          Object.values(entry).forEach((value) => {
              const cell = document.createElement("td");
              cell.textContent = value;
              row.appendChild(cell);
          });

          // Add edit/delete buttons
          const actionsCell = document.createElement("td");
          const editButton = document.createElement("button");
          editButton.textContent = "Muokkaa";
          editButton.addEventListener("click", () => editEntry(index));

          const deleteButton = document.createElement("button");
          deleteButton.textContent = "Poista";
          deleteButton.addEventListener("click", () => deleteEntry(index));

          actionsCell.appendChild(editButton);
          actionsCell.appendChild(deleteButton);
          row.appendChild(actionsCell);

          tableBody.appendChild(row);
      });
      totalSumElement.textContent = data.length; // Update total count
  }

  // Edit an entry
  function editEntry(index) {
      const newEntry = prompt("Päivitä tiedot muodossa: Etunimi, Sukunimi, Lähiosoite, Postinumero, Postitoimipaikka, Puhelin, Sähköposti", 
          Object.values(savedData[index]).join(", ")
      );
      if (newEntry) {
          const updatedValues = newEntry.split(",").map((v) => v.trim());
          savedData[index] = {
              etunimi: updatedValues[0],
              sukunimi: updatedValues[1],
              lahiosoite: updatedValues[2],
              postinumero: updatedValues[3],
              postitoimipaikka: updatedValues[4],
              puhelin: updatedValues[5],
              sahkoposti: updatedValues[6],
          };
          localStorage.setItem("formData", JSON.stringify(savedData));
          renderTable(savedData);
      }
  }

  // Delete an entry
  function deleteEntry(index) {
      if (confirm("Haluatko varmasti poistaa tämän tiedon?")) {
          savedData.splice(index, 1);
          localStorage.setItem("formData", JSON.stringify(savedData));
          renderTable(savedData);
      }
  }

  // Search functionality
  searchButton.addEventListener("click", function () {
      const query = searchInput.value.toLowerCase();
      const filteredData = savedData.filter((entry) =>
          Object.values(entry).some((value) => value.toLowerCase().includes(query))
      );
      renderTable(filteredData);
  });

  // Initial render
  renderTable(savedData);
});
