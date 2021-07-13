import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import AlogWriteEditor from '../alogWrite/AlogWriteEditor';
import WritingGuide from '../alogWrite/WritingGuide';

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
    const [showGuide, setShowGuide] = useState(false); // 처음 게시글 작성을 할 경우 보여줘야 하는 팝업 상태

    return (
        <WriteDiv>
            {/* //WritingGuide popup은 유저가 처음 방문일 때만 띄우도록 설정해야함.*/}
            {showGuide === true &&
                <WritingGuide setShowGuide={setShowGuide} showGuide={showGuide}/>
            }

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