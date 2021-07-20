import React from 'react';
import styled from 'styled-components';
import NoticeModify_Contents from './NoticeModify_Contents';
import { useTranslation } from 'react-i18next';

const NoticeModify  = ({dummyData, setDummyData}) => {
    
    const {t} = useTranslation();
    const onRemove = (id) => {
        setDummyData({...dummyData, modify: dummyData.modify.filter(data => data.id !== id)})
    }

    return(
        <Wrap>
        <TopTitle>{t('Notification')[0]}</TopTitle>
        <GrayContents>{t('Revised_Post')[0]}<GrayContentsCount>{dummyData.modify.length}</GrayContentsCount>{t('Revised_Post')[1]}</GrayContents>
        {dummyData.modify.map((modify)=>{
            return(
                <NoticeModify_Contents key={modify.id} modify={modify} onRemove={onRemove} selected={modify.id}></NoticeModify_Contents>
            )})
        }
        </Wrap>
    )
};

export default NoticeModify;

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
