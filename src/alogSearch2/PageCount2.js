import React from 'react';
import styled from 'styled-components';

function PageCount2() {
    return (
        <CountBox>
            <LeftBox>
                <LeftIcon2 src={process.env.PUBLIC_URL + '/images/strong_left_arrow.svg'}></LeftIcon2>
                <LeftIcon1 src={process.env.PUBLIC_URL + '/images/left_arrow.svg'}></LeftIcon1>
            </LeftBox>
            <CountNumber>
                <ShowNumber>1</ShowNumber>
                <ShowNumber>2</ShowNumber>
                <ShowNumber>3</ShowNumber>
                <ShowNumber>4</ShowNumber>
                <ShowNumber>5</ShowNumber>
            </CountNumber>
            <RightBox>
                <RightIcon1 src={process.env.PUBLIC_URL + '/images/right_arrow.svg'}></RightIcon1>
                <RightIcon2 src={process.env.PUBLIC_URL + '/images/strong_right_arrow.svg'}></RightIcon2>
            </RightBox>
        </CountBox>
    );
}

const CountBox = styled.div`
    width:90%;
    max-width:800px;
    margin:2rem auto 0;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const LeftBox = styled.div`
    width:20%;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const LeftIcon2 = styled.img`
    margin-right:1rem;
    cursor:pointer;
`;
const LeftIcon1 = styled.img`
    cursor:pointer;
`;
const CountNumber = styled.div`
    width:40%;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;
const ShowNumber = styled.span`
    cursor:pointer;
`;
const RightBox = styled.div`
    width:20%;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const RightIcon1 = styled.img`
    cursor:pointer;
`;
const RightIcon2 = styled.img`
    margin-left:1rem;
    cursor:pointer;
`;

export default PageCount2;