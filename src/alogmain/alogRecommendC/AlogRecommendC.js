import React from 'react';
import styled from 'styled-components';
import ContentsEl from './ContentsEl';
import AlogPage from '../../AP/AlogPage';



function AlogRecommendC(props) {
    return (
        <ContentsBox>
            <ContentsTitle>{props.title}</ContentsTitle>
            <ContentsList>
                {props.recommend.map(recommend => (
                    <ContentsEl recommend={recommend} key={recommend.id} />
                ))}
            </ContentsList>
        </ContentsBox>
    );
}

const ContentsBox = styled.div`
    width:95%;
    max-width:780px;
    margin:0 auto;
`;
const ContentsTitle = styled.p`
    font-size:0.9375rem;
    text-align:center;
    font-weight:bold;
    color:#707070;
    margin-top:2.188rem;
    margin-bottom:2rem;

    @media (min-width:480px) {
        font-size:1.125rem;
    }
`;
const ContentsList = styled.div``;

export default AlogRecommendC;