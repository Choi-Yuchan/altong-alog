import React from 'react';
import styled from 'styled-components';
import ContentsActive from './ContentsActive';


function ContentsInfo(props) {
    return (
        <ContentsInfoBox>
            <ContentsProfile>
                <ContentsProfileImg imgurl={process.env.PUBLIC_URL + '/images/' + props.recommend.profile}></ContentsProfileImg>
                <ContentsNationImg src={process.env.PUBLIC_URL + '/images/nation/' + props.recommend.nation}></ContentsNationImg>
                <UserLv>{props.recommend.lv}</UserLv>
                <ContentsNickname>{props.recommend.nickname}</ContentsNickname>
            </ContentsProfile>
            <ContentsText>{props.recommend.text}</ContentsText>
            <ContentsActive recommend={props.recommend} />
        </ContentsInfoBox>
    );
}

const ContentsInfoBox = styled.div`
    width:75%;
    padding-right:0.5rem;

    @media (min-width:480px) {
        width:80%;
    }
`;
const ContentsProfile = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
`;
const ContentsProfileImg = styled.span`
    display:inline-block;
    width:3.125rem;
    height:3.125rem;
    background-image: url(${props => props.imgurl});
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    border-radius:50%;
    margin-right:0.625rem;
`;
const ContentsNationImg = styled.img`
    width:1.25rem;
    margin-right:4px;
`;
const UserLv = styled.span`
    display:inline-block;
    font-size:10px;
    color:#f76707;
    border:1px solid #f76707;
    padding:2px 4px;
    box-sizing:border-box;
    border-radius:10px;
    margin-right:4px;
`;
const ContentsNickname = styled.span`
    display:inline-block;
    font-size:0.9375rem;
    color:#707070;
`;
const ContentsText = styled.p`
    font-size:0.625rem;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    color:#707070;
    margin-bottom:5px;

    @media (min-width:480px) {
        font-size:0.75rem;
    }
`;


export default ContentsInfo;