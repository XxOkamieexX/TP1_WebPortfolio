const apiBase = "http://localhost:5200/api/msg" // api base url
const form = document.getElementById("msgForm");
const msgIdInput = document.getElementById("messageId");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const msgInput = document.getElementById("message");

// Charger tous les messages
async function fetchMessages() {
    const res = await fetch(apiBase);
    const msg = await res.json();
    msgTableBody.innerHTML = "";
    const valuesArray = Object.values(msg)[1];
    console.log("Tableau:", valuesArray)
    for(i=0;i<valuesArray.length;i++){
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${valuesArray[i].firstName}</td>
            <td>${valuesArray[i].lastName}</td>
            <td>${valuesArray[i].email}</td>
            <td>${valuesArray[i].message}</td>
        `;
        msgTableBody.appendChild(row);
    }
}

//Ajouter ou mettre à jour un utilisateur
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const msgData = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        message: msgInput.value
    };
    if (msgIdInput.value) {
        //Mise à jour
        await fetch(`${apiBase}/${msgIdInput.value}`, {
            method: "PUT",
            headers: {"Content-type": "application/json"},
            
        });
    }
    resetForm();
    fetchMessages();
})

// Remplir le formulaire pour l'édition
async function editMessage(id) {
    const res = await fetch(`${apiBase}/${id}`);
    const msg = await res.json();
    msgIdInput.value = msg._id;
    firstNameInput.value = msg.firstName;
    lastNameInput.value = msg.lastName;
    emailInput.value = msg.email;
    msgInput.value = ""; // Édition du message
}

// Supprimer un message
async function deleteMessage(id) {
    if (confirm("Voulez-vous vraiment supprimer ce message ?")) {
        await fetch(`${apiBase}/${id}`, { method: "DELETE" });
        fetchMessages();
    }
}

//Réinitialiser le formulaire
function resetForm() {
    msgIdInput.value = "";
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
}

//Charger les utilisateurs au chargement de la page
fetchMessages();
