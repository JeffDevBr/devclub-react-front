import styled from "styled-components"

export const Container = styled.div`
    background-color: #000;
    height: 100%;
    min-height: 100vh;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`

export const Image = styled.img`
    width: 342px;
    height: 354px;
`

export const Title = styled.h2`
    font-size: 28px;
    font-weight: 700;
    line-height: 32.81px;
    text-align: center;
    color: #fff;
    margin: 30px;
`

export const InputLabel = styled.label`
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.40799999237060547px;
    margin-left: 15px;
    color: #fff;
`

export const Input = styled.input`
    margin-bottom: 30px;
    background: #FFFFFF40;
    width: 342px;
    height: 58px;
    padding: 19px 139px 18px 15px;
    border: none;
    border-radius: 14px;
    box-shadow: 0px 4px 4px 0px #00000040;

    font-size: 18px;
    font-weight: 300;
    line-height: 21.09px;
    color: #fff;
`

export const Button = styled.button`
    width: 342px;
    height: 68px;
    background: #D93856;
    color: #fff;
    font-size: 17px;
    font-weight: 900;
    line-height: 2.5px;
    margin-top: 30px;


    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }

    &:active{
        opacity: 0.5;
    }
`   