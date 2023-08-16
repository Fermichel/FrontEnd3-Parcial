import React, { useState } from "react";
import Card from "./Card"
import CardStyle from "./CardStyle.css";
import FormStyle from "./FormStyle.css";


function Form (){
    const [name, setName]= useState('');
    const [asignature, setAsignature]=useState('');
    const [info, setInfo] = useState(false);
    const [err, setErr] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();

        if (!name.trim() || !asignature.trim()) {
            setErr('Los campos deben estar completos');
            setInfo(false);
        } else if (name.length < 3 || name.indexOf(" ") === 0 || asignature.length < 6) {
            setErr('Por favor chequea que la información sea la correcta');
            setInfo(false);
        } else {
            setErr('');
            setInfo(true);
        }

    }
    
    
    return(
        <>
        <form className="form" onSubmit={handleSubmit}>
        <label>
        <p>Ingresa tu nombre:</p>
        <input type='text' value={name} className="input" onChange={event => setName(event.target.value)}/>
        </label>
        <label>
        <p>Nombre de la materia Favorita de DH:</p>
        <input type='text' value={asignature} className="input" onChange={event => setAsignature(event.target.value)}/>
        </label>
        <div>
        <button className="" type="submit">Enviar</button>
        </div>
        {err &&
        <p className="err">{err}</p>}
        {info &&(
        <div className="info">
        <Card name={name} /> Tu materia favorita es <Card asignature={asignature}/>
        </div>
        
        )}
        </form>
        </>

    );
    

}
export default Form;