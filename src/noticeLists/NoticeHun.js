import React from 'react';
import styled from 'styled-components';
import TimeToggle from '../components/function/TimeToggle';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NoticeHun  = ({dummyData, setDummyData}) => {
    
    const {t} = useTranslation();
    const onRemove = (id) => {
        setDummyData({...dummyData, hunAl: dummyData.hunAl.filter(data => data.id !== id)})
    }

    return(
        <>
            <TopTitle>{t('Received_Al')[0]}</TopTitle>
            <GrayContents>
                <Member>{t('Received_Al')[1]}</Member><Contents>{t('Received_Al')[2]}</Contents><Dates>{t('Received_Al')[3]}</Dates>
            </GrayContents>
            {dummyData.hunAl.map((hunAl)=>
                <Elements state={hunAl.state} key={hunAl.id} >{/* 클릭 시 해당 내용 확인으로 간주, 삭제*/}
                    <Account>
                        <Photo src={hunAl.profileImg}/>
                        <Wrap>
                            <Grade>{hunAl.grade}</Grade>
                            <Nickname>{hunAl.account}</Nickname>
                            <Direct to={hunAl.href}>{hunAl.direct}</Direct>
                        </Wrap>
                    </Account>
                    <Hun>{hunAl.hun.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}{hunAl.al}</Hun>
                    <Day>{TimeToggle(hunAl.date)}</Day>
                    <Close onClick={()=>{onRemove(hunAl.id)}}>X</Close>
                </Elements>
            )}
        </>
    )
};

export default NoticeHun;

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
const Elements = styled.div`
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    display:flex;
    align-items: center;
    margin-bottom:10px;
    padding:13px;
    text-align:center;
    justify-content: space-between;

    @media screen and (max-width: 480px){
        padding:10px;
    }
`;

const Account = styled.div`
    display:flex;
    align-items: center;
    font-size:13px;
    justify-content: flex-start;
    padding-left:3vw;
    flex-basis: 25%;
    
    @media screen and (max-width: 480px){
        font-size:12px;
        padding-left:0;
     }
     @media screen and (min-width: 800px){
        flex-basis: 23%;
    }
`;
const Photo = styled.img`
    width:40px; height:40px;
    margin-right:5px;
    border-radius:50%;

    @media screen and (max-width: 480px){
        width:30px; height:30px;
     }
`;
const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;
const Grade = styled.div`
    border:1px solid #fd0031;
    color:#fd0031;
    border-radius: 10px;
    padding:1px;
    width:45px;
    font-size:10px;
    text-align: center;
`;
const Direct = styled(Link)`
    color:#666666;
    font-size:10px;
    white-space:normal;
    overflow:hidden;
    text-overflow:ellipsis;
    word-wrap: break-word; 
    display: -webkit-box; 
    -webkit-line-clamp: 1; 
    -webkit-box-orient: vertical;
`;
const Nickname = styled.span`
    white-space:normal;
    overflow:hidden;
    text-overflow:ellipsis;
    word-wrap: break-word; 
    display: -webkit-box; 
    -webkit-line-clamp: 1; 
    -webkit-box-orient: vertical;
    font-weight: 600;
    font-size:13px;
    padding:3px 0 3px 0;
    color:#666666;
`;

const Hun = styled.div`
    font-size:13px;
    text-align:center;
    flex-basis: 50%;
    color:#666666;
    font-weight: 600;

    @media screen and (max-width: 480px){
        font-size:12px;
     }
    @media screen and (min-width: 800px){
        flex-basis: 57%;
    }
`;
const Day = styled.div`
    font-size:13px;
    flex-basis: 25%;
    text-align:right;
    color:#666666;
    font-weight: 600;

    @media screen and (max-width: 480px){
        font-size:12px;
        text-align:center;
     }
`;
const Close = styled.div`
    display:inline;
    margin-left:10px;
    font-size:5px;
    
    @media screen and (max-width: 480px){
        margin-left:0px;
     }
`;
