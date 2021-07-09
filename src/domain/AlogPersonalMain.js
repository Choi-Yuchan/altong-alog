import React, {useState} from 'react';
import styled from 'styled-components';
import AlogFixSectionFolder from '../alogPage/AlogFixSectionFolder';
import AlogFolderSection from '../alogPage/AlogFolderSection';
import AlogProfile from '../alogprofile/AlogProfile';
import MyMainAlogSlide from '../alogmain/myAlogMain/MyMainAlogSlide';
import NewGroupPopup from '../alogPage/NewGroupPopup';

function AlogPersonalMain ({setNewGroup, newGroup, setCheckList, checkList, setMyAlogSlide, myMainAlogSlide, sample, opened, setOpened, bgSetting, setBgSetting}) {

    return (
        <>
            <AlogProfile />
            <AlogFixSectionFolder setNewGroup={setNewGroup} setCheckList={setCheckList} setMyAlogSlide={setMyAlogSlide} />
            <MyMainAlogSlide />
            <AlogFolderSection sample={sample}/>
            {newGroup && <NewGroupPopup setNewGroup={setNewGroup} sample={sample} checkList={checkList} myMainAlogSlide={myMainAlogSlide} 
            opened={opened} setOpened={setOpened} bgSetting={bgSetting} setBgSetting={setBgSetting}/>}
        </>
    );
};

export default AlogPersonalMain;