import React, { useState } from 'react';
import styled from 'styled-components';
import AlogDalogList from '../components/AlogDalogList';
import AlogProfileSetting from '../profileSetting/AlogProfileSetting';
import MyAlogGroupMove from './MyAlogGroupMove';

function NewGroupPopup({setNewGroup, sample, checkList, myMainAlogSlide, opened, setOpened , bgSetting , setBgSetting, setShowNewGroup, setShowBgEdit}) {

    const [mySettingSearchOption, setMySettingSearchOption] = useState(false); //설정하기에서 게시글, 그룹 검색 옵션
    const [mySelect, setMySelect] = useState('게시글'); // 검색 옵션 선택
    const [mySlideConfirm, setMySlideConfirm] = useState(false); //대문글 설정 팝업
    const [myAlogDelete, setMyAlogDelete] = useState(false); //설정하기에서 삭제 클릭 시
    const [myAlogMove, setMyAlogMove] = useState(false); // 설정하기에서 이동 클릭 시
    const [myGroupExistence, setMyGroupExistence] = useState(true); // 나의 그룹 존재 유무

    const viewBgSetting = () => {
            setBgSetting(true);
            setOpened(true);
    }

    return (
        <>
        <NewGroupPopupWrap onClick={()=>{setNewGroup(false); setShowNewGroup(false)}}>
            <NewGroupPopupBox onClick={e=>e.stopPropagation()}>
                {myMainAlogSlide 
                ?   <GroupPopTitle>
                        설정화면
                        <div>
                            <span onClick={()=>{setMySlideConfirm(true); setMyAlogDelete(false);}}>대문글 설정</span>
                            <span onClick={()=>{setMySlideConfirm(true); setMyAlogDelete(true);}}>삭제</span>
                            <span onClick={()=>{setMyAlogMove(true);}}>이동</span>
                        </div>
                    </GroupPopTitle>
                : <>
                    <GroupPopTitle>새 그룹 만들기 <span onClick={viewBgSetting}>배경설정</span></GroupPopTitle>
                    <GroupNameBox>그룹 명 <GroupNameInput type="text" /></GroupNameBox>
                </>
                }
                <MyAlogSearchDiv>
                {myMainAlogSlide &&
                    <MyAlogSelectDiv>
                        <SelectDefault onClick={()=>{setMySettingSearchOption(!mySettingSearchOption)}}>{mySelect}<i></i></SelectDefault>
                        <SelectList open={mySettingSearchOption}>
                            <SelectListEl onClick={()=>{setMySelect('게시글'); setMySettingSearchOption(false);}}>게시글</SelectListEl>
                            <SelectListEl onClick={()=>{setMySelect('그룹'); setMySettingSearchOption(false);}}>그룹</SelectListEl>
                        </SelectList>
                    </MyAlogSelectDiv>
                }
                    <MyAlogSearchInput type="text" placeholder="알록달록 게시글 내 검색"></MyAlogSearchInput>
                    <MyAlogSearchBtn>검색</MyAlogSearchBtn>
                </MyAlogSearchDiv>
                <MyAlogListBox>
                    {sample.map(list => 
                        <AlogDalogList 
                            key={list.id} 
                            backImg={list.backImg} 
                            title={list.title} 
                            profile={list.profile} 
                            nickname={list.nickname} 
                            time={list.time} 
                            view={list.view} 
                            reply={list.reply}
                            common={list.id}
                            checkList={checkList}
                        />
                    )}
                </MyAlogListBox>
                <SaveBtnBox>
                    <button>저장</button>
                    <button onClick={()=>{setNewGroup(false); setShowNewGroup(false)}}>취소</button>
                </SaveBtnBox>
            </NewGroupPopupBox>
        </NewGroupPopupWrap>
        {/* 배경설정 컴포넌트  */}
        {opened === true && bgSetting === true && <AlogProfileSetting setOpened={setOpened} bgSetting={bgSetting} setShowBgEdit={setShowBgEdit}/>}
        {/* 그룹생성 완료 시 팝업 <CompleteGroupPopup>새 그룹이 생성되었습니다.</CompleteGroupPopup> */}
        {mySlideConfirm &&
            <CompleteMySlideWrap onClick={()=>{setMySlideConfirm(false);}}>
                <SlideConfirmBox onClick={e=>e.stopPropagation()}>
                    {myAlogDelete
                        ? <>
                            <ConfirmText>정말 <span>삭제</span> 하시겠습니까?</ConfirmText>
                            <ContentsTitle>삭제 후에는 더이상 퍼가기 된 글에 대한<br />수익을 얻을 수 없습니다. 정말로 삭제 하시겠습니까?</ContentsTitle>
                            <ConfirmBtnBox>
                                <button>확인</button>
                                <button onClick={()=>{setMySlideConfirm(false);}}>취소</button>
                            </ConfirmBtnBox>
                        </>
                        : <>
                            <ContentsTitle>'알통을 알아보자...'</ContentsTitle>
                            <ContentsTitle>'강아지를 키워보자...'</ContentsTitle>
                            <ContentsTitle>'알통의 전반적인 운영...'</ContentsTitle>
                            <ContentsTitle>'알통 프로젝트 영원...'</ContentsTitle>
                            <ConfirmText>글을 <span>대문글</span>로 지정 하시겠습니까?</ConfirmText>
                            <ConfirmBtnBox>
                                <button>확인</button>
                                <button onClick={()=>{setMySlideConfirm(false);}}>취소</button>
                            </ConfirmBtnBox>
                        </>
                    }
                </SlideConfirmBox>
            </CompleteMySlideWrap>
        }
        {/* 그룹 이동하기 */}
        {myAlogMove && <MyAlogGroupMove existence={myGroupExistence} setMyAlogMove={setMyAlogMove} />}
        </>
    );
}

