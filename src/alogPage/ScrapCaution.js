import { useRef } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';

const ScrapCaution = ({viewCaution, setViewCaution}) => {

    const {t} = useTranslation();
    const checkEl = useRef()
    const AuthorId = "순자러버"
    const contentsTitle = `'알통은 무엇인가? 그것에 대해 알아봅시다.'` // 해당 컨텐츠 타이틀
    const usedAl = 300

    const closePopup = (e) => {
        if(checkEl.current.checked === false){
            window.alert(t('Please_Check'));
            e.preventDefault();
        }
        if(checkEl.current.checked === true) 
        {setViewCaution(!viewCaution)}
    }

    const history = useHistory();

    return(
        <PopupContainer>
                <CloseBtnBox onClick={()=>{history.goBack()}}>
                    <CloseBtn>X</CloseBtn>
                </CloseBtnBox>
                <PopupArticle>
                    <PopupTitle>{t('Precaution')}</PopupTitle>
                    <PopupSubtitle>{t('Copy_Notice_01')}</PopupSubtitle>
                    <PopupPara> 
                        - {t('Copy_Notice_01_Content')}
                    </PopupPara>
                    <PopupSubtitle>{t('Copy_Notice_02')}</PopupSubtitle>
                    <PopupPara>
                        - {t('Copy_Notice_02_Content')}
                    </PopupPara>
                    <PopupSubtitle>{t('Copy_Notice_03')}</PopupSubtitle>
                    <PopupPara>
                        - {t('Copy_Notice_03_Content')}
                    </PopupPara>
                </PopupArticle>
                <CautionPopup>
                    <PopupPara>
                         <StrongText>{t('Copy_Notice_04')[0]}</StrongText> {AuthorId} {contentsTitle} {t('Copy_Notice_04')[1]}<RedText>{usedAl}</RedText>{t('Copy_Notice_04')[2]}
                    </PopupPara>
                </CautionPopup>
                <CheckBoxLabel htmlFor="agreement"><CheckBox ref={checkEl} type="checkbox" name="agreement" id="agreement"/>{t('Read_Agree')}</CheckBoxLabel>
                <ScrapBtn onClick={closePopup}>{t('Take_Good')[0]}</ScrapBtn>
            </PopupContainer>
    )
}

const PopupContainer = styled.div`
    position:absolute;
    display:block;
    top: 45px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #999;
    color:#fff;
    text-align: center;
    padding:1rem 0;
    z-index: 3;

    @media (min-width: 480px){
        top: 60px;
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
const CautionPopup = styled.article`
    background-color: #c8c7c7;
    text-align: center;
    margin: 1rem;
    margin-bottom: 100px;
    padding: 1.5em 1em;
    @media (min-width: 480px){
        margin: 2rem 4rem;
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
    font-size: 0.75em;
    padding-bottom:1em;
    line-height:1.3;
    text-align: left;
`;
const StrongText = styled.strong`
    font-weight: bold;
`;
const RedText = styled.span`
    color: red;
    font-weight: bold;
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
const ScrapBtn = styled.button`
    display: block;
    cursor: pointer;
    margin: 1rem auto;
    background-color: #fefefe;
    color: #333;
    font-size: 0.75rem;
    font-weight: bold;
    border-radius: 1rem;
    border:1px solid #ababab;
    padding: 0.5em 2em;
`;

export default ScrapCaution;