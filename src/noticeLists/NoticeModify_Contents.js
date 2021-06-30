import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

    const Contents = styled(Link)`
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    display:${ props => props.count !== 0 ? "flex" : "none"};
    align-items: center;
    margin-bottom:10px;
    padding:13px 13px 13px 30px;

    @media screen and (max-width: 480px){
        padding:10px 10px 10px 20px;
    }
`;
const LogoDiv = styled.div`
    flex-basis:20%;

    @media screen and (min-width: 480px){
        flex-basis:15%;
    }
`;
const Logo =styled.img`
    width:50px;
    padding-left:1vw;

    @media screen and (min-width: 480px){
        width:70px;
    }
`;
const LanDiv = styled.div`
    flex-basis:10%;

`;
const Language =styled.img`
    width:25px;

    @media screen and (min-width: 480px){
        width:35px;
    }
`;

const Sentences = styled.div`
    color:#333333;
    font-size:12px;
    flex-basis:70%;
    display:flex;
    flex-direction: column;
    
    @media screen and (min-width: 480px){
        flex-basis:85%;
    }
`;
const MainSentences = styled.div`
    width:95%;
    margin-bottom: 10px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    
    @media screen and (min-width: 480px){
        font-size:15px;
    }
`;
const SubSentences = styled.div`
    font-size:10px;
    width:95%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;

    @media screen and (min-width: 480px){
        font-size:15px;
    }
`;    
const NoticeModify_Contents = ({modify, to, number, pop}) => {

    const [show, setShow] = useState(true);
    
    return(
            <>
            <Contents to = {to} onClick={(e)=>{e.preventDefault(); e.stopPropagation(); pop(number)} }>
                <LogoDiv><Logo src={ modify.state ? process.env.PUBLIC_URL + '/images/logo_alog.png' : process.env.PUBLIC_URL + '/images/logo_dalog.png'} /></LogoDiv>
                    <Sentences>
                       <MainSentences>{modify.title}</MainSentences>
                       <SubSentences>{modify.word}</SubSentences>
                       </Sentences>
                    <LanDiv>
                        <Language show={ show } src={ show ? process.env.PUBLIC_URL + '/images/language.svg' : process.env.PUBLIC_URL + '/images/language_on.svg'} 
                        onClick={(e)=>{e.preventDefault(); setShow(!show)}}></Language>
                    </LanDiv>
            </Contents>
            </>
    )
};

export default NoticeModify_Contents;