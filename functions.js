const container = document.querySelector(".container");

// Creo la riga che conterrà le card
let rowHTML = '<div class="row mb-4">';

// Ciclo for sui membri del team
for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];

  // Aggiungio ogni card come stringa HTML
  rowHTML += `
<div class="col-4 mb-3">
<div class="d-flex border p-3">
<img src="${member.img}" width="100" alt="${member.name}">
<div class="ms-3">
<strong>${member.name}</strong><br>
${member.role}<br>
<a href="mailto:${member.email}">${member.email}</a>
</div>
</div>
</div>
`;
}

rowHTML += "</div>";

// Inserisco tutto dentro il container
container.innerHTML += rowHTML;
