import forca0 from "./assets/imgs/forca0.png"
import forca1 from "./assets/imgs/forca1.png"
import forca2 from "./assets/imgs/forca2.png"
import forca3 from "./assets/imgs/forca3.png"
import forca4 from "./assets/imgs/forca4.png"
import forca5 from "./assets/imgs/forca5.png"
import forca6 from "./assets/imgs/forca6.png"
import palavras from "./palavras"
import alfabeto from "./alfabeto"
import "./assets/css/reset.css"



export default function App() {
    

    return (
        <>
            <div className="forca">
                <img src={forca0} alt="forca" />
            </div>
            <Alfabeto />
        </>
    )
}


function Alfabeto() {
    return (
    <div className="botoes">
        {alfabeto.map((l, index) => <button key={index}>{l}</button>)}
    </div>
    )
}
