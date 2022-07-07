import styled from "styled-components";

export const ContaninerStyled = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    h1{
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: 55px;
    }
    button {
        background-color: #FFE53B;
        background-image: linear-gradient(147deg, #FFE53B 0%, #FF2525 74%);
        border: none;
        padding: 10px;
        margin: 15px;
        font-size: 2rem;
        border-radius: 15px;
        :hover {
            background-color: #FBDA61;
            background-image: linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%);
        }
    }
`

export const BoardStyled = styled.div`
    @media(max-width: 572px) {
        display: grid;
        grid-template-columns: repeat(3,100px);
        grid-template-rows: repeat(3,100px);
        gap: 1rem;
    }
    display: grid;
    grid-template-columns: repeat(3,150px);
    grid-template-rows: repeat(3,150px);
    gap: 1rem;
    
`
export const CellStyled = styled.div`
    background-color: #FBDA61;
    background-image: linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%);
    border-radius: 15px;
    font-size: 3rem;
    display: grid;
    align-items: center;
    justify-content: center;
    :hover {
        box-shadow: -1px 16px 15px 0px rgba(0,0,0,0.36);
    }
    
`
