import React, { useState } from 'react';
import styled from 'styled-components'

const ScrapOptionBox = ({setShowNewGroup, showNewGroup, setShowBgEdit, showBgEdit, setMyAlogSlide, scrapComplete, setScrapComplete}) => {

  const completeScrap = () => {
    setScrapComplete(!scrapComplete)
  }
    return(
        <ScrapOptConatiner>
            <ScrapOptBox>
            <ScrapOptTitle>그룹을 선택해주세요.</ScrapOptTitle>
            <SelectGroupBox>
                <SelectGroup>
                <GroupOption> 여행 그 모든 것 (15) </GroupOption>
                </SelectGroup>
                <GroupSaveBtn onClick={completeScrap}>저장</GroupSaveBtn>
            </SelectGroupBox>
            <ScrapOptBtnBox>
                <PlusBtn>+</PlusBtn>
                <CreateBtn onClick={() => {setShowNewGroup(!showNewGroup); setMyAlogSlide(false)}}>
                    새그룹 만들기
                </CreateBtn>
                <EditBtn onClick={() =>{setShowBgEdit(!showBgEdit)}}>그룹 배경 설정</EditBtn>
            </ScrapOptBtnBox>
            </ScrapOptBox>

        </ScrapOptConatiner>
    )
}

const ScrapOptConatiner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 90%;
  height: 65%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  @media (min-width: 480px){
      width: 70%;
  }

  @media (min-width: 760px){
      width: 50%;
  }
`;
const ScrapOptBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const ScrapOptTitle = styled.h4`
  font-weight: bold;
  color: #707070;
`;
const SelectGroupBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1em 0;
`;
const SelectGroup = styled.select`
  padding: 0.25em 2em;
  color: #707070;
  font-weight: bold;
`;
const GroupOption = styled.option`
`;
const GroupSaveBtn = styled.button`
  background-color: white;
  color:#707070;
  font-weight: bold;
  border: 1px solid rgb(118, 118, 118);
  padding: 0.25em 0.75em;
  cursor: pointer;
`;
const ScrapOptBtnBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PlusBtn = styled.button`
  background-color: #777;
  color: white;
  font-size: 1.5rem;
  border: 1px solid #fefefe;
  border-radius: 50%;
  cursor: pointer;
`;
const CreateBtn = styled.button`
  background-color: #eee;
  color: #707070;
  font-weight: bold;
  border-style: none;
  border-radius: 1em;
  padding: 0.5em 0.75em;
  margin-left: 1em;
  cursor: pointer;
`;
const EditBtn = styled(CreateBtn)`
`;
export default ScrapOptionBox;