import styled   from 'styled-components'


export const Container = styled.div `
    background-color:#b752ff;
    padding: 20px;
    border-radius: 10;

    h1 {
        color: #ede9ef;

    }

    input {
        height: 35px;
        border-radius: 5px;
        border: none;
        margin-top: 30px;
        outline: none;
        padding-left: 10px;

    }

`
export const AddBotao = styled.button `
    background-color: #72de1a;
    color: #000;
    height: 35px;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    margin-left: 10px;

    &:hover {
        opacity: 0.8;
    }
`

export const Produtos = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background-color: #fff;
    border-radius: 5px;
    margin: 15px;
    padding: 0 10px;

    p {
        text-transform: capitalize;
        font-weight: bold;
    }
`

export const TrashBotao = styled.button `
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;




`
