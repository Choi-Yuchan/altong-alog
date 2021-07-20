/* eslint-disable */
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NoticePaste from '../noticeLists/NoticePaste';
import NoticeReply from '../noticeLists/NoticeReply';
import NoticeRefund from '../noticeLists/NoticeRefund';
import NoticeModify from '../noticeLists/NoticeModify';
import NoticeMessage from '../noticeLists/NoticeMessage';
import NoticeMento from '../noticeLists/NoticeMento';
import NoticeHun from '../noticeLists/NoticeHun';

const Notice = ({dummyData, setDummyData, body, setBody}) => {

    const {t} = useTranslation();
    const noticeLength = dummyData.notice.count;
    const refundLength = dummyData.refund.length;
    const replyLength = dummyData.reply.length;
    const hunLength = dummyData.hunAl.length;
    const modifyLength = dummyData.modify.length;
    const takeLength = dummyData.take.length;
    const messageLength = dummyData.message.length;
    const mentoLength = dummyData.mento.length;

  
    return(
        <>
            <Route exact path="/notice" render={()=>
                <>
                    <Title>{t('Notification')[0]}</Title>
                    <ConNotice href="http://www.altong.com/default/cs/notice/notice?Page=1">
                        <ConImg src={process.env.PUBLIC_URL + '/images/icon_notice.png'} />
                        <ConText>{t('New_Notice')[0]} <ConTextSpan>{noticeLength}</ConTextSpan>{t('New_Notice')[1]}</ConText>
                    </ConNotice>
                    <Contents to="/notice/paste">
                        <ConImg src={process.env.PUBLIC_URL + '/images/icon_ans_choice.png'} />
                        <ConText>{t('New_Take')[0]} <ConTextSpan>{takeLength}</ConTextSpan>{t('New_Take')[1]}</ConText>
                    </Contents>
                    <Contents to="/notice/reply">
                        <ConImg src={process.env.PUBLIC_URL + '/images/icon_cmt_regist.png'} />
                        <ConText><ConTextSpan>{replyLength}</ConTextSpan>{t('New_Reply')}</ConText>
                    </Contents>
                    <Contents to="/notice/hun">
                        <ConImg src={process.env.PUBLIC_URL + '/images/icon_love.png'} />
                        <ConText>{t('New_HunAl')[0]} <ConTextSpan>{hunLength}</ConTextSpan>{t('New_HunAl')[1]}</ConText>
                    </Contents>
                    <Contents to="/notice/message">
                        <ConImg src={process.env.PUBLIC_URL + '/images/icon_message.png'} />
                        <ConText>{t('New_Message')[0]} <ConTextSpan>{messageLength}</ConTextSpan>{t('New_Message')[1]}</ConText>
                    </Contents>
                    <Contents to="/notice/mento">
                        <ConImg src={process.env.PUBLIC_URL + '/images/icon_add_mento.png'} />
                        <ConText>{t('New_Mentees')[0]} <ConTextSpan>{mentoLength}</ConTextSpan>{t('New_Mentees')[1]}</ConText>
                    </Contents>
                    <Contents to="/notice/refund">
                        <ConImg src={process.env.PUBLIC_URL + '/images/icon_almoney_paying.png'} />
                        <ConText>{t('New_Refund')[0]} <ConTextSpan>{refundLength}</ConTextSpan>{t('New_Refund')[1]}</ConText>
                    </Contents>
                    <Contents to="/notice/modify">
                        <ConImg src={process.env.PUBLIC_URL + '/images/icon_edit.png'} />
                        <ConText>{t('New_Revise')[0]} <ConTextSpan>{modifyLength}</ConTextSpan>{t('New_Revise')[1]}</ConText>
                    </Contents>
                </>
            }/>
            <Route path="/notice/paste" render={() => 
                <NoticePaste dummyData={dummyData} setDummyData={setDummyData} />}
            />
            <Route path="/notice/reply" render={() => 
                <NoticeReply dummyData={dummyData} setDummyData={setDummyData}/>}
            />
            <Route path="/notice/refund" render={() => 
                <NoticeRefund dummyData={dummyData} setDummyData={setDummyData}/>}
            />
            <Route path="/notice/modify" render={() => 
                <NoticeModify dummyData={dummyData} setDummyData={setDummyData}/>}
            />
            <Route path="/notice/message" render={() => 
                <NoticeMessage dummyData={dummyData} setDummyData={setDummyData}/>}
            />
            <Route path="/notice/hun" render={() => 
                <NoticeHun dummyData={dummyData} setDummyData={setDummyData}/>}
            />
            <Route path="/notice/mento" render={() => 
                <NoticeMento dummyData={dummyData} setDummyData={setDummyData} body={body} setBody={setBody}/>}
            />     
        </>
    )
}

export default Notice;

const Title = styled.div`
    font-size: 18px Cabin;
    text-align: center;
    padding: 15px 0;
    color:#333333;
    font-weight: bold;
`;
const ConNotice = styled.a`
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    display:flex;
    align-items: flex-start;
    margin-bottom:10px;
    padding:13px 13px 13px 80px;

    @media screen and (max-width: 480px){
        padding:10px 10px 10px 20px;
    }
`;
const Contents = styled(Link)`
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    display:flex;
    align-items: flex-start;
    margin-bottom:10px;
    padding:13px 13px 13px 80px;

    @media screen and (max-width: 480px){
        padding:10px 10px 10px 20px;
    }
`;
const ConImg = styled.img`
    width:25px; height:23px;
    
    @media screen and (min-width: 480px){
        transform: translateY(3px);
    }
`;
const ConText = styled.div`
    font-size: 14px;
    color:#666666;
    line-height: 2;
    margin-left: 10px;

    @media screen and (max-width: 480px){
        font-size: 12px;
    }
`;
const ConTextSpan = styled.span`
    color:#fd0031;
    font-weight: bold;
    text-align:left;
`;
