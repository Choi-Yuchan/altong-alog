/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

function AlogMessage ({close, setClose, List}) {
    const sendTo = "님께 쪽지 보내기 ";
    const cancel = "취소";
    const sentBtn = "보내기";
    return (
        <>
            { close ?
            <Wrap onClick={()=>{setClose(false)}}>
                <Frame onClick={(e) => e.stopPropagation()}>
                    <Title><Nickname>{List.nickname}</Nickname> {sendTo}</Title>
                    <Form action="#">
                    <TxtArea></TxtArea>
                    </Form>
                    <ButtonFrame>
                        <Cancel onClick={ () => { setClose(!close) } }>{cancel}</Cancel>
                        <Send onClick={ () => { setClose(!close) }}>{sentBtn}</Send>
                    </ButtonFrame>
                </Frame>
            </Wrap>
            :null
            }
        </>
    )
};
const Wrap = styled.div`
    width:100vw; height:100vh;
    position:fixed;
    background:transparent;
    left:0; top:0;
    z-index:999;
`;
const Nickname = styled.span`
    color:#eb639d;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
const Title = styled.div`
    width:80%; height:20px;
    font-size:0.8em;
    line-height:30px;
    color:#707070;
    text-align:center;
    margin:0 auto 20px;
    position:relative;
    font-weight:bold;

    @media all and (min-width:480px){
        font-size:1em;
        line-height:25px;
    }
`;

const TxtArea = styled.textarea`
    border: 1px solid #d2d2d2;
    width: 97%;
    font-weight: 500;
    padding: 5px;
    border-radius: 3px;
    resize: none;
    height: 180px;
    outline: none;
`;

const Form = styled.form`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;

const Frame = styled.div`
    background: #fff;
    width: 80%;
    max-width: 400px;
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    padding: 15px;
    border:1px solid #707070;
    z-index:9999;
`;

const ButtonFrame = styled.div`
    width:100%; height:40px;
    line-height:40px;
    display:flex;
    justify-content:space-around;
    text-align:center;
    margin-top:10px;
`;

const Send = styled.div`
    border:1px solid #fd0031;
    color:#fd0031;
    border-radius:25px;
    width:30%;
    cursor:pointer;
`;
const Cancel = styled.div`
    border:1px solid #707070;
    border-radius:25px;
    width:30%;
    cursor:pointer;
`;

export default AlogMessage;