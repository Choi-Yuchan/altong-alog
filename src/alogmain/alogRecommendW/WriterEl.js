import React from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';

function WriterEl(props) {
    return (
        <WriterElBox>
            <Link to="/personalMain">
            <WriterProfile imgurl={process.env.PUBLIC_URL + '/images/' + props.writer.img}></WriterProfile>
            <WriterInfo>
                <WriterNation src={process.env.PUBLIC_URL + 'images/nation/' + props.writer.nation}></WriterNation>
                <WriterName>{props.writer.nickname}</WriterName>
            </WriterInfo>
            <NationCode>{props.writer.code}</NationCode>
            </Link>
        </WriterElBox>
    );
}

const WriterElBox = styled.a`
    display:block;
    border:1px solid #bfbbbb;
    width:40%;
    border-radius: 1.875rem;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.625rem 0 1rem;
    box-sizing:border-box;
    margin:0.625rem;
    cursor:pointer;

    @media (min-width:480px) {
        margin: 0.625rem 1.25rem;
        width:30%;
    }
`;
const WriterProfile = styled.div`
    display:block;
    width:4.688rem;
    height:4.688rem;
    background-image:url(${props => props.imgurl});
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center center;
    border-radius:50%;
    margin-bottom:0.625rem;

    @media (min-width:480px) {
        width:5rem;
        height:5rem;
    }
`;
const WriterInfo = styled.div`

`;
const WriterNation = styled.img`
    width:1.25rem;
    margin-right:0.3125rem;
`;
const WriterName = styled.span`
    font-size:0.9375rem;
    color:#707070;
`;
const NationCode = styled.p`
    margin:0;
    text-align:center;
    font-size:0.875rem;
    color:#707070;
    font-weight:bold;
`;

export default WriterEl;