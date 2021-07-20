import React from 'react';
import styled from 'styled-components';
import TimeToggle from '../components/function/TimeToggle';

const NoticeMessageContents  = ({text, setPop, count, setMessage, selected, onRemove}) => {

    return(
        <Elements popState={text.popState} state={text.state} onClick={ () => {setPop(true); setMessage(count);}}>
            <Account><Photo src={text.profileImg}/><Nickname>{text.account}</Nickname></Account>
            <Word>{text.word}</Word>
            <Day>{TimeToggle(text.date)}</Day>
            <Close onClick={ (e) => {e.stopPropagation();  onRemove(selected);} }>X</Close>
        </Elements>
    )
};

export default NoticeMessageContents;

const Elements = styled.div`
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    display:flex;
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
    object-fit: cover;
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
    color:#666666;
    font-weight: 600;
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
    color:#666666;
    font-weight: 600;

    @media screen and (max-width: 480px){
        font-size:12px;
     }
`;
const Day = styled.div`
    font-size:13px;
    flex-basis: 25%;
    text-align:right;
    color:#666666;
    font-weight: 600;

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
