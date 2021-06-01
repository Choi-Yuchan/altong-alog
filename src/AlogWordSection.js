import React, { useState } from 'react';
import styled from 'styled-components';
import AlogSearch from './alogSearch/AlogSearch';
import { Link } from 'react-router-dom';

function AlogWordSection (props) {
    const langWordSection = {
        ko:{
            all:"전체보기"
        }
    }
    const all = langWordSection.ko.all;
    const many = `1`;

    return ( 
       <Frame>
        <Link to="/personalMain">
           <WordBg>
               <Shadow></Shadow>
               <WordBgImg src={process.env.PUBLIC_URL + '/images/' + props.bgImg }/>
               <WordTitle><span>{ all }</span> (<span>{ many }</span>)</WordTitle>
           </WordBg>
        </Link>
           <ContentsArea>
            <AlogSearch show = { props.show }></AlogSearch>
           </ContentsArea>
       </Frame>
    )
};

const Frame = styled.div`
    width:100%; height:auto;    
`;

const WordBg = styled.div`
    width:100%; height:105px;
    object-fit:cover;
    object-position:center center;
    position:relative;
    background:#fff;

`;

const Shadow = styled.div`
    position:absolute;
    left:0; top:0;
    width:100%; height:100%; 
    background:rgba(0,0,0,0.3);
    cursor:pointer;
`;

const WordBgImg = styled.img`
    width:100%; height:100%;
    object-fit:cover;
    object-position:center center;
`;

const WordTitle = styled.div`
    text-align:center;
    width:80%;  
    position:absolute;
    font-weight:bold;
    font-size:1rem;
    left:50%; top:40%;
    transform:translateX(-50%);
    color:#fefefe;
    
`;

const ContentsArea = styled.div`
    width:100%; height:auto;
`;

export default AlogWordSection;