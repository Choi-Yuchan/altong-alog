import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import AlogWriteEditor from './AlogWriteEditor';

const langWritText = {
    ko:{
        title: '알록달록 글쓰기',
        option: [
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
        ],
        folder: ["전체","여행, 그 모든 것", "축구이야기","맛집"],
        selectDfault:{
            select1: "폴더명",
            select2: "카테고리 설정"
        },
        otherText:{
            titleText: '제목',
            worth: '가치',
            money: '알',
            save: '등록하기'
        }
    }
}

function AlogWrite() {
    const title = langWritText.ko.title;
    const option = langWritText.ko.option;
    const folder = langWritText.ko.folder;
    const selectDfault = langWritText.ko.selectDfault;
    const otherText = langWritText.ko.otherText;

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



    return (
        <WriteDiv>
            <WriteTitle>{title}</WriteTitle>
            <WriteSettingBox>
                <WriteContent>
                    <WriteSelect onClick={onClick}>
                        {check}
                        <DownIcon></DownIcon>
                    </WriteSelect>
                    <WriteOptionBox oplist={oplist}>
                        <WriteOption onClick={ () => {setCheck(folder[0]); setOplist(false);}}>{folder[0]}</WriteOption>
                        <WriteOption onClick={ () => {setCheck(folder[1]); setOplist(false);}}>{folder[1]}</WriteOption>
                        <WriteOption onClick={ () => {setCheck(folder[2]); setOplist(false);}}>{folder[2]}</WriteOption>
                        <WriteOption onClick={ () => {setCheck(folder[3]); setOplist(false);}}>{folder[3]}</WriteOption>
                        <WriteOption onClick={ () => {setCheck(folder[4]); setOplist(false);}}>{folder[4]}</WriteOption>
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
                        <WriteOption onClick={ () => {setSelect(option[0].name); setSelect2(option[0].img); setOplist2(false);}}>
                            <OptionIcon src={process.env.PUBLIC_URL + '/images/category/category' + option[0].img + '_off.svg'}></OptionIcon>
                            {option[0].name}
                        </WriteOption>
                        <WriteOption onClick={ () => {setSelect(option[1].name); setSelect2(option[1].img); setOplist2(false);}}>
                            <OptionIcon src={process.env.PUBLIC_URL + '/images/category/category' + option[1].img + '_off.svg'}></OptionIcon>
                            {option[1].name}
                        </WriteOption>
                        <WriteOption onClick={ () => {setSelect(option[2].name); setSelect2(option[2].img); setOplist2(false);}}>
                            <OptionIcon src={process.env.PUBLIC_URL + '/images/category/category' + option[2].img + '_off.svg'}></OptionIcon>
                            {option[2].name}
                        </WriteOption>
                        <WriteOption onClick={ () => {setSelect(option[3].name); setSelect2(option[3].img); setOplist2(false);}}>
                            <OptionIcon src={process.env.PUBLIC_URL + '/images/category/category' + option[3].img + '_off.svg'}></OptionIcon>
                            {option[3].name}
                        </WriteOption>
                        <WriteOption onClick={ () => {setSelect(option[4].name); setSelect2(option[4].img); setOplist2(false);}}>
                            <OptionIcon src={process.env.PUBLIC_URL + '/images/category/category' + option[4].img + '_off.svg'}></OptionIcon>
                            {option[4].name}
                        </WriteOption>
                        <WriteOption onClick={ () => {setSelect(option[5].name); setSelect2(option[5].img); setOplist2(false);}}>
                            <OptionIcon src={process.env.PUBLIC_URL + '/images/category/category' + option[5].img + '_off.svg'}></OptionIcon>
                            {option[5].name}
                        </WriteOption>
                        <WriteOption onClick={ () => {setSelect(option[6].name); setSelect2(option[6].img); setOplist2(false);}}>
                            <OptionIcon src={process.env.PUBLIC_URL + '/images/category/category' + option[6].img + '_off.svg'}></OptionIcon>
                            {option[6].name}
                        </WriteOption>
                        <WriteOption onClick={ () => {setSelect(option[7].name); setSelect2(option[7].img); setOplist2(false);}}>
                            <OptionIcon src={process.env.PUBLIC_URL + '/images/category/category' + option[7].img + '_off.svg'}></OptionIcon>
                            {option[7].name}
                        </WriteOption>
                        <WriteOption onClick={ () => {setSelect(option[8].name); setSelect2(option[8].img); setOplist2(false);}}>
                            <OptionIcon src={process.env.PUBLIC_URL + '/images/category/category' + option[8].img + '_off.svg'}></OptionIcon>
                            {option[8].name}
                        </WriteOption>
                        <WriteOption onClick={ () => {setSelect(option[8].name); setSelect2(option[8].img); setOplist2(false);}}>
                            <OptionIcon src={process.env.PUBLIC_URL + '/images/category/category' + option[9].img + '_off.svg'}></OptionIcon>
                            {option[9].name}
                        </WriteOption>
                    </WriteOptionBox>
                </WriteContent>
                <WriteLabel>
                    <WriteLabelImg src={process.env.PUBLIC_URL + '/images/fileUpload.png'}></WriteLabelImg>
                    <WriteFileInput type="file"></WriteFileInput>
                </WriteLabel>
            </WriteSettingBox>
            <WriteTitleInput type='text' placeholder={otherText.titleText}></WriteTitleInput>
            <EditorBox>
                <AlogWriteEditor />
            </EditorBox>
            <WorthBox>
                <WorthSpan>{otherText.worth}</WorthSpan>
                <WorthInput
                    type="number"
                    min="0"
                    max="100000"
                    placeholder="0~100,000"
                    step="100"
                ></WorthInput>
                <WorthSpan>{otherText.money}</WorthSpan>
            </WorthBox>
            <WriteBotton>{otherText.save}</WriteBotton>
        </WriteDiv>
    );
}
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
    flex-direction:row;
    justify-content:center;
    align-items:center;
    margin-bottom:1.25rem;
    `;
const WriteContent = styled.div`
    width:9rem;
    position:relative;
    margin-left:0.9375rem;
