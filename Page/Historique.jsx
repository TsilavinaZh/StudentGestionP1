import React from "react";

function Historique() {
    return (
        <>
            <div class="container">
                <h2>Historique des Connexions (Admin)</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Nom Prénom</th>
                            <th>Date</th>
                            <th>Heure</th>
                            <th>Option Account</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="path/to/image.jpg" alt="Image" /></td>
                            <td>John Doe</td>
                            <td>2024-04-09</td>
                            <td>14:30:00</td>
                            <td>Options</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>);
}

export default Historique;