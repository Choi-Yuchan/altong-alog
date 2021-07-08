import React, {useState} from 'react';
import AlogFixSectionFolder from '../alogPage/AlogFixSectionFolder';
import AlogFolderSection from '../alogPage/AlogFolderSection';
import AlogProfile from '../alogprofile/AlogProfile';
import MyMainAlogSlide from '../alogmain/myAlogMain/MyMainAlogSlide';
import NewGroupPopup from '../alogPage/NewGroupPopup';
import InGroupFolder from '../alogPage/InGroupFolder';
import { Route } from 'react-router-dom';

function AlogPersonalMain (props) {

    const sample = [
        {
            id: 0,
            title: "알록달록 튜토리얼",
            profile: "default-profile.png",
            backImg: "default-background.png",
            nickname: "알록달록",
            time: '',
            view: '',
            reply: '',
        },
        {
            id:1,
            title: "알통끝판왕인 가평 닭갈비 맛집 소개",
            text: "알통 며칠 전 가평에 들렀다가 이 근처에서 장작구이로 엄청 유명하다는 가평 닭갈비 맛집을 찾았는데요. 쫄깃한 닭갈비에 막국수까지 먹어주니 같이 방문한 지인들 모두에게 만족을 안겨준 식당이에요. 1. 아침고요 장작구이 숯불닭갈비 13,000원, ...",
            profile: 'profile01.jpg',
            nickname: 'Vivien',
            backImg: 'bg06.jpg',
            time: 1612292323330,
            view: 16,
            reply: 12,
            hunAl: 1000,
            take: 40,
            good: 230
        },
        {
            id:2,
            title: "알통제주도민들로부터 가장 사랑받는 사라봉공원",
            text: "제주도민들로부터 가장 사랑받는 사라봉공원 제주도 수많은 오름 중에 제주도민들로부터 가장 사랑받는 오름을 들라면, 아마도 사라봉공원을 꼽을 것이다. 제주도 오름 사라봉공원은 예로부터 지는 해가 아름다워 ‘사봉낙조’라 하여 영주십경...",
            profile: 'profile02.jpg',
            nickname: '고양이',
            backImg: 'bg01.jpg',
            time: 1608255682130,
            view: 6,
            reply: 12,
            hunAl: 2000,
            take: 39,
            good: 20
        },
        {
            id:3,
            title: "알통제주도민들로부터 가장 사랑받는 사라봉공원",
            text: "제주도민들로부터 가장 사랑받는 사라봉공원 제주도 수많은 오름 중에 제주도민들로부터 가장 사랑받는 오름을 들라면, 아마도 사라봉공원을 꼽을 것이다. 제주도 오름 사라봉공원은 예로부터 지는 해가 아름다워 ‘사봉낙조’라 하여 영주십경...",
            profile: 'profile03.jpg',
            nickname: '고양이',
            backImg: 'bg02.jpg',
            time: 1608255682130,
            view: 6,
            reply: 12,
            hunAl: 2000,
            take: 39,
            good: 20
        },
        {
            id:4,
            title: "알통제주도민들로부터 가장 사랑받는 사라봉공원",
            text: "제주도민들로부터 가장 사랑받는 사라봉공원 제주도 수많은 오름 중에 제주도민들로부터 가장 사랑받는 오름을 들라면, 아마도 사라봉공원을 꼽을 것이다. 제주도 오름 사라봉공원은 예로부터 지는 해가 아름다워 ‘사봉낙조’라 하여 영주십경...",
            profile: 'profile03.jpg',
            nickname: '고양이',
            backImg: 'bg02.jpg',
            time: 1608255682130,
            view: 6,
            reply: 12,
            hunAl: 2000,
            take: 39,
            good: 20
        },
        {
            id:5,
            title: "알통제주도민들로부터 가장 사랑받는 사라봉공원",
            text: "제주도민들로부터 가장 사랑받는 사라봉공원 제주도 수많은 오름 중에 제주도민들로부터 가장 사랑받는 오름을 들라면, 아마도 사라봉공원을 꼽을 것이다. 제주도 오름 사라봉공원은 예로부터 지는 해가 아름다워 ‘사봉낙조’라 하여 영주십경...",
            profile: 'profile03.jpg',
            nickname: '고양이',
            backImg: 'bg02.jpg',
            time: 1608255682130,
            view: 6,
            reply: 12,
            hunAl: 2000,
            take: 39,
            good: 20
        },
    ];
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
    const [newGroup, setNewGroup] = useState(false); //나의 알록달록 설정 팝업 
    const [myMainAlogSlide, setMyAlogSlide] = useState(false); //대문글 유무
    const [checkList, setCheckList] = useState(false); //새 그룹 만들기, 기능 설정 팝업 체크아이콘 유무
    const [mySelect, setMySelect] = useState('게시글'); // 게시글 별, 그룹 별 옵션
    const [groupFolderNumber, setGroupFolderNumber] = useState(null); //그룹폴더 클릭 시  index번호 
    const sampleGroupContent = groupSample[groupFolderNumber];
    
    const slideCount = myAlogSlideSample.length;

    return (
        <>
            <AlogProfile />
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
                        setGroupFolderNumber={setGroupFolderNumber}
                    />
                </>
            }/>
            <Route path="/personalMain/:groupname" render={()=>
                <InGroupFolder 
                    sample={sample} 
                    sampleGroupContent={sampleGroupContent}
                />
            }/>
            {newGroup && 
                <NewGroupPopup 
                    setNewGroup={setNewGroup} 
                    sample={sample} 
                    checkList={checkList} 
                    myMainAlogSlide={myMainAlogSlide} 
                />}
        </>
    );
};

export default AlogPersonalMain;