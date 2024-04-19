import React from "react";

function Seemore() {
    return (
        <>
            <div class="container">
                <h2>Détails de l'Étudiant</h2>
                <div class="details">
                    <div>
                        <img src="path/to/image.jpg" alt="Image" />
                        <p><strong>Numéro Matricule:</strong> 12345</p>
                        <p><strong>Nom:</strong> John</p>
                        <p><strong>Prénom:</strong> Doe</p>
                        <p><strong>Âge:</strong> 20 ans</p>
                        <p><strong>Genre:</strong> Homme</p>
                        <p><strong>Adresse:</strong> Adresse de l'étudiant</p>
                        <p><strong>Classe:</strong> Seconde</p>
                        <p><strong>Père/Mère:</strong> Nom du parent</p>
                        <p><strong>Adresse Parent:</strong> Adresse du parent</p>
                        <p><strong>Tél Parent:</strong> 0123456789</p>
                    </div>
                    <div>
                        <div id="simpleBarChart" class="chart">
                            SimpleBarChart
                        </div>
                        <div id="customActiveShapePieChart" class="chart">
                            CustomActiveShapePieChart
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Seemore;