import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import NoticeModifyData from '../NoticeModifyData.json';
import NoticeModify_Contents from './NoticeModify_Contents';

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

const NoticeModify  = () => {
    
    const alarm = NoticeModifyData.ko.alarm;
    const Title = NoticeModifyData.ko.modifyTitle;
    const modifyArray = NoticeModifyData.ko.modifyArray;

    return(
        <>
        <TopTitle>{alarm}</TopTitle>
        <GrayContents>{Title.Front}<GrayContentsCount>{modifyArray.length}</GrayContentsCount>{Title.Back}</GrayContents>
        {
            modifyArray.map((modify)=>{
                return(
                    <NoticeModify_Contents key={modify.id} to={modify.href} modify={modify}></NoticeModify_Contents>
                )
            })
        }
        
        </>
    )
};

export default NoticeModify;