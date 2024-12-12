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

    msg.forEach((msg) =>{
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${msg.firstName}</td>
            <td>${msg.lastName}</td>
            <td>${msg.email}</td>
            <td>${msg.message}</td>
            <td>
                <button onclick="editMessage('${message._id}')">Modifier</button>
                <button onclick="deleteMessage('${message._id}')">Supprimer</button>
            </td>
        `;
        msgTableBody.appendChild(row);
    });
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
            body: JSON.stringify(msgData),
        });
    } else {
        //Ajout
        await fetch(apiBase, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(msgData),
        });
    }
    resetForm();
    fetchMessages();
});

// Remplir le formulaire pour l'édition
async function editMessage(id) {
    const res = await fetch(`${apiBase}/${id}`);
    const msg = await res.json();
    msgIdInput.value = msg._id;
    firstNameInput.value = msg.firstName;
    lastNameInput.value = msg.lastName;
    emailInput.value = msg.email;
    msgInput.value = msg.msg; // Édition du message
}

// Supprimer un message
async function deleteMessage(id) {
    if (confirm("Voulez-vous vraiment supprimer ce message ?")) {
        const res = await fetch(`${apiBase}/${id}`, { method: "DELETE" });
        if (res.ok) {
            alert("Message supprimé avec succès !");
        } else {
            alert("Une erreur est survenue lors de la suppression.");
        }
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
