import axios from "axios";
import { useState, useEffect } from 'react';
// import della parte di ritorno parametro rotta FE
import { useParams } from "react-router-dom";
// aggiunta  uso link per paginazione (prev next dettagli)
import { Link } from "react-router-dom";



export default function DetaglioPiatti() {

    // destructuring per ritornare l'id (proprietà id dell'oggetto param)
    const { id } = useParams();

    //  settaggio dello stato del componente
    const [piatto, setPiatto] = useState({});

    // funzione di chiamata verso la rotta store
    function fetchPizza() {
        axios.get(`http://localhost:3000/piatti/${id}`)
            .then(res => setPiatto(res.data))
            .catch(err => console.log(err))
    }

    useEffect(
        () => fetchPizza(),
        [id])


    return (
        <>
            <nav className="caroselo">
                <Link to={`/piatti/${parseInt(id) - 1}`}>Prev</Link>
                <Link to={`/piatti/${parseInt(id) + 1}`}>Next</Link>
            </nav>
            <h2>Ciao sono la pagina di dettaglio della Pizza {piatto.title}</h2>
            <img src={piatto.image} alt={piatto.title} />
            <p>{piatto.tags}</p>
        </>
    );
}