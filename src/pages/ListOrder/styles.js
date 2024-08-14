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

export const List = styled.li`
    width: 342px;
    height: auto;
    background: #FFFFFF40;
    display: flex;
    flex-direction: column;
    border-radius: 14px;
    margin-bottom: 20px;
    position: relative;
    color: #FFF;
    font-size: 18px;
    line-height: 21.09px;  
    padding: 20px;
    gap: 20px;

    p{
        width: 280px;
        font-weight: 300;
    }

    p:nth-child(2){
        font-weight: 700;
    }
   
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 28px;
        background: none;
        border: none;
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
    
        &:hover{
            opacity: 0.8;
            cursor: pointer;
        }

        &:active{
            opacity: 0.5;
        }
    
    } 

`

export const Image = styled.img`
    width: 246px;
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



export const Button = styled.button`
    width: 342px;
    height: 68px;
    background: #FFFFFF24;
    border: none;
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