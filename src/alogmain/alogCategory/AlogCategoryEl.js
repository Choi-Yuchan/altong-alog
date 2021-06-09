import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function AlogCategoryEl(props) {

    const [place, setPlace] = useState(false);

    useEffect(()=>{
        if (props.highlight === props.selected) {
            setPlace(true);
        } else {
            setPlace(false);
        }
    }, [props.highlight]);

    return (
        <CategoryElDiv onClick={() => {
            props.setHighlight(props.selected);
        }}
        >
            <CategoryImg
                src={
                    place === false
                    ? process.env.PUBLIC_URL + '/images/category/' + props.imgList.img
                    : process.env.PUBLIC_URL + '/images/category/' + props.imgList.img_on
                    }
            >
            </CategoryImg>
            <CategoryText place={place}>{props.imgList.text}</CategoryText>
        </CategoryElDiv>
    );
}

const CategoryElDiv = styled.li`
    width:7.888888%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    position:relative;
    cursor:pointer;

    @media (min-width:480px) {
        width:5.5%;
    }
`;
const CategoryImg = styled.img`
    width:100%;
    display:block;
`;
const CategoryText = styled.span`
    width:100%;
    display:block;
    font-size:10px;
    text-align:center;
    position:absolute;
    top:100%;
    left:0;
    font-weight:bold;
    color:${props => props.place === true ?"#fd0031":"#444"};
    letter-spacing:-2px;

    @media (min-width:480px) {
        font-size:12px;
        top:105%;
    }
`;

export default AlogCategoryEl;