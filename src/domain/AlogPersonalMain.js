import React, {useState} from 'react';
import { Route } from 'react-router-dom';
import AlogFixSectionFolder from '../alogPage/AlogFixSectionFolder';
import AlogFolderSection from '../alogPage/AlogFolderSection';
import AlogProfile from '../alogprofile/AlogProfile';
import MyMainAlogSlide from '../alogmain/myAlogMain/MyMainAlogSlide';
import NewGroupPopup from '../alogPage/NewGroupPopup';
import InGroupFolder from '../alogPage/InGroupFolder';

function AlogPersonalMain ({setNewGroup, newGroup, setCheckList, checkList, setMyAlogSlide, myMainAlogSlide, sample, opened, setOpened, bgSetting, setBgSetting, setShowBgEdit, showBgEdit}) {

    const groupSample = [
        {
            id:1,
            name: '바다 탐험',
            contents: 7,
            backImg: process.env.PUBLIC_URL + '/images/default_img06.jpg'
        },
        {
            id:2,
            name: '알통 이야기',
            contents: 4,
            backImg: process.env.PUBLIC_URL + '/images/default_img10.jpg'
        }
    ]
    const myAlogSlideSample = [
        {
            id: 1,
            title: '오늘은 금요일이다.',
            writer: 'Vivien',
            bgimg: 'bg01.jpg'
        },
        {
            id: 2,
            title: '즐거운 금요일입니다. 안녕하세요들',
            writer: 'Altong',
            bgimg: 'bg02.jpg'
        },
        {
            id: 3,
            title: '오늘은 금요일이다.',
            writer: 'Vivien',
            bgimg: 'bg03.jpg'
        },
        {
            id: 4,
            title: '즐거운 금요일입니다. 안녕하세요들',
            writer: 'Altong',
            bgimg: 'bg04.jpg'
        },
        {
            id: 5,
            title: '오늘은 금요일이다.',
            writer: 'Vivien',
            bgimg: 'bg05.jpg'
        }
    ];
    const [mySelect, setMySelect] = useState('게시글'); // 게시글 별, 그룹 별 옵션
    const [showNewGroup, setShowNewGroup] = useState(false);
    
    const slideCount = myAlogSlideSample.length; //대문글 개수

    return (
        <>
            <AlogProfile setShowBgEdit={setShowBgEdit}/>
            <AlogFixSectionFolder
                setNewGroup={setNewGroup} 
                setCheckList={setCheckList} 
                setMyAlogSlide={setMyAlogSlide}
                mySelect={mySelect} setMySelect={setMySelect}
            />
            <Route path="/personalMain" exact render={()=>
                <>
                    <MyMainAlogSlide content={myAlogSlideSample} count={slideCount} />
                    <AlogFolderSection
                        sample={sample} 
                        groupSample={groupSample}
                        mySelect={mySelect}
                    />
                </>
            }/>
            <Route path="/personalMain/:group" component={InGroupFolder} />
            {newGroup && <NewGroupPopup 
                setNewGroup={setNewGroup} sample={sample} 
                checkList={checkList} myMainAlogSlide={myMainAlogSlide} 
                opened={opened} setOpened={setOpened} 
                bgSetting={bgSetting} setBgSetting={setBgSetting}
                setShowNewGroup={setShowNewGroup} showNewGroup={showNewGroup}
                setShowBgEdit={setShowBgEdit} showBgEdit={showBgEdit}
            />}
        </>
    );
};

export default AlogPersonalMain;