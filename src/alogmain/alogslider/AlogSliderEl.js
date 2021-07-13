import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function AlogSliderEl(props) {
    return (
        <SliderAlogEl to="/contents" imgurl={process.env.PUBLIC_URL + '/images/' + props.content.bgimg} count={props.count} >
            <SliderMask>
                <SliderTitle>{props.content.title}</SliderTitle>
                <SliderBy>by {props.content.writer}</SliderBy>
            </SliderMask>
        </SliderAlogEl>
    );
}

const SliderAlogEl = styled(Link)`
    display:block;
    width:${props => 100/props.count}%;
    height:100%;
    background-image: url(${props => props.imgurl});
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    position:relative;
    cursor:pointer;
`;

const SliderMask = styled.div`
    width:100%;
    height:100%;
    background-color:rgba(133,133,133,0.65);
    position:absolute;
    top:0;
    left:0;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`;
const SliderTitle = styled.p`
    text-align:center;
    font-size:0.9375rem;
    color:#ffffff;
    font-weight:bold;
    margin:0;
    line-height:1.5;
    width:80%;

    @media (min-width:480px) {
        font-size:1.125rem;
    }
`;

const SliderBy = styled.p`
    text-align:center;
    font-size:0.9375rem;
    font-weight:bold;
    color:#ffffff;
    margin:0;
    margin-top:1.25rem;

    @media (min-width:480px) {
        font-size:1.125rem;
    }
`;


export default AlogSliderEl;