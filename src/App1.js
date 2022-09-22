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

const palavraJogo = ["g", "a", "t", "o"]


export default function App1() {


    const [forca, setForca] = useState(forca0)
    const [palavraJogo, setPalavraJogo] = useState(["a", "b", "c"]);

    return (
        <>
            <div className="conteudo">
                <img className="forca" src={forca} alt="forca" />
                <button onClick={() => setPalavraJogo({ palavraArray })} className="escolherpalavra">Escolher Palavra</button>
                <Palavra palavra={palavraJogo} />
            </div>

            <Alfabeto contador={() => contarErros()} />
        </>
    )

    function contarErros() {
        setForca(arrayForca[contadorErro]);
        if (contadorErro >= 7) {
            alert("Você perdeu!")
        }
        if (contadorAcerto === palavraArray.length) {
            alert("Você venceu!")
        }
    }
}


function Alfabeto(props) {
    let funcao = props.contador

    return (
        <div onClick={funcao} className="botoes">
            <div>
                {alfabeto.map((l, index) => (
                    <button className={`${l}`} onClick={() => { comparaLetra({ l }) }} key={index} >{l}</button>))}
            </div>
        </div>
    )

}



function Palavra() {
    return (
        <div className="palavraSelecionada">
            {palavraArray.map((l, index) => (
                <div key={index} className={`letraPalavra`}>
                    {arrayTeste[0] === {l} ? {l} : "__"}
                </div>
            ))}
        </div>)
}



let arrayTeste = []

let contadorErro = 0;
let contadorAcerto = 0;

function comparaLetra(parametro) {

    arrayTeste = [];
    const letraPalavra = palavraArray.filter(word => (word === parametro.l) ? arrayTeste.push(1) : console.log("letra errada"))

    if (arrayTeste.length === 0) {
        contadorErro++
    } else if (arrayTeste.length >= 1) {
        contadorAcerto += arrayTeste.length
    }
    console.log(contadorAcerto);
}
