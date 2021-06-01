import React from 'react';
import styled from 'styled-components';
import ContentsInfo from './contentsEl/ContentsInfo';
import ContentsPrev from './contentsEl/ContentsPrev';
import { Route, Link } from 'react-router-dom';

function ContentsEl(props) {
    return (
        <Link to="/contents">
            <ContentsBox>
            <ContentsInfo recommend={props.recommend} />
            <ContentsPrev recommend={props.recommend} />
            </ContentsBox>
        </Link>
    );
}

const ContentsBox = styled.a`
    display:block;
    margin:0.375rem auto;
    display:flex;
    cursor:pointer;
`;


export default ContentsEl;