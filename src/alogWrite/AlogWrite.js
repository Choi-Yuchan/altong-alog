import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import AlogWriteEditor from './AlogWriteEditor';

function AlogWrite() {
    const title = '알록달록 글쓰기';
    const option = [
        {
            id:1,
            img: '02',
            name: '배움'
        },
        {
            id:2,
            img: '03',
            name: '생활'
        },
        {
            id:3,
            img: '04',
            name: '건강'
        },
        {
            id:4,
            img: '05',
            name: '고민'
        },
        {
            id:5,
            img: '06',
            name: '문예'
        },
        {
            id:6,
            img: '07',
            name: '세상'
        },
        {
            id:7,
            img: '08',
            name: '돈'
        },
        {
            id:8,
            img: '09',
            name: '컴/폰'
        },
        {
            id:9,
            img: '10',
            name: '스포츠'
        },
        {
            id:10,
            img: '11',
            name: '게임'
        },
    ];
    const folder = ["전체","여행, 그 모든 것", "축구이야기","맛집"];
    const selectDfault = { select1: "그룹명", select2: "카테고리"};
    const textContent = { titleText: '제목', worth: '가치', money: '알', save: '등록하기', bgEdit: "배경설정"};

    const [ oplist, setOplist] = useState(false);
    const [ oplist2, setOplist2] = useState(false);
    const onClick = () => {
        if (oplist === true) {
            setOplist(false);
        } else {
            setOplist(true);
        }
    };
    const onClick2 = () => {
        if (oplist2 === true) {
            setOplist2(false);
        } else {
            setOplist2(true);
        }
    };

    const [check, setCheck] = useState(selectDfault.select1);

    const [select, setSelect] = useState(selectDfault.select2);
    const [select2, setSelect2] = useState('');
    const [showInfo, setShowInfo] = useState(false);


    return (
        <WriteDiv>
            {/* //PopupContainer는 유저가 처음 방문일 때만 띄우도록 설정해야함.*/}
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

            <WriteTitle>{title}</WriteTitle>
            <WriteSettingBox>
                <WriteSettingBoxTop>
                    <WriteContent>
                        <WriteSelect onClick={onClick}>
                            {check}
                            <DownIcon></DownIcon>
                        </WriteSelect>
                        <WriteOptionBox oplist={oplist}>
                            {folder.map(group => 
                            <WriteOption value={group} onClick={ () => {setCheck(group); setOplist(false);}}>{group}</WriteOption>
                                )}
                        </WriteOptionBox>
                    </WriteContent>
                    <WriteContent>
                        <WriteSelect onClick={onClick2}>
                            <WriteSpan>
                                {select2 === '' ? null: <OptionIcon src={process.env.PUBLIC_URL + '/images/category/category' + select2 + '_off.svg'}></OptionIcon>}
                                {select}
                            </WriteSpan>
                            <DownIcon></DownIcon>
                        </WriteSelect>
                        <WriteOptionBox oplist={oplist2}>
                            {option.map(opt => 
                            <WriteOption value={opt.name} onClick={ () => {setSelect(opt.name); setSelect2(opt.img); setOplist2(false);}}>
                                <OptionIcon src={process.env.PUBLIC_URL + '/images/category/category' + opt.img + '_off.svg'}></OptionIcon>
                                {opt.name}
                            </WriteOption>
                            )}
                        </WriteOptionBox>
                    </WriteContent>
                    <BackgroundBtn>{textContent.bgEdit}</BackgroundBtn>
                </WriteSettingBoxTop>
                <WriteSettingBoxBottom>
                    <LanguageSelect>
                        <LanguageOption value="">-- Select one --</LanguageOption>
                        <LanguageOption value="korean">한국어</LanguageOption>
                        <LanguageOption value="English">English</LanguageOption>
                    </LanguageSelect>
                    <GuideLanguage>
                        사용 언어를 선택해주세요.
                    </GuideLanguage>
                </WriteSettingBoxBottom>
            </WriteSettingBox>
            <WriteTitleInput type='text' placeholder={textContent.titleText}/>
            <EditorBox>
                <AlogWriteEditor />
            </EditorBox>
            <WorthBox>
                    <QueIcon onClick = {() => setShowInfo(!showInfo)}>
                        <ValueInfo show={showInfo}> 
                            내 글의 가치를 부여하고, 판매 해 보세요.<br/>
                            원글이 퍼가기 된 후에는 가치 수정이 불가능합니다.
                        </ValueInfo>
                        ?
                    </QueIcon>
                <WorthSpan>{textContent.worth}</WorthSpan>
                <WorthInput
                type="number"
                min="0"
                max="100000"
                placeholder="0 ~ 100,000"
                step="100"
                ></WorthInput>
                <WorthSpan>{textContent.money}</WorthSpan>
            </WorthBox>
            <WriteBtn>{textContent.save}</WriteBtn>
        </WriteDiv>
    );
}
const LanguageSelect = styled.select`
    width: 100px;
    margin-left: 1rem;
    padding: 0.25em 0.5em;
    font-size: 0.625rem;

    @media (min-width: 480px){
        width: 150px;
        font-size: 0.875rem;
    }
`;
const LanguageOption = styled.option`
`;
const GuideLanguage = styled.p`
    margin-left: 1rem;

    @media (min-width: 480px){
        font-size: 0.875rem;
    }
`;
const ValueInfo = styled.div`
    width: 240px;
    display: ${props => props.show === true ? "block" : "none"};
    position: absolute;
    bottom: 2rem;
    left: -1rem;
    font-size: 0.625rem;
    border: 1px solid #ababab;
    border-radius: 1rem;
    background-color: #fff;
    padding: 5px;
    @media (min-width: 480px){
        width: 300px;
        font-size: 0.75rem;
    }
`;
const PopupContainer = styled.div`
    position:absolute;
    display:none;
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
    border:1px solid black;
    padding: 2px 8px;
`;
const slideDown = keyframes`
    from {
        height:0;
        transform:scaleY(0);
    }
    to {
        height:auto;
        transform:scaleY(1);
    }
`;
const slideUp = keyframes`
    from {
        height:auto;
        transform:scaleY(1);
    }
    to {
        height:0;
        transform:scaleY(0);
    }
`;
const WriteDiv = styled.div`
    width:95%;
    max-width:800px;
    margin:0 auto;
    padding-bottom: 50px;
`;
const WriteTitle = styled.p`
    font-size:1.125rem;
    text-align:center;
    font-weight:bold;
    color:#707070;
    margin:1.875rem 0 1.5rem;

    @media (min-width:480px) {
        font-size:1.375rem;
    }
`;
const WriteSettingBox = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    margin-bottom:1.25rem;
    `;
const WriteSettingBoxTop = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;
const WriteSettingBoxBottom = styled(WriteSettingBoxTop)`
    font-size: 0.75rem;
    margin: 0.75rem auto;
    justify-content: flex-start;
    
    @media (min-width: 760px){
        margin: 1rem auto;
    } 
