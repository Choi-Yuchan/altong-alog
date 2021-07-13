import React from 'react';
import styled from 'styled-components';
import AlogDalogList from '../components/AlogDalogList';

function PrevNextContents({sample}) {

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
            <DefaultContentsBox>이전글이 없습니다.</DefaultContentsBox>
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
            <BtnBox><span>&#60; 이전글</span></BtnBox>
            <BtnBox><span>다음글 &#62;</span></BtnBox>
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
