import React from 'react';
import styled from 'styled-components';

function MyMainAlogSlide() {
    return (
        <DefaultSlideBox>
            <DefaultSlideEl>지정된 대문 글이 없습니다.<br/>대문글을 설정 해 주세요.</DefaultSlideEl>
            <DefaultSlideEl>지정된 대문 글이 없습니다.<br/>대문글을 설정 해 주세요.</DefaultSlideEl>
        </DefaultSlideBox>
    );
}

const DefaultSlideBox = styled.div`
    display:flex;
    background:#eee;
    justify-content:center;
    box-sizing:border-box;
    padding: 20px 0;
    margin-bottom:15px;

    p:first-child {
        margin-right:20px;

        @media (min-width:480px) {
            margin-right:50px;
        }
    }
`;
const DefaultSlideEl = styled.p`
    width:35%;
    padding:10px;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    height:150px;
    background:#bbb;
    border-radius:20px;
    box-sizing:border-box;
    font-size:14px;
    line-height:1.5em;
    color:#777;
    font-weight:bold;
    box-shadow:2px 2px 10px rgba(0,0,0,0.2);
    letter-spacing:-1px;

    @media (min-width:480px) {
        width:25%;
        height:200px;
    }
`;

export default MyMainAlogSlide;