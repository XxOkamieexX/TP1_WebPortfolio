const apiBase = "http://localhost:5200/api/misc" // api base url
const form = document.getElementById("cookieForm");
const cookieIdInput = document.getElementById("cookieId");
const cookieInput = document.getElementById("cookie");

// Charger tous les cookies
async function fetchCookies() {
    const res = await fetch(apiBase);
    const cookie = await res.json();
    cookieTableBody.innerHTML = "";
    const valuesArray = Object.values(cookie)[1];
    console.log("Tableau:", valuesArray)
    for(i=0;i<valuesArray.length;i++){
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${valuesArray[i].cookie}</td>
        `;
        cookieTableBody.appendChild(row);
    }
}

//Ajouter ou mettre à jour un cookie d'utilisateur
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const cookieData = {
        cookie: cookieInput.value,
    };
    if (cookieIdInput.value) {
        //Mise à jour
        await fetch(`${apiBase}/${cookieIdInput.value}`, {
            method: "PUT",
            headers: {"Content-type": "application/json"},
            
        });
    }
    resetForm();
    fetchCookies();
})

// Remplir le formulaire pour l'édition
async function editCookie(id) {
    const res = await fetch(`${apiBase}/${id}`);
    const cookie = await res.json();
    cookieIdInput.value = cookie._id;
    cookieInput.value = cookie.cookie;
    cookieInput.value = ""; // Édition du message
}

// Supprimer un message
async function deleteCookie(id) {
    if (confirm("Voulez-vous vraiment supprimer ce cookie ?")) {
        await fetch(`${apiBase}/${id}`, { method: "DELETE" });
        fetchCookies();
    }
}

//Réinitialiser le formulaire
function resetForm() {
    cookieIdInput.value = "";
    cookieInput.value = "";
}

//Charger les utilisateurs au chargement de la page
fetchCookies();