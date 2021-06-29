import React, { useState } from 'react';
import styled from 'styled-components';
import TimeToggle from '../TimeToggle';
import { Link } from 'react-router-dom';

const Wrap = styled.div`
    width:100%; height:100%;
    max-width:800px;
    background:#999;
    position:fixed;
    left:50%; top:0px;
    transform: translateX(-50%);
    z-index:998;
`;

const Contents = styled.div`
    position:absolute;
    left:50%; top:30%;
    transform: translateX(-50%);
    width:100%;
`;
const Title = styled.p`
    color:#fefefe;
    font-size:20px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 70px;
`;

const Word = styled.div`
    color:#fefefe;
    font-size:15px;
    width:80%;
    margin:0 auto;
    line-height:2.5;

    @media all and (min-width:480px){
        width:400px;
    }
`;

const Thick = styled.span` 
    font-weight: bold;
    font-size:17px;
`;

const CheckBox = styled.div`
    color:#000;
    text-align: center;
    margin-top:250px;
`;

const CheckBtn = styled(Link)`
    width:155px;
    border-radius: 20px;
    padding:10px;
    cursor: pointer;
    color:#333;
    border:1px solid #333;
    background:#fefefe;
    font-size:12px;

    :active{
        background:#ccc;
    }
`;

const Close = styled.div`
    color:#fff;
    text-align: right;
    padding-right: 5vw;
    margin-top:80px;
    font-size: 20px;
    cursor: pointer;

    @media all and (min-width:480px){
        padding-right: 40px;
    }
`;

const NoticeModifyAlert = ({modify, number, popClose}) => {
    
    const language = {
        notice : "수정알림", 
        who : "님께서",
        because : "글을 수정함에 따라",
        time : "일자로 글 내용이 변경되었음을 알려 드립니다.",
        check : "수정내용 확인하기"
    }    
    const notice = language.notice;
    const who = language.who;
    const because = language.because;
    const time = language.time;
    const check = language.check;


    return(
        <Wrap>
            <Close onClick={()=>{popClose(number)}}>X</Close>
            <Contents>
                <Title>{notice}</Title>
                <Word><Thick>'{modify.nickname}'</Thick>{who} <Thick>{modify.title}</Thick>{because} {TimeToggle(modify.date)}{time}</Word>
                <CheckBox><CheckBtn to={modify.href} onClick={()=>{popClose(number)}}>{check}</CheckBtn></CheckBox>
            </Contents>
        </Wrap>        
    )
};

export default NoticeModifyAlert;