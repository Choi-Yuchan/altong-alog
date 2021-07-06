import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import NoticeMessageData from '../NoticeMessageData.json';
import NoticeMessageContents from './NoticeMessageContents';

const TopTitle = styled.div`
    font-size: 18px Cabin;
    text-align: center;
    padding: 15px 0;
    color:#333333;
    font-weight: bold;
`;

const GrayContents = styled.div`
    font-size: 14px;
    border: none;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    display:${ props => props.count !== 0 ? "flex" : "none"};
    align-items: flex-start;
    margin-bottom:10px;
    padding:25px;
    background:#e1e1e1;
    font-weight: bold;
    color:#666666;
    display:flex;

    @media screen and (max-width: 480px){
        padding:13px;
        font-size: 12px;
    }
`;
const Member = styled.div`
    text-align: center;
    flex-basis: 25%;
`;
const Contents = styled.div`
    text-align: center;
    flex-basis: 50%;
`;
const Dates = styled.div`
    text-align: center;
    flex-basis: 25%;
`;

const NoticeMessage  = ({onRemoveMessage, usersMessage}) => {
    
    const alarm = NoticeMessageData.ko.alarm;
    const Title = NoticeMessageData.ko.messageTitle;

    usersMessage.sort(function(a,b){
        return b.date - a.date
      });

    return(
        <>
        <TopTitle>{alarm}</TopTitle>
        <GrayContents>
            <Member>{Title.member}</Member><Contents>{Title.contents}</Contents><Dates>{Title.date}</Dates>
        </GrayContents>
        {
            usersMessage.map((text)=>{
                return(
                    <>
                        <NoticeMessageContents text={text} onRemoveMessage={onRemoveMessage}></NoticeMessageContents>
                    </>
                );
            })
        }
        </>
    )
};

export default NoticeMessage;