import React, {useState, useEffect} from "react";
import './styles/scss/main.scss';

function App() {

    const [turno, setTurno] = useState(false); // false = circulo, true = tache
    const [celda1, setCelda1] = useState(' ');
    const [celda2, setCelda2] = useState(' ');
    const [celda3, setCelda3] = useState(' ');
    const [celda4, setCelda4] = useState(' ');
    const [celda5, setCelda5] = useState(' ');
    const [celda6, setCelda6] = useState(' ');
    const [celda7, setCelda7] = useState(' ');
    const [celda8, setCelda8] = useState(' ');
    const [celda9, setCelda9] = useState(' ');
    const [celdasOcupadas,setCeldasO] = useState(['0']);
    const [contadorX,setContadorX] = useState(1);
    const [contadorO,setContadorO] = useState(1);

    useEffect(() => {
        checaGanador()
        if(contadorX  === 1 && contadorO === 1) {
            setContadorX(localStorage.getItem('ganaX'))
            setContadorO(localStorage.getItem('ganaO'))
        }
    }, [turno]);

    useEffect(() => {
        if(turno){
            tiradaAutomatica();
        }
    }, [turno]);

    const ocupaCelda = (e) => {
        const numeroCelda = e.target.id;

        const updatedArray = [...celdasOcupadas, numeroCelda];
        if(celdasOcupadas.length === 0) {
            setCeldasO(updatedArray);
            pintaFicha(numeroCelda,'o');
            setTurno(!turno);
            return;
        }
        if(celdasOcupadas.includes(numeroCelda)) {
            alert("Esta celda ya esta ocupada");
        } else {
            setCeldasO(updatedArray);
            pintaFicha(numeroCelda,'o');
            setTurno(!turno);
        }

    }

    const pintaFicha = (numeroCelda,ficha) => {
        console.log(`ficha ${numeroCelda} pinta ${ficha}`)
        switch (numeroCelda) {
            case "1":
                setCelda1(ficha)
                break;
            case "2":
                setCelda2(ficha)
                break;
            case "3":
                setCelda3(ficha)
                break;
            case "4":
                setCelda4(ficha)
                break;
            case "5":
                setCelda5(ficha)
                break;
            case "6":
                setCelda6(ficha)
                break;
            case "7":
                setCelda7(ficha)
                break;
            case "8":
                setCelda8(ficha)
                break;
            case "9":
                setCelda9(ficha)
                break;
        }
    }

    const tiradaAutomatica = () => {
        if(celdasOcupadas.length > 8){
            return;
        }
        do {
            var numeroCelda =  Math.ceil(Math.random()*9).toString();
        } while (estaVacia(numeroCelda));

        const updatedArray = [...celdasOcupadas, numeroCelda];
        setCeldasO(updatedArray);
        pintaFicha(numeroCelda,'x');
        setTurno(!turno);
    }

    const estaVacia = (numeroCelda) => {
        let ocupada = false;
        console.log(`Automatica numeroCelda ${numeroCelda}`)
        if(celdasOcupadas.includes(numeroCelda)){
            ocupada = true;
        }
        return ocupada;
    }

    const borrarTablero = () => {
        setCelda1(' ')
        setCelda2(' ')
        setCelda3(' ')
        setCelda4(' ')
        setCelda5(' ')
        setCelda6(' ')
        setCelda7(' ')
        setCelda8(' ')
        setCelda9(' ')
        setCeldasO([])
        setTurno(false)

        localStorage.setItem('ganaX',contadorX );
        localStorage.setItem('ganaO',contadorO );
    }

    const checaGanador = async () => {
        let celda1 = document.getElementById("1").innerHTML;
        let celda2 = document.getElementById("2").innerHTML;
        let celda3 = document.getElementById("3").innerHTML;
        let celda4 = document.getElementById("4").innerHTML;
        let celda5 = document.getElementById("5").innerHTML;
        let celda6 = document.getElementById("6").innerHTML;
        let celda7 = document.getElementById("7").innerHTML;
        let celda8 = document.getElementById("8").innerHTML;
        let celda9 = document.getElementById("9").innerHTML;

        let linea1H = celda1 === celda2 ? celda2 === celda3 : false;
        let linea2H = celda4 === celda5 ? celda5 === celda6 : false;
        let linea3H = celda7 === celda8 ? celda8 === celda9 : false;
        let linea1V = celda1 === celda4 ? celda4 === celda7 : false;
        let linea2V = celda2 === celda5 ? celda5 === celda8 : false;
        let linea3V = celda3 === celda6 ? celda6 === celda9 : false;
        let linea1D = celda1 === celda5 ? celda5 === celda9 : false;
        let linea2D = celda3 === celda5 ? celda5 === celda7 : false;
        if (linea1H || linea2H || linea3H) {
            if ((linea1H && celda1 === 'x') || (linea2H && celda4 === 'x') || (linea3H && celda7 === 'x')) {
                alert('¡Gana x!')
                setContadorX(contadorX+1)
                return;
            } else if ((linea1H && celda1 === 'o') || (linea2H && celda4 === 'o' )||( linea3H && celda7 === 'o')) {
                alert('¡Gana o!')
                setContadorO(contadorO +1)
                return;
            }
        }

        if (linea1V || linea2V || linea3V) {
            if ((linea1V && celda1 === 'x') ||( linea2V && celda2 === 'x' )|| (linea3V && celda3 === 'x')) {
                alert('¡Gana x!')
                setContadorX(contadorX +1)
                return;
            } else if ((linea1V && celda1 === 'o') ||( linea2V && celda2 === 'o' )|| (linea3V && celda3 === 'o')) {
                alert('¡Gana o!');
                setContadorO(contadorO +1)
                return;
            }
        }

        if (linea1D || linea2D) {
            if ((linea1D && celda1 === 'x' )|| (linea2D && celda3 === 'x')) {
                alert('¡Gana x!')
                setContadorX(contadorX+1)
                return;
            } else if ((linea1D && celda1 === 'o' )|| (linea2D && celda3 === 'o')) {
                alert('¡Gana o!')
                setContadorO(contadorO+1)
                return;
            }
        }
        if (celdasOcupadas.length === 10) {
            alert('¡Empate!')
        }
    }

    return (
        <section className="g-hoja">

            <div className="a-title">
                <div>Juego Tic Tac Toe</div>
                <p>Selecciona una casilla para comenzar</p>
            </div>

            <div className="m-tablero">
                <div className="a-linea">
                    <div className="a-celda a-borderDer"
                         id={"1"}
                         onClick={ocupaCelda}>
                        {celda1}
                    </div>

                    <div className="a-celda a-borderDer"
                         id={"2"}
                         onClick={ocupaCelda}>
                        {celda2}
                    </div>

                    <div className="a-celda"
                         id={"3"}
                         onClick={ocupaCelda}>
                        {celda3}
                    </div>
                </div>
                <div className="a-linea">
                    <div className="a-celda a-borderDer"
                         id={"4"}
                         onClick={ocupaCelda}>
                        {celda4}
                    </div>

                    <div className="a-celda a-borderDer"
                         id={"5"}
                         onClick={ocupaCelda}>
                        {celda5}
                    </div>

                    <div className="a-celda"
                         id={"6"}
                         onClick={ocupaCelda}>
                        {celda6}
                    </div>
                </div>
                <div className="a-linea">
                    <div className="a-celda a-borderDer"
                         id={"7"}
                         onClick={ocupaCelda}>
                        {celda7}
                    </div>

                    <div className="a-celda a-borderDer"
                         id={"8"}
                         onClick={ocupaCelda}>
                        {celda8}
                    </div>

                    <div className="a-celda"
                         id={"9"}
                         onClick={ocupaCelda}>
                        {celda9}
                    </div>
                </div>
            </div>
            <div>
                <div className="a-marcador">
                    <p>Marcador</p>
                    <p>x - {contadorX} | o - {contadorO}</p>
                </div>
                <button className="a-button"  onClick={borrarTablero}>Reiniciar juego</button>
            </div>


        </section>
    );
}

export default App;
