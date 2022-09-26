import forca0 from "./assets/imgs/forca0.png"
import forca1 from "./assets/imgs/forca1.png"
import forca2 from "./assets/imgs/forca2.png"
import forca3 from "./assets/imgs/forca3.png"
import forca4 from "./assets/imgs/forca4.png"
import forca5 from "./assets/imgs/forca5.png"
import forca6 from "./assets/imgs/forca6.png"
import alfabeto from "./alfabeto"
import { palavraAleatoria, palavraReplace, palavraArrayReplace } from "./palavras"
import palavraArray from "./palavras"
import React, { useState } from "react"

let arrayForca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]

let arrayTeste = [];
let arrayTeste1 = [];
let contadorErros = 0;
let arrayErro = [];

function App() {


    const [forca, setForca] = useState(arrayForca[contadorErros])
    const [palavra, setPalavra] = useState([])
    const [disable, setDisable] = useState(true);
    const [ganhou, setGanhou] = useState("");
    const [escolher, setEscolher] = useState(false)


    function fimJogo(chute) {
        if (chute === palavraAleatoria || chute === palavraReplace ) {
            setGanhou("verde")
            setDisable(true);
            setPalavra(palavraArray)

        } else {
            setGanhou("vermelho")
            setForca(forca6);
            setDisable(true);
            setPalavra(palavraArray)
        }
    }

    function executaFuncoes() {
        arrayTeste1 = [];
        palavraArray.forEach((element) => arrayTeste1.push("__"))
        setPalavra([...arrayTeste1]);
        setDisable(false);
    }


    function comparaLetras(parametro) {
        arrayTeste = [];
        arrayTeste.push(parametro)
        arrayErro = []

        palavraArrayReplace.filter((word, i) => word === parametro ? arrayTeste1[i] = palavraArray[i] : arrayTeste = [])


        palavraArrayReplace.filter((word, i) => word === parametro ? arrayErro.push(1) : "")

        if (arrayErro.length === 0) {
            contadorErros++
            setForca(arrayForca[contadorErros])
        }

        setPalavra([...arrayTeste1])
        if (contadorErros >= 6) {
            fimJogo("lalkaklalkalk")
        }

        if (!arrayTeste1.includes("__")) {
            setGanhou("verde")
            setDisable(true);
            setPalavra(palavraArray)
        }
    }


    return (
        <>
            <div className="conteudo">
                <img data-identifier="game-image" alt="imagemDaForca" className="forca" src={forca} />

                <div className="botaoPalavra">
                    <button data-identifier="choose-word" disabled={escolher} onClick={() => { executaFuncoes(); setEscolher(true) }} className="escolhePalavra">Escolher Palavra</button>

                    <Palavra ganhou={ganhou} palavra={palavra} />
                </div>

            </div>

            <Alfabeto comparaLetras={comparaLetras} palavra={palavra} disable={disable} />

            <Chute disble={disable} fimJogo={fimJogo} disable={disable} />
        </>
    )
}

function Button(props) {
    const l = props.l
    const [desabilitado, setDesabilitado] = useState(false)

    return (
        <button disabled={props.disable ? true : desabilitado} onClick={() => { props.comparaLetra({ l }.l); { setDesabilitado(true) } }} >{l}</button>
    )
}

function Alfabeto(props) {

    return (
        <div className="botoes">
            {alfabeto.map((l, index) =>
                <Button data-identifier="letter" disable={props.disable} comparaLetra={props.comparaLetras} key={index} l={l} />)}
        </div>)
}



function Palavra(props) {

    return (
        <div data-identifier="word" className="palavraSelecionada">
            {props.palavra.map((l, index) =>
                <div className={`letraPalavra ${props.ganhou}`} key={index}>
                    {l}
                </div>)}
        </div>
    )
}

function Chute(props) {
    const [input, setInput] = useState("")

    return (
        <div data-identifier="type-guess" className="chute">
            <p>Já sei a palavra!</p>
            <input disabled={props.disable} onChange={e => setInput(e.target.value)} type="text" placeholder="digite seu chute"></input>
            <button data-identifier="guess-button" disabled={props.disable} onClick={() => props.fimJogo(input)}  >Já sei a palavra</button>
        </div>
    )
}


export default App;