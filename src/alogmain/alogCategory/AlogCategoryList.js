import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function AlogCategoryList(props) {
    return (
        <ListBox to="/contents">
            <CategoryListImg imgurl={process.env.PUBLIC_URL + '/images/' + props.cateList.img}></CategoryListImg>
            <CategoryListText>{props.cateList.text}</CategoryListText>
            <CategoryListBy>
                <CategoryTime>{props.cateList.hour}{props.cateList.time}</CategoryTime>
                <CategoryBy>By {props.cateList.nickname}</CategoryBy>
            </CategoryListBy>
        </ListBox>
    );
}

const ListBox = styled(Link)`
    display:block;
    width:48%;
    margin-top:0.625rem;
    cursor:pointer;
`;
const CategoryListImg = styled.div`
    background-image: url(${props => props.imgurl});
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    height:19vh;
`;
const CategoryListText = styled.p`
    text-overflow:ellipsis;
    overflow:hidden;
    display:-webkit-box;
    -webkit-line-clamp:3;
    -webkit-box-orient:vertical;
    font-size:0.625rem;
    color:#707070;
    margin:5px 0;
    

    @media (min-width:480px) {
        font-size:0.75rem;
    }
`;
const CategoryListBy = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
`;
const CategoryTime = styled.span`
    font-size:0.625rem;
    color:#808080;

    @media (min-width:480px) {
        font-size:0.75rem;
    }
`;
const CategoryBy = styled.span`
    font-size:0.625rem;
    color:#808080;

    @media (min-width:480px) {
        font-size:0.75rem;
    }
`;

export default AlogCategoryList;