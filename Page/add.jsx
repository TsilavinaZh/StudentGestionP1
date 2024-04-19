import React from "react";

function add() {
    return (
        <>
            <div class="container">
                <h2>Formulaire Ajout Étudiants (Admin)</h2>
                <form action="/" method="post">
                    <label for="nom">Nom :</label>
                    <input type="text" id="nom" name="nom" required />
                    <label for="prenom">Prénom :</label>
                    <input type="text" id="prenom" name="prenom" required />
                    <label for="date_naissance">Date de naissance :</label>
                    <input type="date" id="date_naissance" name="date_naissance" required />
                    <label for="lieu_naissance">Lieu de naissance :</label>
                    <input type="text" id="lieu_naissance" name="lieu_naissance" required />
                    <label for="genre">Genre :</label>
                    <select id="genre" name="genre" required>
                        <option value="homme">Homme</option>
                        <option value="femme">Femme</option>
                        <option value="autre">Autre</option>
                    </select>
                    <label for="image">Image :</label>
                    <input type="file" id="image" name="image" accept="image/*" required />
                    <label for="numero_maticule">Numéro matricule :</label>
                    <input type="text" id="numero_maticule" name="numero_maticule" required />
                    <label for="adresse">Adresse :</label>
                    <input type="text" id="adresse" name="adresse" required />
                    <label for="classe">Classe :</label>
                    <select id="classe" name="classe" required>
                        <option value="Second">Second</option>
                        <option value="Première">Première</option>
                        <option value="Terminale">Terminale</option>
                    </select>
                    <label for="parent">Père/Mère :</label>
                    <input type="text" id="parent" name="parent" required />
                    <label for="adresse_parent">Adresse parent :</label>
                    <input type="text" id="adresse_parent" name="adresse_parent" required />
                    <label for="tel_parent">Téléphone parent :</label>
                    <input type="text" id="tel_parent" name="tel_parent" required />
                    <input type="submit" value="Ajouter" />
                </form>
            </div>
        </>
    );
}

export default add;