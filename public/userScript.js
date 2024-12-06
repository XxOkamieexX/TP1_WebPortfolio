const apiBase = "http://localhost:5200/api/users"; // URL de l'API
const form = document.getElementById("userForm");
const userIdInput = document.getElementById("userId");
const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const userTableBody = document.getElementById("userTableBody");
// Charger tous les utilisateurs
async function fetchUsers() {
const res = await fetch(apiBase);
const users = await res.json();
userTableBody.innerHTML = "";
const valuesArray = Object.values(users)[1];
console.log("Tableau: ", valuesArray)
for(i=0;i<valuesArray.length;i++)

{
const row = document.createElement("tr");
row.innerHTML = `
<td>${valuesArray[i].fullName}</td>
<td>${valuesArray[i].email}</td> 
 `;
 userTableBody.appendChild(row);
};
}

// Ajouter ou mettre à jour un utilisateur

form.addEventListener("submit", async (e) => {
     e.preventDefault();
     const userData = {
     fullName: fullNameInput.value,
     email: emailInput.value,
     password: passwordInput.value,
     };
     if (userIdInput.value) {
     // Mise à jour
     await fetch(`${apiBase}/${userIdInput.value}`, {
     method: "PUT",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(userData),
     });
        } else {
            // Création
            await fetch(apiBase, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            });
        }
        resetForm();
        fetchUsers();
    });
    
