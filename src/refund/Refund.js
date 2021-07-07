import styled from 'styled-components'

const Refund = () => {
    const refundReasonList = ["저작권 위반", "유해성", "장난성", "중복성", "비속어/반말", "비 정보 지식", "음해/비방", "기타"]
    return(
        <PopupContainer>
                <CloseBtnBox>
                    <CloseBtn>X</CloseBtn>
                </CloseBtnBox>
                <PopupArticle>
                    <PopupTitle>I. 환불 전 주의사항</PopupTitle>
                    <PopupSubtitle>1) 환불 금액</PopupSubtitle>
                    <PopupPara> 
                        달록 글을 환불 할 때는 공정거래위원회의 소비자분쟁 해결 기준에 의거 수수료 10%를 공제한 후 총 90% 금액만 환급이 진행됩니다.
                    </PopupPara>
                    <PopupSubtitle>2) 환불 방법</PopupSubtitle>
                    <PopupPara>
                        퍼온 저작물(달록)의 환불은 원 저작물이 수정될 경우 저작물 상단 오른쪽 아이콘 내의 '환불'을 눌러 진행하실 수 있으며, 환불 요청된
                        글은 요청 즉시 환급이 진행됩니다. 24시간 이내 처리되지 않을 시 고객센터를 통해 문의 부탁드립니다.
                    </PopupPara>
                </PopupArticle>
                <RefundForm>
                    <PopupTitle>II. 환불 사유 선택</PopupTitle>
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
                        <ReasonText type="text" placeholder="남기실 말씀이 있으면 입력해주세요."/>
                    </TextBox>
                    <CheckBoxLabel><CheckBox type="checkbox"/>모든 내용을 이해하였으며, 이에 동의합니다.</CheckBoxLabel>
                    <RefundBtn>환불신청</RefundBtn>
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