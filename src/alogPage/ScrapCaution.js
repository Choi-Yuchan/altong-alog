import { useRef } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router';

const ScrapCaution = ({viewCaution, setViewCaution}) => {
    const checkEl = useRef()
    const AuthorId = "순자러버"
    const contentsTitle = `'알통은 무엇인가? 그것에 대해 알아봅시다.'` // 해당 컨텐츠 타이틀
    const usedAl = 300

    const closePopup = (e) => {
        if(checkEl.current.checked === false){
            window.alert("동의하기를 체크해주세요!");
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
                    <PopupTitle>퍼가기 전 유의사항</PopupTitle>
                    <PopupSubtitle>1) 저작권 유의사항</PopupSubtitle>
                    <PopupPara> 
                        - 회원이 제작하여 알록달록에 게제한 게시물의 지식재산권 등의 권리는 해당 게시물을 게제한 회원에게 있으며, 알을 주고 구매했다 하더라도
                        저작권 자체를 구매 한 것은 아니므로, 저작권자의 명시적 동의 없이 타인의 저작물 전부 또는 일부를 복제, 배포, 전송 등의 방법으로 이용하는 것은
                        저작권자의 권리를 침해하는 행위이므로 적발 시 저작권법 위반으로 처벌받을 수 있습니다. 
                    </PopupPara>
                    <PopupSubtitle>2) 최초 수정 후</PopupSubtitle>
                    <PopupPara>
                       만일 원작자가 최초 '알록'글을 수정한다면 나의 '달록'글은 수정되었다는 알림과 동시에 <RedText>자동</RedText>으로 수정된 내용으로 업데이트됩니다.
                    </PopupPara>
                    <PopupSubtitle>3) 제재</PopupSubtitle>
                    <PopupPara>
                        저작권법, 알통 이용약관에 의해 부적절한 게시물은 언제든지 ㈜알통에 의해 삭제 처리될 수 있으며, 향후 활동에 불이익이 있을 수 있습니다.
                    </PopupPara>
                </PopupArticle>
                <CautionPopup>
                    <PopupPara>
                         <StrongText>원 저작물</StrongText> {AuthorId} {contentsTitle} 해당 글을 퍼갈 시 <RedText>{usedAl}알</RedText>이 차감 되며, 원 저작물이 수정 되지 않는 한
                        환불 하실 수 없습니다. 정말 퍼가시겠습니까?
                    </PopupPara>
                </CautionPopup>
                <CheckBoxLabel for="agreement"><CheckBox ref={checkEl} type="checkbox" name="agreement"/>모든 내용을 이해하였으며, 이에 동의합니다.</CheckBoxLabel>
                <ScrapBtn onClick={closePopup}>퍼가기</ScrapBtn>
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