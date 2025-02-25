import { useState, useEffect } from 'react';
import axios from "axios";
// aggiunta per uso link in listato (per dettaglio pizza)
import { Link } from "react-router-dom";

// componente
export default function MainPiatti() {

    // stato dei piatti
    const [articoliWeb, setArticoliWeb] = useState([]);


    // funzione di gestione chiamata all'API
    function fetchPiatti() {
        axios.get("http://localhost:3000/piatti/")
            .then((res) =>
                setArticoliWeb(res.data)
            )
    }

    // Solo al primo rendering
    useEffect(fetchPiatti, []);

    // funzione gestione cancellazione articolo
    function deleteArticolo(idArticolo) {
        // creiamo il nuovo array da sostituire allo state articolo
        const updateArticle = articoliWeb.filter((articolo) => {
            return articolo.id !== idArticolo;
        })
        // chiamata ad API sulla rotta di delete
        axios.delete(`http://localhost:3000/piatti/${idArticolo}`)
            .then(res =>
                console.log(res),
                // lo sostituiamo anche nel FE
                setArticoliWeb(updateArticle)
            )
            .catch(err => console.log(err))
    }
    return (
        <> 
{
    articoliWeb.map((articolo) => (
        <div className='articoloItem' key={articolo.id}>
            <h2>{articolo.title}</h2>
            <p>{articolo.content}</p>
            <img src={articolo.image} alt={articolo.title} />
            <p>{articolo.tags.join(", ")}</p>
            <Link to={`/piatti/${articolo.id}`}>Vai al dettaglio di questo piatto</Link>
            <br />
            <button onClick={() => deleteArticolo(articolo.id)}>
                Cancella
            </button>
        </div>
    ))
}
        </>
    )
}