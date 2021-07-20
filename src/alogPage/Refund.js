import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';

const Refund = ({showRefund, setShowRefund}) => {

    const {t} = useTranslation();
    const history = useHistory();
    const refundReasonList = [
        t('Report_Reason')[1],
        t('Report_Reason')[2],
        t('Report_Reason')[3],
        t('Report_Reason')[4],
        t('Report_Reason')[5],
        t('Report_Reason')[6],
        t('Report_Reason')[7],
        t('Report_Reason')[8]
    ]
    const checkEl = useRef();

    const closePopup = (e) => {
        if(checkEl.current.checked === false){
            window.alert(t('Please_Check'));
            e.preventDefault();
        }
        if(checkEl.current.checked === true) 
        {setShowRefund(!showRefund)}
    }
    return(
        <PopupContainer>
                <CloseBtnBox onClick={() => {history.goBack()}}>
                    <CloseBtn>X</CloseBtn>
                </CloseBtnBox>
                <PopupArticle>
                    <PopupTitle>{t('Refund_Precaution')}</PopupTitle>
                    <PopupSubtitle>{t('Refund_Notice_01')}</PopupSubtitle>
                    <PopupPara>
                        {t('Refund_Notice_01_Content')}
                    </PopupPara>
                    <PopupSubtitle>{t('Refund_Notice_02')}</PopupSubtitle>
                    <PopupPara>
                        {t('Refund_Notice_02_Content')}
                    </PopupPara>
                </PopupArticle>
                <RefundForm>
                    <PopupTitle>{t('Refund_Select')}</PopupTitle>
                    <RefundReasonColumn>
                        {refundReasonList.map(list => 
                        <RefundReason>
                            <ReasonRadio type="radio"/>
                            <ReasonList> {list}</ReasonList>
                        </RefundReason>
                        )}
                    </RefundReasonColumn>
                    {/* text 자동으로 개행 처리 되도록 기능 추가 필요 */}
                    <TextBox>
                        <ReasonText type="text" placeholder={t('Report_Reason')[9]}/>
                    </TextBox>
                    <CheckBoxLabel><CheckBox ref={checkEl} type="checkbox"/>{t('Read_Agree')}</CheckBoxLabel>
                    <RefundBtn onClick={closePopup}>{t('Refund')}</RefundBtn>
                </RefundForm>
            </PopupContainer>

    )
}

const PopupContainer = styled.div`
    position:absolute;
    top: 45px;
    left: 0;
    width:100%;
    background-color: #999;
    color:#fff;
    text-align: center;
    padding:1rem 0;
    z-index: 3;

    @media (min-width: 480px){
        top: 60px;
    }

    @media (min-height: 736px){
        height: 100vh;
    }
`;
const CloseBtnBox = styled.div`
    display:flex;
    justify-content: flex-end;
    align-items: center;
`;
const CloseBtn = styled.button`
    background: none;
    border: none;
    font-size: 1rem;
    color:white;
    padding-right: 1rem;
    cursor: pointer;
`;
const PopupArticle = styled.article`
    text-align: center;
    padding: 1rem;
    @media (min-width: 480px){
        padding: 2rem 4rem;
    }
`;
const PopupTitle = styled.h3`
    font-size: 1em;
    font-weight: bold;
    padding: 1em 0;
`;
const PopupSubtitle = styled.h6`
    font-size: 0.75em;
    line-height:1.5;
    text-align: justify;
`;
const PopupPara = styled.p`
    display:inline-block;
    font-size: 0.75em;
    padding-bottom:1em;
    line-height:1.3;
    text-align: left;
`;
const RefundForm = styled.form`

`;
const RefundReasonColumn = styled.div`
    width: 75%;
    column-count: 2;
    margin: 1em auto;

    @media (min-width: 480px){
        width: 50%;
    }
`;
const RefundReason = styled.label`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0.5em;
`;
const ReasonRadio = styled.input`
`;
const ReasonList = styled.p`
    font-size: 0.75rem;
    padding-left: 0.5em;
`;
const TextBox = styled.div`
    width: 75%;
    margin: 2rem auto;

    @media (min-width: 480px){
        width: 50%;
    }
`;
const ReasonText = styled.input`
    width: 100%;
    height: 100px;
    overflow: hidden;
    white-space: pre-wrap;
    ::placeholder{
        padding-left: 1em;
    }
`;
const CheckBox = styled.input`
`;
const CheckBoxLabel = styled.label`
    display:inline-block;
    font-size: 0.75em;
    padding-bottom:1em;
    line-height:1.3;
    text-align: left;
    cursor: pointer;
`;
const RefundBtn = styled.button`
    display: block;
    cursor: pointer;
    margin: 1rem auto;
    background-color: #fefefe;
    color: #333;
    font-size: 0.75rem;
    font-weight: bold;
    border-radius: 1rem;
    border:1px solid #ababab;
    padding: 0.5em 1rem;
`;

export default Refund;