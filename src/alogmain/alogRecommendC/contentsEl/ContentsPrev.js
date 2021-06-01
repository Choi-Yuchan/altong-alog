import React from 'react';
import styled from 'styled-components';

function ContentsPrev(props) {
    return (
        <PrevBox imgurl={process.env.PUBLIC_URL + '/images/' + props.recommend.bgImg}>
            <PrevMask></PrevMask>
            <PrevText>{props.recommend.title}</PrevText>
            <PrevPick src={process.env.PUBLIC_URL + '/images/recommend01.svg'}></PrevPick>
        </PrevBox>
    );
}

const PrevBox = styled.div`
    width:35%;
    background-image:url(${props => props.imgurl});
    background-size:cover;
    background-position:center center;
    background-repeat:no-repeat;
    position:relative;
    display:flex;
    align-items: center;

    @media (min-width:480px) {
        width:30%;
    }
`;
const PrevMask = styled.div`
    width:100%;
    height:100%;
    background-color:rgba(133,133,133,0.65);
    position:absolute;
    top:0;
    left:0;
`;
const PrevText = styled.p`
    width:100%;
    text-align:center;
    position:relative;
    z-index:2;
    color:#fff;
    font-weight:bold;
    font-size:0.875rem;
`;
const PrevPick = styled.img`
    display:block;
    width:2.75rem;
    position:absolute;
    top:-1rem;
    left:-1rem;
`;

export default ContentsPrev;