import React from 'react';
import styled from 'styled-components';
import WriterEl from './WriterEl';

function AlogRecommendW(props) {
    return (
        <WriteBox>
            <WriteTitle>{props.title}</WriteTitle>
            <WriterListBox>
                {props.writer.map(writer => (
                    <WriterEl writer={writer} key={writer.id} />
                ))}
            </WriterListBox>
        </WriteBox>
    );
}

const WriteBox = styled.div`
    width:95%;
    max-width:780px;
    margin:0 auto;
`;
const WriteTitle = styled.p`
    font-size:0.9375rem;
    font-weight:bold;
    color:#707070;
    text-align:center;
    margin-top:2.188rem;

    @media (min-width:480px) {
        font-size:1.125rem;
    }
`;
const WriterListBox = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export default AlogRecommendW;