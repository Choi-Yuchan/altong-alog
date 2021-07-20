import { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';

const EditCaution = ({showWritingEdit, setShowWritingEdit}) => {

    const {t} = useTranslation();
    const checkEl = useRef();
    const history = useHistory();

    const closePopup = (e) => {
        if(checkEl.current.checked === false){
            window.alert(t('Please_Check'));
            e.preventDefault();
        }
        if(checkEl.current.checked === true) 
        {setShowWritingEdit(!showWritingEdit)}
    }

    return(
        <PopupContainer>
                <CloseBtnBox onClick={() => {history.goBack()}}>
                    <CloseBtn>X</CloseBtn>
                </CloseBtnBox>
                <PopupArticle>
                    <PopupTitle>{t('Change_Revision')}</PopupTitle>
                    <PopupSubtitle>{t('Change_Notice_01')}</PopupSubtitle>
                    <PopupPara> 
                        {t('Change_Notice_01_Content')[0]}<RedText>{t('Change_Notice_01_Content')[1]}</RedText>{t('Change_Notice_01_Content')[2]}
                    </PopupPara>
                    <PopupSubtitle>{t('Change_Notice_02')}</PopupSubtitle>
                    <PopupPara>
                        {t('Change_Notice_02_Content')}
                    </PopupPara>
                    <PopupSubtitle>{t('Change_Notice_03')}</PopupSubtitle>
                    <PopupPara>
                        {t('Change_Notice_03_Content')}
                    </PopupPara>
                    <PopupSubtitle>{t('Change_Notice_04')}</PopupSubtitle>
                    <PopupPara>
                        {t('Change_Notice_04_Content')}
                    </PopupPara>
                </PopupArticle>

                <CheckBoxLabel> <CheckBox ref={checkEl} type="checkbox"/>{t('Read_Agree')}</CheckBoxLabel>
                <EditBtn to="/writing" onClick={closePopup}>{t('Modify')}</EditBtn>
            </PopupContainer>

    )
}

const PopupContainer = styled.div`
    position:absolute;
    display:block;
    top: 45px;
    left: 0;
    width:100%;
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
const EditBtn = styled(Link)`
    display: block;
    width: 50px;
    margin: 1rem auto;
    background-color: #fefefe;
    color: #333;
    font-size: 0.75rem;
    font-weight: bold;
    border-radius: 1rem;
    border:1px solid #ababab;
    padding: 0.5em 2em;
`;

export default EditCaution;