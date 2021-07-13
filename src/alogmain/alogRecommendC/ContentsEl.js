import React from 'react';
import styled from 'styled-components';
import ContentsInfo from './contentsEl/ContentsInfo';
import ContentsPrev from './contentsEl/ContentsPrev';
import { Link } from 'react-router-dom';

function ContentsEl(props) {
    return (
            <ContentsBox to="/contents">
            <ContentsInfo recommend={props.recommend} />
            <ContentsPrev recommend={props.recommend} />
            </ContentsBox>
    );
}

const ContentsBox = styled(Link)`
    display:block;
    margin:0.375rem auto;
    display:flex;
    cursor:pointer;
`;


export default ContentsEl;