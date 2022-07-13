import { ContaninerStyled, ModalStyledBody, StyledFormInput, StyledNumberGeneretor } from "../../assets/styled";
import Velha from '../../assets/imgs/velha.png'
import { useNavigate } from "react-router-dom";
import { loginGoogle } from "../../Services/login";
import { useEffect, useState } from "react";
import {  Modal } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { auth, db} from "../../Services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
export function HomeView() {
    const [show, setShow] = useState(false);
    const [authCurrent, setAuthCurrent] = useState('')
    const [numberClass, setNumberClass] = useState(0)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate()
    const handleEventLogin = async () => {
        try {
            await loginGoogle()
            toast.success('Usuário logado com sucesso!')
        } catch {
            toast.error('Usuário não pode ser logado!')
        }
    }
    const handleGeneretorClass = async () => {
        const user = auth.currentUser?.email
        let numeroAleatorio = Math.random();
        numeroAleatorio = Math.floor(numeroAleatorio * 1000)
        localStorage.setItem('numeroSala', numeroAleatorio.toString())
        const classRef = doc(db, 'classgame', numeroAleatorio.toString());
        await setDoc(classRef, {
            emailOne : user,
            emailTwo: '',
        })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user: any) => {
            if (user) {
                setAuthCurrent(user.email)
            }
        })
    }, [])
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Vamos Jogar</Modal.Title>
                </Modal.Header>
                <ModalStyledBody>
                    {authCurrent !== '' ? (
                        <>
                        <StyledFormInput>
                            <input 
                            placeholder="Insira o codigo da sala"
                            />
                            <button>Entrar na sala</button>
                        </StyledFormInput>
                        <StyledNumberGeneretor>
                            <p>Jogar com amigos</p>
                            <button onClick={handleGeneretorClass}>Criar sala!</button>
                        </StyledNumberGeneretor>
                        </>

                    ) : (
                        <>
                            <h2>Faça seu login para liberar a sala</h2>
                            <div onClick={handleEventLogin}>
                                <FaGoogle />
                            </div>
                            <p>login com o google</p>
                        </>
                    )}

                </ModalStyledBody>
            </Modal>
            <ContaninerStyled>
                <img src={Velha} alt='imagem jogo da velha' width={100} className='pt-5' />
                <h1 className="pt-1">Jogo da Velha</h1>
                <p className="text-center">Seja bem vindo! <br /> Vamos Jogar?</p>
                <button onClick={() => navigate('/offline')}>Jogo Local</button>
                <button onClick={handleShow}>Multiplayer</button>
            </ContaninerStyled>
        </>
    )
}
