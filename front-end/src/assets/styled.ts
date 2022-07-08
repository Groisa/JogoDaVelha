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
        font-weight: 500;
    }
    p {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: 20px;
        font-weight: 200;
    }
    button {
        background-color: #FFE53B;
        background-image: linear-gradient(147deg, #FFE53B 0%, #FF2525 74%);
        border: none;
        padding: 10px 120px;
        margin: 15px;
        font-size: 2rem;
        border-radius: 15px;
        :hover {
            background-color: #FBDA61;
            background-image: linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%);
        }
    }
    @media(max-width: 572px){
        button {
            padding: 10px 90px;
            margin: 10px;
            font-size: 2rem;
            border-radius: 15px;
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
    grid-template-columns: repeat(3,120px);
    grid-template-rows: repeat(3,120px);
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
export const PlacarStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin-top: 2rem;
`
export const PlacaStyledX = styled.div`
    box-shadow: -1px 16px 15px 0px rgba(0,0,0,0.36);
    color: #fff;
    background-color: red;
    margin: 0px 30px;
    font-size: 25px;
    p{
        padding: 0;
        margin: 0;
        font-size: 30px;
    }
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    grid-template-columns: repeat(1, 40px);
    grid-template-rows: repeat(1, 40px);
`
export const PlacaStyledO = styled.div`
    box-shadow: -1px 16px 15px 0px rgba(0,0,0,0.36);
    color: #fff;
    background-color: blue;
    margin: 0px 30px;
    font-size: 25px;
    p{
        padding: 0;
        margin: 0;
        font-size: 30px;
    }
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    grid-template-columns: repeat(1, 40px);
    grid-template-rows: repeat(1, 40px);

`
export const ButtonStyled = styled.div`
 background-color: #FFE53B;
        background-image: linear-gradient(147deg, #FFE53B 0%, #FF2525 74%);
        border: none;
        padding: 10px 50px;
        margin: 10px;
        font-size: 1.5rem;
        border-radius: 15px;
        cursor: pointer;
        :hover {
            background-color: #FBDA61;
            background-image: linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%);
        }
`
