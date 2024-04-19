import React from "react"

function Registre() {
    return (
        <>
            <div class="container">
                <h2>Registre de Compte</h2>
                <form action="/" method="post">
                    <label for="image">Image :</label>
                    <input type="file" id="image" name="image" accept="image/*" required />
                    <label for="nom">Nom :</label>
                    <input type="text" id="nom" name="nom" required />
                    <label for="prenom">Prénom :</label>
                    <input type="text" id="prenom" name="prenom" required />
                    <label for="pseudo">Pseudo :</label>
                    <input type="text" id="pseudo" name="pseudo" required />
                    <label for="mot_de_passe">Mot de Passe :</label>
                    <input type="password" id="mot_de_passe" name="mot_de_passe" required />
                    <label for="option_compte">Option Compte :</label>
                    <select id="option_compte" name="option_compte" required>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    <input type="submit" value="Enregistrer" />
                </form>
            </div>
        </>
    );
}

export default Registre;