export default NewGroupPopup;

const NewGroupPopupWrap = styled.div`
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    z-index:9999;
`;
const NewGroupPopupBox = styled.div`
    background:#fff;
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width:95%;
    max-width:600px;
    border:1px solid #ccc;
    border-radius:10px;
    padding:10px 5px;
    box-sizing:border-box;
    z-index: 5;

    @media (min-width:480px) {
        width:80%;
        padding:20px;
    }
`;
const GroupPopTitle = styled.div`
    font-size:1rem;
    font-weight:bold;
    color:#707070;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:10px;

    @media (min-width:480px) {
        font-size:1.25rem;
        margin-bottom:20px;
    }

    span {
        font-size:12px;
        border:1px solid #999;
        border-radius:20px;
        padding:1px 5px;
        background:#eee;
        color:#666;
        cursor:pointer;
        margin-left:5px;
        box-sizing:border-box;

        @media (min-width:480px) {
            font-size:14px;
        }
    }
    div {
        box-sizing:border-box;
    }
`;
const GroupNameBox = styled.div`
    display:flex;
    justify-content:center;
    margin-bottom:10px;
    align-items:center;
    font-size:0.875rem;

    @media (min-width:480px) {
        font-size:0.75rem;
        margin-bottom:20px;
    }
`;
const GroupNameInput = styled.input`
    flex-grow:1;
    margin-left:10px;
    border:1px solid #999;
    height:18px;
    border-radius:5px;

    @media (min-width:480px) {
        height:25px;
    }
`;
const MyAlogSearchDiv = styled.div`
    width:100%;
    position:relative;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    margin-bottom:20px;
`;
const MyAlogSearchInput = styled.input`
    width:100%;
    max-width:200px;
    height:20px;
    padding-right:50px;
    border:1px solid #666;
    border-radius:3px;
    box-sizing:border-box;
    font-size:12px;

    @media (min-width:480px) {
        height:25px;
    }
`;
const MyAlogSearchBtn = styled.button`
    position:absolute;
    top:50%;
    right:5px;
    transform:translateY(-50%);
    border:1px solid #999;
    color:#707070;
    background:#fff;
    border-radius:30px;
    cursor:pointer;
    font-size:10px;

    @media (min-width:480px) {
        font-size:12px;
    }
`;
const MyAlogListBox = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap:wrap;
    margin:0 auto;
    box-sizing:border-box;
    max-height:390px;
    overflow-y:scroll;
    padding-left:15px;

    @media (min-width:480px) {
        padding-left:10px;
        max-height:480px;
    }
`;
const SaveBtnBox = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:10px;

    button {
        background:#fff;
        border:1px solid #999;
        color:#666;
        border-radius:20px;
        font-size:14px;
        font-weight:bold;
        box-sizing:border-box;
        cursor:pointer;
    }
    button:first-child {
        margin-right:10px;
    }
`;
const CompleteGroupPopup = styled.div`
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    z-index:9999;
    background:rgba(85,85,85, 0.7);
    color:#fff;
    width:90%;
    height:150px;
    max-width:300px;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const CompleteMySlideWrap = styled.div`
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    z-index:99999;
`;
const SlideConfirmBox = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background:rgba(85,85,85, 0.7);
    color:#fff;
    width:90%;
    min-height:100px;
    max-width:300px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:10px;
`;
const ContentsTitle = styled.p`
    font-size:14px;
    line-height:1.5em;
    text-align:center;
`;
const ConfirmText = styled.p`
    font-size:15px;
    font-weight:bold;
    margin:10px 0;

    span {
        color:#fd0031;
    }
`;
const ConfirmBtnBox = styled.div`
    margin-top:10px;

    button {
        border:1px solid #666;
        background:#fff;
        border-radius:20px;
        font-size:12px;
        cursor:pointer;
        box-sizing:border-box;
    }
    button:first-child {
        margin-right:10px;
    }
`;
const MyAlogSelectDiv = styled.div`
    position:relative;
    justify-self: start;
    font-size:12px;
    color:#666;
`;
const SelectDefault = styled.span`
    display:flex;
    min-width:65px;
    align-items:center;
    justify-content:space-between;
    border:1px solid #999;
    padding:0 8px;
    height:20px;
    cursor:pointer;
    white-space:nowrap;
    box-sizing:border-box;
    margin-right:10px;

    @media (min-width:480px) {
        height:25px;
    }

    i {
        display:block;
        width:5px;
        height:5px;
        border-left:2px solid #999;
        border-bottom:2px solid #999;
        transform:rotate(-45deg);
        margin-top:-3px;
        margin-left:5px;
    }
`;
const SelectList = styled.ul`
    position:absolute;
    top:100%;
    left:0;
    z-index:99;
    width:100%;
    height:${({open}) => open ? '51px':'0px'};
    overflow:hidden;
    background-color:#fff;
    border:${({open}) => open ? '1px solid #999':'0' };
    border-top:0;
    box-sizing:border-box;
    transition:all 0.3s;

    li:first-child {
        border-bottom:1px solid #999;
    }
`;
const SelectListEl = styled.li`
    display:flex;
    justify-content:center;
    align-items:center;
    height:25px;
    cursor:pointer;
    box-sizing:border-box;
    overflow:hidden;
`;



