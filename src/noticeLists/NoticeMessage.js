import React, { useState } from 'react';
import styled from 'styled-components';
import NoticeMessageContents from './NoticeMessageContents';
import NoticeMessagePop from './NoticeMessagePop';
import { useTranslation } from 'react-i18next';

const NoticeMessage  = ({dummyData, setDummyData}) => {
    
    const {t} = useTranslation();
    const [pop, setPop] = useState(false); 
    const [message, setMessage] = useState();
    const usersMessageLength = dummyData.message.length - 1;
    const onRemove = (id) => {
        setDummyData({...dummyData, message: dummyData.message.filter(data => data.id !== id)})
    }

    return(
        <>
            <TopTitle>{t('Messages')[0]}</TopTitle>
            <GrayContents>
                <Member>{t('Messages')[1]}</Member><Contents>{t('Messages')[2]}</Contents><Dates>{t('Messages')[3]}</Dates>
            </GrayContents>
            {dummyData.message.map((text, index)=>
                <NoticeMessageContents 
                    text={text}
                    setMessage={setMessage} count={index}
                    key={text.id} setPop={setPop}
                    selected={text.id} onRemove={onRemove}
                />
            )}
            {pop &&
                <NoticeMessagePop
                    onRemove={onRemove} 
                    usersMessage={dummyData.message[message]} 
                    message={message} setMessage={setMessage} 
                    setPop={setPop}
                    number={usersMessageLength}
                />          
            }
        </>
    )
};

export default NoticeMessage;

const TopTitle = styled.div`
    font-size: 18px Cabin;
    text-align: center;
    padding: 15px 0;
    color:#333333;
    font-weight: bold;
`;

const GrayContents = styled.div`
    font-size: 14px;
    border: none;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    display:flex;
    align-items: flex-start;
    margin-bottom:10px;
    padding:25px;
    background:#e1e1e1;
    font-weight: bold;
    color:#666666;
    display:flex;

    @media screen and (max-width: 480px){
        padding:13px;
        font-size: 12px;
    }
`;
const Member = styled.div`
    text-align: center;
    flex-basis: 25%;
`;
const Contents = styled.div`
    text-align: center;
    flex-basis: 50%;
`;
const Dates = styled.div`
    text-align: center;
    flex-basis: 25%;
`;
