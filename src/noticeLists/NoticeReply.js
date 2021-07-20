import React from 'react';
import styled from 'styled-components';
import NoticeReply_Contents from './NoticeReply_Contents';
import { useTranslation } from 'react-i18next';

const NoticeReply  = ({dummyData, setDummyData}) => {

    const {t} = useTranslation();
    const onRemove = (id) => {
        setDummyData({...dummyData, reply: dummyData.reply.filter(data => data.id !== id)})
    }

    return(
        <>
            <TopTitle>{t('Notification')[0]}</TopTitle>
            <GrayContents>{t('Post_Comment')[0]}<GrayContentsCount>{dummyData.reply.length}</GrayContentsCount>{t('Post_Comment')[1]}</GrayContents>
            { 
                dummyData.reply.map((reply)=>{
                    return(
                        <NoticeReply_Contents key={reply.id} selected={reply.id} reply={reply} onRemove={onRemove} ></NoticeReply_Contents>
                    )
                })
            }
        </>
    )
};

export default NoticeReply;

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
    display:flex;
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
