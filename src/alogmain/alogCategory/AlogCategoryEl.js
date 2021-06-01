import React from 'react';
import styled from 'styled-components';

// img:'category03_off.svg',
//             img_on: 'category03_on.svg',
//             text: '생활',
//             state:false

const ClickCategory = (alogCategory, setAlogCategory, categorySample, select) => {
    const one = [{ 
        img: alogCategory[select].img,
        img_on: alogCategory[select].img_on,
        text : alogCategory[select].text,
        state : true
    }];
    
    const B =   alogCategory.filter( (x, idx) => {
        return idx < select;
    } );
    const D=   alogCategory.filter( (x, idx) => {
        return idx > select;
    } );

    setAlogCategory(B.concat(one).concat(D));


}


function AlogCategoryEl(props) {
    return (
        <CategoryElDiv onClick={() => {
            console.log("e");
            ClickCategory(props.alogCategory, props.setAlogCategory, props.categorySample, props.select );
        }}
        >
            <CategoryImg
                src={
                    props.imgList.state === false
                    ? process.env.PUBLIC_URL + '/images/category/' + props.imgList.img
                    : process.env.PUBLIC_URL + '/images/category/' + props.imgList.img_on
                    }
            >
            </CategoryImg>
            <CategoryText>{props.imgList.text}</CategoryText>
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
    color:#444;
    letter-spacing:-2px;

    @media (min-width:480px) {
        font-size:12px;
        top:105%;
    }
`;

export default AlogCategoryEl;