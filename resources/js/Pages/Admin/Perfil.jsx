import React, { useState } from "react";

export default function Perfil(){

    let x ={
        slotInterval: 30,
        openTime: '8:00',
        closeTime: '12:00',
    }

    const addHoras = () => {
        const adicionar = getHo
    }

    //Formatando a hora
    // let startTime = getHours(x.openTime, 'HH:mm');

    //Formatando o final
    // let endTime = getHours(x.closeTime, 'HH:mm').add(1, 'days');

    //Times
    // let allTimes = [];

    // while(startTime < endTime){
    //     allTimes.push(startTime.format("HH:mm"));

    //     startTime.add(x.slotInterval, 'minutos');
    // }
    // console.log(allTimes);

    const [inicio, setInicio] = useState('');
    const [final, setFinal] = useState('');
    const [horarios, setHorarios] = useState([]);

    const pegarHora = (hora) => {
        const tempo = new Date();
        var index = hora.indexOf(':');
        const horas = hora.substring(0, index);
        const minutos = hora.substring(index + 1);
        tempo.setHours(horas,minutos);
        return tempo;
    }
    const pegarMinutos = (hora) => {
        const tempo = new Date();
        var index = hora.indexOf(':');
        const minutos = hora.substring(index + 2);
        tempo.setMinutes(minutos);
        return tempo;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const horaInicial = pegarHora(inicio);
        console.log(horaInicial)
        // console.log(inicio)
        const listaHorarios = []

        
        
    }
    console.log(horarios);
    return(
        <div>
            <h1>testando</h1>
            <form onSubmit={handleSubmit}>
                <input type="time" value={inicio} onChange={e => setInicio(e.target.value)} label="Inicio" />
                <input type="time" value={final} onChange={e => setFinal(e.target.value)} label="final" />
                <button type="submit" >Enviar</button>
            </form>
    
        </div>
    )
        
}