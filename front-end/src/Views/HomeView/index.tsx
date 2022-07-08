import { ContaninerStyled } from "../../assets/styled";
import Velha from '../../assets/imgs/velha.png'
import { useNavigate } from "react-router-dom";
export function HomeView () {
    const navigate= useNavigate()
    return (
        <ContaninerStyled>
            <img src={Velha} alt='imagem jogo da velha' width={100} className='pt-5'/>
            <h1 className="pt-1">Jogo da Velha</h1>
            <p className="text-center">Seja bem vindo! <br/> Vamos Jogar?</p>
            <button onClick={() => navigate('/offline')}>Jogo Local</button>
            <button>Multiplayer</button>
        </ContaninerStyled>
    )
}