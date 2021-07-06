import React, { useState } from 'react';
import styled from 'styled-components';
import NoticePasteData from '../NoticePasteData.json';
import NoticePaste_Contents from './NoticePaste_Contents';

const TopTitle = styled.div`
    font-size: 18px Cabin;
    text-align: center;
    padding: 15px 0;
    color:#333333;
    font-weight: bold;
`;
const GrayContentsCount = styled.span`
    color:#fd0031;
    margin-left:5px;
`;
const GrayContents = styled.div`
    font-size: 16px;
    border: none;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    display:${ props => props.count !== 0 ? "flex" : "none"};
    align-items: flex-start;
    margin-bottom:10px;
    padding:13px 13px 13px 80px;
    background:#e1e1e1;
    font-weight: bold;
    color:#666666;

    @media screen and (max-width: 480px){
        padding:10px 10px 10px 20px;
        font-size: 14px;
    }
`;

const NoticePaste  = ({onRemovePaste, usersPaste}) => {
    
    const alarm = NoticePasteData.ko.alarm;
    const Title = NoticePasteData.ko.pasteTitle;
    const pasteArray = NoticePasteData.ko.pasteArray;

    return(
        <>
        <TopTitle>{alarm}</TopTitle>
        <GrayContents>{Title.Front}<GrayContentsCount>{usersPaste.length}</GrayContentsCount>{pasteArray.Back}</GrayContents>
        {
            usersPaste.map((Paste)=>{
                return(
                    <NoticePaste_Contents key={Paste.id} to={Paste.href} paste={Paste} onRemovePaste={onRemovePaste}></NoticePaste_Contents>
                )
            })
        }
        
        </>
    )
};

export default NoticePaste;