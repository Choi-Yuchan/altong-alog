import React from 'react';
import styled from 'styled-components';
import NoticeModifyData from '../NoticeModifyData.json';
import NoticeModify_Contents from './NoticeModify_Contents';

const Wrap = styled.div`
    width:100%; height:100%;
    position:relative;
`;
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

const NoticeModify  = ({onRemoveModify, usersModify, setUserModify}) => {
    
    const alarm = NoticeModifyData.ko.alarm;
    const Title = NoticeModifyData.ko.modifyTitle;

    usersModify.sort(function(a,b){
        return b.date - a.date
      });

    return(
        <Wrap>
        <TopTitle>{alarm}</TopTitle>
        <GrayContents>{Title.Front}<GrayContentsCount>{usersModify.length}</GrayContentsCount>{Title.Back}</GrayContents>
        {
            usersModify.map((modify, number)=>{
                return(
                    <>
                    <NoticeModify_Contents key={modify.id} modify={modify} number={number} onRemoveModify={onRemoveModify} usersModify={usersModify} setUserModify={setUserModify}></NoticeModify_Contents>
                    </>
                )
            })
        }
        </Wrap>
    )
};

export default NoticeModify;