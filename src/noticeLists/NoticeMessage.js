import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import NoticeMessageData from '../dummydata/NoticeMessageData.json';
import NoticeMessageContents from './NoticeMessageContents';
import NoticeMessagePop from './NoticeMessagePop';

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
    const [pop, setPop] = useState(false); 

    usersMessage.sort(function(a,b){
        return b.date - a.date
      });

    const [message, setMessage] = useState();

    const usersMessageLength = usersMessage.length - 1;
    return(
        <>
        <TopTitle>{alarm}</TopTitle>
        <GrayContents>
            <Member>{Title.member}</Member><Contents>{Title.contents}</Contents><Dates>{Title.date}</Dates>
        </GrayContents>
        {
            usersMessage.map((text, index)=>{
                return(
                    <>
                        <NoticeMessageContents text={text} onRemoveMessage={onRemoveMessage} setMessage={setMessage} count={index} key={text.id} pop={pop} setPop={setPop}></NoticeMessageContents>
                    </>
                );
            })
        }
        <NoticeMessagePop onRemoveMessage={onRemoveMessage} usersMessage={usersMessage[message]} message={message} setMessage={setMessage} pop={pop} setPop={setPop} number={usersMessageLength}></NoticeMessagePop>
        </>
    )
};

export default NoticeMessage;