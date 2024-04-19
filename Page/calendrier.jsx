function calendrier() {
    return ( 
        <>
        <div class="container">
        <h2>Calendrier Scolaire</h2>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Événement</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1er septembre 2024</td>
                    <td>Rentrée Scolaire</td>
                </tr>
                <tr>
                    <td>1er novembre 2024</td>
                    <td>Vacances de la Toussaint</td>
                </tr>
                <tr>
                    <td>20 décembre 2024</td>
                    <td>Début des Vacances de Noël</td>
                </tr>
                <tr>
                    <td>6 janvier 2025</td>
                    <td>Reprise après les Vacances de Noël</td>
                </tr>
                <tr>
                    <td>15 avril 2025</td>
                    <td>Vacances de Pâques</td>
                </tr>
                <tr>
                    <td>1er juillet 2025</td>
                    <td>Fin de l'Année Scolaire</td>
                </tr>
            </tbody>
        </table>
    </div>
        </>
     );
}

export default calendrier;