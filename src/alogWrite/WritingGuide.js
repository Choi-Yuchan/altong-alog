import styled from 'styled-components'

const WritingGuide = () => {
    return(
        <PopupContainer>
                <CloseBtnBox>
                    <CloseBtn>X</CloseBtn>
                </CloseBtnBox>
                <PopupArticle>
                    <PopupTitle>I. 이용안내</PopupTitle>
                    <PopupSubtitle>1) 알록달록 서비스 운영정책</PopupSubtitle>
                    <PopupPara> 
                        알록달록 서비스에 관한 제반 사항은 본 '알록달록 서비스 운영 정책'에서 별도의 언급이 
                        없는 한 ㈜알통 이용약관을 따릅니다. 알록달록 서비스 운영정책은 ㈜알통 이용약관에 
                        동의하고 회원 가입한 ㈜알통 회원(이하 '회원')이 블로그 서비스를 이용함에 유의사항과
                        관련 법령 또는 ㈜알통 이용약관과 게시물 운영정책 등에 반하는 부적절한 활동에 대한 
                        ㈜알통의 조치를 규정하는 것을 목적으로 합니다.
                    </PopupPara>
                    <PopupSubtitle>2) 알록달록 이용안내</PopupSubtitle>
                    <PopupPara>
                        ㈜알통의 알록달록 서비스는 글을 쓰는 사람, 글을 보는 사람들 모두의 활동에 수익과
                        공감 나눔을 할 수 있는 공간으로, 유저들의 모든 활동을 지지하는 서비스입니다.
                        <PopupSentence>1. 무슨 글이든 자신의 마음속의 말들을 글로 표현하고, 가치를 불어넣어 주세요.</PopupSentence>
                        <PopupSentence>2. 남이 쓴 글에 대한 공감과 댓글만으로도 상대방뿐만 아니라 나에게도 이익이 돌아옵니다.</PopupSentence>
                        <PopupSentence>3. 알록달록의 이용자는 에티켓을 준수해야 합니다. 서로의 활동이 서로에게 도움이 되는 만큼,
                            성숙한 활동 문화가 깨끗하고 질 높은 알록달록을 만듭니다.
                        </PopupSentence>
                        <PopupSentence>4. 이익을 위해 부적절한 게시물은 삼가주세요. 관리자에 의해 제재를 받을 수 있습니다.</PopupSentence>
                        <PopupSentence>5. 그저 숫자를 늘리기 위한 무성의하거나 타인에게 불쾌감을 주는 행위를 삼가주세요.</PopupSentence>
                        <PopupSentence>6. 부적절한 게시물은 신고해주세요. 모니터링 후 더 수준 높은 알록달록을 위해 조치를 취하겠습니다.</PopupSentence>
                    </PopupPara>
                </PopupArticle>
                <PopupArticle>
                    <PopupTitle>II. 저작권 관련 주의사항</PopupTitle>
                    <PopupPara>
                        - 회원이 제작하여 알록달록에 게제한 게시물의 지식재산권 등의 관리는 해당 게시물을 게제한 회원에게 있으며, 게시물 게제로 회원은
                        ㈜알통에 저장, 복제, 수정, 공중 송신, 전시, 배포 등의 이용 권한을 부여하게 되므로 회원은 이에 필요한 권리를 보유하고 있어야 합니다. 
                    </PopupPara>
                    <PopupPara>
                        - 회원은 알록달록 관리 기능을 통해 본인의 게시물에 대한 삭제, 비공개 처리를 할 수 있고 타인의 이용 또는 접근을 통제할 수 있습니다. 또한,
                        회원은 언제든지 고객센터를 통해 게시물의 삭제, 비공개, 검색결과 제외 등 조치를 요청할 수 있습니다.
                    </PopupPara>
                    <PopupPara>
                        - 회원은 타인의 저작권을 포함한 지식재산권 및 기타 권리를 침해해서는 안 됩니다. 만일 이와 같은 내용의 게시물 때문에 발생하는 결과에 관한
                        모든 책임은 회원 본인에게 있습니다.
                    </PopupPara>
                    <PopupPara>
                        - 저작권자의 명시적 동의 없이 타인의 저작물을 전재(轉載)하는 것은 저작권 침해 행위이므로 알록달록에서는 이와 같은 불법적인 저작물 게제를 
                        엄격히 금지하고 있습니다.
                    </PopupPara>
                    <PopupPara>
                        - 회원은 알록달록 서비스를 이용함으로써 얻은 정보라고 하더라도 마음대로 사용할 수 없으며, 복제, 공중 송신, 출판, 전송, 배포, 방송 기타
                        방법에 따라 이용하고자 할 경우에는 반드시 권리자의 명시적 동의를 얻은 뒤 사용해야 합니다.
                    </PopupPara>
                </PopupArticle>
                <CheckBoxLabel> <CheckBox type="checkbox"/>모든 내용을 이해하였으며, 이에 동의합니다.</CheckBoxLabel>
                <StartBtn>알록달록 시작하기</StartBtn>
            </PopupContainer>

    )
}

const PopupContainer = styled.div`
    position:absolute;
    display:none;
    top: 45px;
    left: 0;
    width:100%;
    height:100%;
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
    display:inline-block;
    font-size: 0.75em;
    padding-bottom:1em;
    line-height:1.3;
    text-align: left;
`;
const PopupSentence = styled(PopupPara)`
    padding-bottom:0;
    :first-child{
        padding-top: 1rem;
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
const StartBtn = styled.button`
    display: block;
    cursor: pointer;
    margin: 1rem auto;
    background-color: #fefefe;
    color: #333;
    font-size: 0.75rem;
    font-weight: bold;
    border-radius: 1rem;
    border:1px solid #ababab;
    padding: 2px 8px;
`;

export default WritingGuide;