`;
const WriteSelect = styled.p`
    width:100%;
    border:1px solid #333;
    cursor:pointer;
    padding:0.3125rem 0.625rem;
    box-sizing:border-box;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    font-size:0.875rem;
    color:#707070;
`;
const DownIcon = styled.i`
    display:block;
    width:0.625rem;
    height:0.625rem;
    box-sizing:border-box;
    border-left:2px solid #707070;
    border-bottom:2px solid #707070;
    transform:rotate(-45deg);
`;
const WriteOptionBox = styled.ul`
    width:100%;
    position:absolute;
    top:100%;
    left:0;
    border:1px solid #333;
    box-sizing:border-box;
    background:#fff;
    z-index:9;
    transition:all 0.3s;
    transform-origin: center top;
    height:0;
    transform:scaleY(0);

    animation-duration: 0.2s;
    animation-timing-function: ease-out;
    animation-name: ${(props) => props.oplist === true ? slideDown : slideUp};
    animation-fill-mode: forwards;
`;
const WriteOption = styled.li`
    cursor:pointer;
    padding:0.3125rem 0.625rem;
    display:flex;
    flex-direction:row;
    align-items:center;
    transition:all 0.3s;
    box-sizing:border-box;
    font-size:0.875rem;
    color:#707070;

    &:hover {
        background:#eee;
    }
`;
const OptionIcon = styled.img`
    display:block;
    width:1rem;
    margin-right:0.625rem;
`;
const WriteLabel = styled.label`
    margin-left:0.9375rem;
    cursor:pointer;
`;
const WriteFileInput = styled.input`
    display:none;
`;
const WriteSpan = styled.span`
    display:flex;
`;
const WriteLabelImg = styled.img`
    display:block;
    width: 1.8rem;
`;
const WriteTitleInput = styled.input`
    display:block;
    margin:0 auto;
    margin-bottom:1.25rem;
    border:0;
    border-bottom:1px solid #707070;
    width:90%;
    font-size:1rem;
    outline:none;
`;
const EditorBox = styled.div`
    width:100%;
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
    color:#707070;
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
const WriteBotton = styled.button`
    display:block;
    width:100%;
    max-width:720px;
    margin:0 auto 50px;
    border:1px solid #999;
    height:35px;
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
`;


export default AlogWrite;