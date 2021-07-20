import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TimeToggle from '../components/function/TimeToggle';
import { useTranslation } from 'react-i18next';

const NoticeModify_Contents = ({modify, onRemove, selected}) => {
    
    const {t} = useTranslation();
    const [show, setShow] = useState(true);
    const [open, setOpen] = useState(false);

    return(
            <>
            <Contents onClick={()=>{ setOpen(true)} }>
                <LogoDiv><Logo src={ modify.state ? process.env.PUBLIC_URL + '/images/logo_alog.png' : process.env.PUBLIC_URL + '/images/logo_dalog.png'} /></LogoDiv>
                    <Sentences>
                       <MainSentences>{modify.title}</MainSentences>
                       <SubSentences>{modify.word}</SubSentences>
                       </Sentences>
                    <LanDiv>
                        <Language show={ show } src={ show ? process.env.PUBLIC_URL + '/images/language.svg' : process.env.PUBLIC_URL + '/images/language_on.svg'} 
                        onClick={(e)=>{e.preventDefault(); e.stopPropagation(); setShow(!show)}}></Language>
                    </LanDiv>
            </Contents>
                { open === true &&
                    <Wrap>
                    <Close onClick={()=>{setOpen(false)}}>X</Close>
                    <Content>
                        <Title>{t('Modify_Notice')}</Title>
                        <Word>{t('Modify_Reason')[0]}<Thick>'{modify.nickname}'</Thick>{t('Modify_Reason')[1]} <Thick>{modify.title}</Thick>{t('Modify_Reason')[2]} {TimeToggle(modify.date)}{t('Modify_Reason')[3]}</Word>
                        <CheckBox><CheckBtn onClick={()=>{onRemove(selected); setOpen(false);}}>{t('Modify_Confirm')}</CheckBtn></CheckBox>{/* 클릭 시 수정 된 컨텐츠로 이동 */}
                    </Content>
                    </Wrap>   
                }
            </>
    )
};

export default NoticeModify_Contents;

const Contents = styled(Link)`
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    display:flex;
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

const Wrap = styled.div`
    width:100%; height:100%;
    max-width:800px;
    background:#999;
    position:fixed;
    left:50%; top:0px;
    transform: translateX(-50%);
    z-index:998;
`;

const Content = styled.div`
    position:absolute;
    left:50%; top:20%;
    transform: translateX(-50%);
    width:100%;

    @media all and (min-width:480px){
        top:30%;
    }
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
    margin-top:20%;
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
