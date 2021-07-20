import React from 'react';
import styled from 'styled-components';
import AlogDalogList from '../components/AlogDalogList';
import { useTranslation } from 'react-i18next';

function PrevNextContents({sample}) {

    const {t} = useTranslation();
    const prevContents = sample[1];
    const nextContents = sample[2];

    return (
        <PrevNextWrap>
            {/* <AlogDalogList 
                key={prevContents.id} 
                backImg={prevContents.backImg} 
                title={prevContents.title} 
                profile={prevContents.profile} 
                nickname={prevContents.nickname} 
                time={prevContents.time} 
                view={prevContents.view} 
                reply={prevContents.reply}
                common={prevContents.id}                
            /> */}
            <DefaultContentsBox>{t('Previous_Post')[2]}</DefaultContentsBox>
            <AlogDalogList
                key={nextContents.id} 
                backImg={nextContents.backImg} 
                title={nextContents.title} 
                profile={nextContents.profile} 
                nickname={nextContents.nickname} 
                time={nextContents.time} 
                view={nextContents.view} 
                reply={nextContents.reply}
                common={nextContents.id}                
            />
            <BtnBox><span>&#60; {t('Previous_Post')[0]}</span></BtnBox>
            <BtnBox><span>{t('Previous_Post')[1]} &#62;</span></BtnBox>
        </PrevNextWrap>
    );
}

export default PrevNextContents;

const PrevNextWrap = styled.div`
    display:flex;
    flex-wrap:wrap;
    width:100%;
    justify-content:space-around;
    margin:20px auto;

    @media (min-width:480px) {
        width:80%;
        justify-content:space-between;
    }
`;
const BtnBox = styled.div`
    width:40%;
    margin:0 2%;
    border:1px solid transparent;
    display:flex;
    justify-content:center;
    align-items:center;

    span {
        font-size:1rem;
        border:1px solid #aaa;
        color:#999;
        border-radius:20px;
        padding:2px 10px;
        cursor:pointer;
        box-sizing:border-box;
    }
`;
const DefaultContentsBox = styled.div`
    width:40%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:2%;
    font-size:14px;
    font-weight:bold;
    color:#aaa;
    border:1px solid transparent;
`;
