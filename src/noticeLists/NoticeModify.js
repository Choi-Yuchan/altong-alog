import React, { useState } from 'react';
import styled from 'styled-components';
import NoticeModifyData from '../NoticeModifyData.json';
import NoticeModifyAlert from './NoticeModifyAlert';
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

const NoticeModify  = () => {
    
    const alarm = NoticeModifyData.ko.alarm;
    const Title = NoticeModifyData.ko.modifyTitle;
    const modifyArray = NoticeModifyData.ko.modifyArray;

    const [alert, setAlert] = useState(modifyArray);
    function popOpen(i) {
        const states = [...modifyArray];
        states[i].popState = true;
        setAlert( states );
    }
    function popClose(i) {
        const states2 = [...modifyArray];
        states2[i].popState = false;
        setAlert( states2 );
    }

    modifyArray.sort(function(a,b){
        return b.date - a.date
      });

    return(
        <Wrap>
        <TopTitle>{alarm}</TopTitle>
        <GrayContents>{Title.Front}<GrayContentsCount>{modifyArray.length}</GrayContentsCount>{Title.Back}</GrayContents>
        {
            alert.map((modify, i)=>{
                return(
                    <>
                    {  
                        modify.popState === true ?
                        <NoticeModifyAlert modify={modify} number={i} popClose={popClose} />
                        : null
                    }
                    <NoticeModify_Contents key={modify.id} modify={modify} number={i} pop={popOpen}></NoticeModify_Contents>
                    </>
                )
            })
        }
        
        </Wrap>
    )
};

export default NoticeModify;