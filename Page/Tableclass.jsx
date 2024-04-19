import React from "react";

function TableClass() {
    return (
        <>
            <div className="container">
                <h2>Table par Classe</h2>
                <input type="text" placeholder="Rechercher par nom..." />
                <table id="students-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Numéro Matricule</th>
                            <th>Voir plus</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="url_de_ton_image" alt="Image" /></td> 
                            <td>John</td>
                            <td>Doe</td>
                            <td>12345</td>
                            <td><a href="/TableClass/Seemore"className="see-more"  >Voir Plus</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default TableClass;

