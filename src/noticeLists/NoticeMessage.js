import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import NoticeMessageData from '../NoticeMessageData.json';
import NoticeMessage_popup from './NoticeMessage_popup';
import TimeToggle from '../TimeToggle';

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
const Elements = styled.div`
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    display:${ props => props.state == true ? "flex" : "none"};
    align-items: center;
    margin-bottom:10px;
    padding:13px;
    text-align:center;
    justify-content: space-between;

    @media screen and (max-width: 480px){
        padding:10px;
    }
`;

const Account = styled.div`
    display:flex;
    align-items: center;
    font-size:13px;
    justify-content: flex-start;
    padding-left:3vw;
    flex-basis: 25%;
    
    @media screen and (max-width: 480px){
        font-size:12px;
        padding-left:0;
     }
`;
const Photo = styled.img`
    width:40px; height:40px;
    margin-right:5px;
    border-radius:50%;

    @media screen and (max-width: 480px){
        width:30px; height:30px;
     }
`;
const Nickname = styled.span`
    white-space:normal;
    overflow:hidden;
    text-overflow:ellipsis;
    word-wrap: break-word; 
    display: -webkit-box; 
    -webkit-line-clamp: 1; 
    -webkit-box-orient: vertical;
`;

const Word = styled.div`
    font-size:13px;
    text-align:left;
    flex-basis: 40%;
    white-space:normal;
    overflow:hidden;
    text-overflow:ellipsis;
    word-wrap: break-word; 
    display: -webkit-box; 
    -webkit-line-clamp: 1; 
    -webkit-box-orient: vertical;

    @media screen and (max-width: 480px){
        font-size:12px;
     }
`;
const Day = styled.div`
    font-size:13px;
    flex-basis: 25%;
    text-align:right;

    @media screen and (max-width: 480px){
        font-size:12px;
        text-align:center;
        flex-basis: 25%;
     }
`;
const Close = styled.div`
    display:inline;
    margin-left:10px;
    font-size:5px;
    
    @media screen and (max-width: 480px){
        margin-left:0px;
     }
`;
const NoticeMessage  = () => {
    
    const alarm = NoticeMessageData.ko.alarm;
    const Title = NoticeMessageData.ko.messageTitle;
    const messageArray = NoticeMessageData.ko.messageArray;

    const [message, setMessage] = useState(messageArray);
    function change(i) {
        const states = [...messageArray];
        states[i].state = false;
        states[i].popState = true;
        setMessage( states );
    }
    const [show, setShow] = useState(messageArray);
    function change2(i) {
        const states = [...messageArray];
        states[i].state = false;
        setMessage( states );
    }

    messageArray.sort(function(a,b){
        return b.date - a.date
      });

    return(
        <>
        <TopTitle>{alarm}</TopTitle>
        <GrayContents>
            <Member>{Title.member}</Member><Contents>{Title.contents}</Contents><Dates>{Title.date}</Dates>
        </GrayContents>
        {
            message.map((text, i)=>{
                return(
                    <>
                    { text.popState === true ?
                    <NoticeMessage_popup message={text}></NoticeMessage_popup>
                    : null
                    }
                    { show &&
                    <Elements state={text.state} key={text.id} onClick={ () => { change(i); } }>
                        <Account><Photo src={text.profileImg}/><Nickname>{text.account}</Nickname></Account>
                        <Word>{text.word}</Word>
                        <Day>{TimeToggle(text.date)}</Day>
                        <Close onClick={ (e) => { e.stopPropagation(); change2(i); } }>X</Close>
                    </Elements>
                    }
                    </>
                );
            })
        }
        </>
    )
};

export default NoticeMessage;