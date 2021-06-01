/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const langAlogMessage ={
    ko:{
        userID: ["Vivien"],
        //고정
        titleText: "님에게 메시지 보내기",
        sendBtn:"보내기",
        cancelBtn:"취소",
    }
}
function AlogMessage ({close, setClose}) {

    const nickName = langAlogMessage.ko.userID;
    const titleText = langAlogMessage.ko.titleText;
    const sendBtn = langAlogMessage.ko.sendBtn;
    const cancelBtn = langAlogMessage.ko.cancelBtn
    return (
        <>
            { close ?
            <Frame>
                <Title><span>{nickName}</span>{titleText}</Title>
                <Form action="#">
                <TxtArea></TxtArea>
                </Form>
                <ButtonFrame>
                    <Send>{sendBtn}</Send>
                    <Cancel onClick={ () => { setClose(!close) } }>{cancelBtn}</Cancel>
                </ButtonFrame>
            </Frame>
            :null
            }
        </>
    )
};

const Title = styled.div`
    width:80%; height:20px;
    font-size:1em;
    line-height:20px;
    color:#707070;
    text-align:center;
    margin:0 auto 20px;
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
    top: 50%;
    left: 50%;
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
    border:1px solid #707070;
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