`;
const WriteContent = styled.div`
    position:relative;
    @media (min-width: 480px){
        width: 30%;
    }
`;
const WriteSelect = styled.p`
    width:100%;
    border:1px solid #ababab;
    cursor: pointer;
    padding:0.325rem 0.625rem;
    box-sizing:border-box;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    font-size:0.75rem;
    font-weight: bold;
    color:#707070;
    @media (min-width: 480px){
        font-size: 0.875rem;
        padding: 0.75rem 0.875rem;
    }
`;
const DownIcon = styled.i`
    display:block;
    width:0.625rem;
    height:0.625rem;
    box-sizing:border-box;
    margin-left:1rem;
    border-left:2px solid #707070;
    border-bottom:2px solid #707070;
    transform:rotate(-45deg);
`;
const WriteOptionBox = styled.ul`
    width:100%;
    position:absolute;
    top:100%;
    left:0;
    border:1px solid #ababab;
    border-top: none;
    border-bottom: none;
    box-sizing: border-box;
    background: #fff;
    z-index:9;
    transition:all 0.3s;
    transform-origin: center top;
    height:0;
    font-weight: bold;
    transform:scaleY(0);

    animation-duration: 0.2s;
    animation-timing-function: ease-out;
    animation-name: ${(props) => props.oplist === true ? slideDown : slideUp};
    animation-fill-mode: forwards;
`;
const WriteOption = styled.li`
    width: 100%;
    cursor: pointer;
    padding:0.35rem 0.625rem;
    display:flex;
    flex-direction:row;
    align-items:center;
    transition:all 0.3s;
    box-sizing:border-box;
    font-size:0.75rem;
    color:#707070;
    border-bottom:1px solid #ababab;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
        background:#eee;
    }

    @media (min-width: 480px){
        font-size: 0.875rem;
        padding: 0.75rem 0.875rem;
    }
`;
const OptionIcon = styled.img`
    display:block;
    width:1rem;
    margin-right:0.625rem;
`;
const BackgroundBtn = styled.button`
    background: none;
    border: 1px solid #ababab;
    color: #707070;
    padding: 0.25rem 0.625rem;
    font-size: 0.75rem;
    font-weight: bold;
    
    @media (min-width: 480px){
        width: 20%;
        padding: 0.75rem 0.825rem;
        font-size: 0.875rem;
    }
`;
const WriteSpan = styled.span`
    display:flex;
    font-size: 0.75rem;
    @media (min-width:480px){
        font-size: 0.875rem;
    }
`;

const WriteTitleInput = styled.input`
    display:block;
    margin:0 auto 1.25rem;
    padding: 0.5em 0;
    border: none;
    border-bottom: 1px solid #707070;
    width:90%;
    font-size: 1rem;
    outline: none;
`;
const EditorBox = styled.div`
    width:100%;
    @media (min-width: 480px){
        margin-bottom: 50px;
    }
`;
const WorthBox = styled.div`
    margin:5rem 0 2.5rem;
    display:flex;
    justify-content: center;
    align-items: center;

    @media (min-width:480px) {
        margin:1.25rem 0;
    }
`;
const WorthSpan = styled.span`
    font-size:0.9375rem;
    font-weight: bold;
    color:#707070;
`;
const QueIcon = styled.i`
    display: block;
    position: relative;
    width: 1.2rem;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    margin-right: 0.5rem;
    color: #707070;
    border: 1px solid #ababab;
    border-radius: 50%;
    cursor: pointer;
`;
const WorthInput = styled.input`
    margin:0 0.625rem;
    font-size:1rem;
    border:0;
    border-bottom:1px solid #707070;
    width:8.125rem;
    text-align:center;
    outline:none;

    &::placeholder {
        color:#bbb;
        text-align:center;
    }
`;
const WriteBtn = styled.button`
    display:block;
    width:100%;
    margin:0 auto;
    border:2px solid #ababab;
    padding: 10px 20px;
    background:#fff;
    border-radius:20px;
    font-size:0.9375rem;
    font-weight:bold;
    color:#666;
    outline:none;
    cursor:pointer;
    transition:all 0.3s;

    &:hover {
        background:#666;
        color:#fff;
    }

    @media (min-width: 480px){
        width: 35%;
    }
`;


export default AlogWrite;