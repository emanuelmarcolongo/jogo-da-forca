import forca0 from "./assets/imgs/forca0.png"
import forca1 from "./assets/imgs/forca1.png"
import forca2 from "./assets/imgs/forca2.png"
import forca3 from "./assets/imgs/forca3.png"
import forca4 from "./assets/imgs/forca4.png"
import forca5 from "./assets/imgs/forca5.png"
import forca6 from "./assets/imgs/forca6.png"
import palavraArray from "./palavras"
import alfabeto from "./alfabeto"
import React, { useState } from "react"

let arrayForca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]

let arrayTeste = [];
let arrayTeste1 = [];
let contadorErros = 0;
let contadorAcertos = 0;

function App() {

    const [forca, setForca] = useState(forca0)
    const [palavra, setPalavra] = useState([])
    const [disable, setDisable] = useState(true);

    function executaFuncoes() {
        palavraArray.forEach((element) => arrayTeste1.push("__"))
        setPalavra([...arrayTeste1]);
        setDisable(false);
    }

    console.log(arrayTeste1)

    function comparaLetras(parametro) {
        arrayTeste = [];
        arrayTeste.push(parametro)

        palavraArray.filter((word, i) => word === parametro ? arrayTeste1[i] = parametro : arrayTeste = [])
        setPalavra([...arrayTeste1])
    }

    return (
        <>
            <div className="conteudo">
                <img alt="imagemDaForca" className="forca" src={forca} />

                <button onClick={() => executaFuncoes()} className="escolhePalavra">Escolher Palavra</button>

                <Palavra palavra={palavra} />
            </div>



            <Alfabeto comparaLetras={comparaLetras} palavra={palavra} disable={disable} />

            <Chute disable={disable} />
        </>
    )

    function contarErros() {
        setForca(arrayForca[contadorErros]);
        if (contadorErros >= 7) {
            alert("Você perdeu!")
        }
        if (contadorAcertos === palavraArray.length) {
            alert("Você venceu!")
        }
    }
}



function Alfabeto(props) {

    return (
        <div className="botoes">
            {alfabeto.map((l, index) => <button disabled={props.disable} onClick={() => { props.comparaLetras({ l }.l);}} key={index} className="letra">{l}</button>)}
        </div>)
}



function Palavra(props) {

    return (
        <div className="palavraSelecionada">
            {props.palavra.map((l, index) =>
                <div className="letraPalavra" key={index}>
                    {l}
                </div>)}
        </div>
    )
}

function Chute(props) {

    return (
        <div className="chute">
            <input disabled={props.disable} type="text" placeholder="digite seu chute"></input>
            <button disabled={props.disable} >Já sei a palavra</button>
        </div>
    )
}


export default App;