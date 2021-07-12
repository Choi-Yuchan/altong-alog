import { useRef } from 'react';
import styled from 'styled-components'

const EditCaution = ({showWritingEdit, setShowWritingEdit}) => {
    const checkEl = useRef();

    const closePopup = () => {
        if(checkEl.current.checked === false){
            return window.alert("동의하기를 체크해주세요!");
        }
        if(checkEl.current.checked === true) 
        {setShowWritingEdit(!showWritingEdit)}
    }

    return(
        <PopupContainer>
                <CloseBtnBox>
                    <CloseBtn>X</CloseBtn>
                </CloseBtnBox>
                <PopupArticle>
                    <PopupTitle>수정 전 주의사항</PopupTitle>
                    <PopupSubtitle>1) 수정시 지불 금액</PopupSubtitle>
                    <PopupPara> 
                        ㈜알통은 원작자의 무분별한 글 수정을 방지하기 위해 1회 수정당 <RedText>100알</RedText>을 차감하고 있습니다.
                    </PopupPara>
                    <PopupSubtitle>2) 최초 수정 후 환불조치</PopupSubtitle>
                    <PopupPara>
                        ㈜알통은 고객이 어떤 이유에서든 구매한 글에 만족하지 않을 경우 <RedText>환불</RedText>을 보장해 드립니다. 대부분의 달록글에
                        대해서는 이 환불 정책이 적용됩니다. 수정이 최초 1회 발생 할 시, 다른 퍼간 회원으로 하여금 달록글에 대하여 환불 조치가 
                        발생할 수 있습니다. 그러니 수정을 하실 때는 신중하게 부탁드립니다.
                    </PopupPara>
                    <PopupSubtitle>3) 제재</PopupSubtitle>
                    <PopupPara>
                        타당한 이유 없이 계속 반복하여 글이 수정될 경우 이 또한 ㈜알통 정책에 따라 제재 되며, 활동 시 불이익을 받을 수 있습니다.
                    </PopupPara>
                    <PopupSubtitle>4) 글 수정 후</PopupSubtitle>
                    <PopupPara>
                        나의 '알록'글을 퍼간 사람이 있을 경우, 퍼간 사람의 글 또한 자동으로 알림과 동시에 수정된 내용으로 업데이트됨을 유의하여 주세요.
                    </PopupPara>
                </PopupArticle>

                <CheckBoxLabel> <CheckBox ref={checkEl} type="checkbox"/>모든 내용을 이해하였으며, 이에 동의합니다.</CheckBoxLabel>
                <EditBtn onClick={closePopup}>수정하기</EditBtn>
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
const EditBtn = styled.button`
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

export default EditCaution;