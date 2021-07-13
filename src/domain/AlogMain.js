import React, {useEffect} from 'react';
import styled from 'styled-components';
import AlogSlider from '../alogmain/alogslider/AlogSlider';
import AlogCategory from '../alogmain/alogCategory/AlogCategory';
import AlogRecommendW from '../alogmain/alogRecommendW/AlogRecommendW';
import AlogRecommendC from '../alogmain/alogRecommendC/AlogRecommendC';
import AlogFooter from '../alogfooter/AlogFooter';

    const langAlogMainText = {
        ko:{
            mainText: {
                mainTitle: '당신의 마음 속 글들에 가치가 부여되는 공간, 알록달록 글을 적고서, 가치를 만들고, 가치를 나눠보세요',
                category: '알록달록 카테고리',
                writers: '알록달록 추천작가',
                contents: '알록달록 추천글'
            },
            alogSliderContents: [
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
            ],
            alogCategoryList0: [
                {
                    id:1,
                    img:'bg01.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"1",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"30",
                    inquire:"10",
                    hun:"10000",
                    take:"3"
                },
                {
                    id:2,
                    img:'bg02.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"3",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"20",
                    inquire:"40",
                    hun:"1000000",
                    take:"2"
                },
                {
                    id:3,
                    img:'bg03.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"2",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"50",
                    inquire:"30",
                    hun:"3000",
                    take:"1"
                },
                {
                    id:4,
                    img:'bg04.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"4",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"5",
                    inquire:"3",
                    hun:"1500",
                    take:"4"
                }
            ],alogCategoryList1: [
                {
                    id:1,
                    img:'bg01.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"1",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"30",
                    inquire:"10",
                    hun:"10000",
                    take:"3"
                },
                {
                    id:2,
                    img:'bg03.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"3",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"20",
                    inquire:"40",
                    hun:"100",
                    take:"2"
                },
                {
                    id:3,
                    img:'bg03.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"2",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"50",
                    inquire:"30",
                    hun:"100000",
                    take:"1"
                },
                {
                    id:4,
                    img:'bg01.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"4",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"5",
                    inquire:"3",
                    hun:"100",
                    take:"4"
                }
            ],alogCategoryList2: [
                {
                    id:1,
                    img:'bg04.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"1",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"30",
                    inquire:"10",
                    hun:"10000",
                    take:"3"
                },
                {
                    id:2,
                    img:'bg03.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"3",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"20",
                    inquire:"40",
                    hun:"100",
                    take:"2"
                },
                {
                    id:3,
                    img:'bg02.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"2",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"50",
                    inquire:"30",
                    hun:"100000",
                    take:"1"
                },
                {
                    id:4,
                    img:'bg01.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"4",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"5",
                    inquire:"3",
                    hun:"100",
                    take:"4"
                }
            ],alogCategoryList3: [
                {
                    id:1,
                    img:'bg02.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"1",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"30",
                    inquire:"10",
                    hun:"10000",
                    take:"3"
                },
                {
                    id:2,
                    img:'bg02.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"3",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"20",
                    inquire:"40",
                    hun:"100",
                    take:"2"
                },
                {
                    id:3,
                    img:'bg02.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"2",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"50",
                    inquire:"30",
                    hun:"100000",
                    take:"1"
                },
                {
                    id:4,
                    img:'bg02.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"4",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"5",
                    inquire:"3",
                    hun:"100",
                    take:"4"
                }
            ],alogCategoryList4: [
                {
                    id:1,
                    img:'bg01.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"1",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"30",
                    inquire:"10",
                    hun:"10000",
                    take:"3"
                },
                {
                    id:2,
                    img:'bg01.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"3",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"20",
                    inquire:"40",
                    hun:"100",
                    take:"2"
                },
                {
                    id:3,
                    img:'bg01.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"2",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"50",
                    inquire:"30",
                    hun:"100000",
                    take:"1"
                },
                {
                    id:4,
                    img:'bg01.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"4",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"5",
                    inquire:"3",
                    hun:"100",
                    take:"4"
                }
            ],alogCategoryList5: [
                {
                    id:1,
                    img:'bg04.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"1",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"30",
                    inquire:"10",
                    hun:"10000",
                    take:"3"
                },
                {
                    id:2,
                    img:'bg02.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"3",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"20",
                    inquire:"40",
                    hun:"100",
                    take:"2"
                },
                {
                    id:3,
                    img:'bg01.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"2",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"50",
                    inquire:"30",
                    hun:"100000",
                    take:"1"
                },
                {
                    id:4,
                    img:'bg04.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"4",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"5",
                    inquire:"3",
                    hun:"100",
                    take:"4"
                }
            ],alogCategoryList6: [
                {
                    id:1,
                    img:'bg03.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"1",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"30",
                    inquire:"10",
                    hun:"10000",
                    take:"3"
                },
                {
                    id:2,
                    img:'bg02.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"3",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"20",
                    inquire:"40",
                    hun:"100",
                    take:"2"
                },
                {
                    id:3,
                    img:'bg03.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"2",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"50",
                    inquire:"30",
                    hun:"100000",
                    take:"1"
                },
                {
                    id:4,
                    img:'bg02.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"4",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"5",
                    inquire:"3",
                    hun:"100",
                    take:"4"
                }
            ],alogCategoryList7: [
                {
                    id:1,
                    img:'bg03.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"1",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"30",
                    inquire:"10",
                    hun:"10000",
                    take:"3"
                },
                {
                    id:2,
                    img:'bg02.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"3",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"20",
                    inquire:"40",
                    hun:"100",
                    take:"2"
                },
                {
                    id:3,
                    img:'bg01.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"2",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"50",
                    inquire:"30",
                    hun:"100000",
                    take:"1"
                },
                {
                    id:4,
                    img:'bg01.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"4",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"5",
                    inquire:"3",
                    hun:"100",
                    take:"4"
                }
            ],alogCategoryList8: [
                {
                    id:1,
                    img:'bg04.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"1",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"30",
                    inquire:"10",
                    hun:"10000",
                    take:"3"
                },
                {
                    id:2,
                    img:'bg02.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"3",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"20",
                    inquire:"40",
                    hun:"100",
                    take:"2"
                },
                {
                    id:3,
                    img:'bg02.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"2",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"50",
                    inquire:"30",
                    hun:"100000",
                    take:"1"
                },
                {
                    id:4,
                    img:'bg04.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"4",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"5",
                    inquire:"3",
                    hun:"100",
                    take:"4"
                }
            ],alogCategoryList9: [
                {
                    id:1,
                    img:'bg03.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"1",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"30",
                    inquire:"10",
                    hun:"10000",
                    take:"3"
                },
                {
                    id:2,
                    img:'bg03.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"3",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"20",
                    inquire:"40",
                    hun:"100",
                    take:"2"
                },
                {
                    id:3,
                    img:'bg03.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"2",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"50",
                    inquire:"30",
                    hun:"100000",
                    take:"1"
                },
                {
                    id:4,
                    img:'bg03.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"4",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"5",
                    inquire:"3",
                    hun:"100",
                    take:"4"
                }
            ],alogCategoryList10: [
                {
                    id:1,
                    img:'bg04.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"1",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"30",
                    inquire:"10",
                    hun:"10000",
                    take:"3"
                },
                {
                    id:2,
                    img:'bg04.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"3",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"20",
                    inquire:"40",
                    hun:"100",
                    take:"2"
                },
                {
                    id:3,
                    img:'bg04.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"2",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"50",
                    inquire:"30",
                    hun:"100000",
                    take:"1"
                },
                {
                    id:4,
                    img:'bg04.jpg',
                    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    hour:"4",
                    time:'시간 전',
                    nickname: 'Vivien',
                    good:"5",
                    inquire:"3",
                    hun:"100",
                    take:"4"
                }
            ],
            alogRecommendWriter: [
                {
                    id:1,
                    img: 'profile01.jpg',
                    nation: 'USA.svg',
                    nickname: 'Vivien',
                    code: 'USA'
                },
                {
                    id:2,
                    img: 'profile02.jpg',
                    nation: 'AUT.svg',
                    nickname: 'Vivien',
                    code: 'AUT'
                },
                {
                    id:3,
                    img: 'profile03.jpg',
                    nation: 'KOR.svg',
                    nickname: 'Vivien',
                    code: 'KOR'
                },
                {
                    id:4,
                    img: 'profile04.jpg',
                    nation: 'FRA.svg',
                    nickname: 'Vivien',
                    code: 'FRA'
                },
            ],
            alogRecommendContents: [
                {
                    id: 1,
                    profile: 'profile01.jpg',
                    nickname: 'Vivien',
                    nation: 'FRA.svg',
                    lv: "나비천사",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    time: '14분 전',
                    check: '3',
                    reply: '5',
                    bgImg: 'bg01.jpg',
                    title: '알통의 심리학'
                },
                {
                    id: 2,
                    profile: 'profile02.jpg',
                    nation: 'AUT.svg',
                    nickname: 'Vivien',
                    lv: "열혈천사",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    time: '20분 전',
                    check: '5',
                    reply: '10',
                    bgImg: 'bg02.jpg',
                    title: '산책의 산책'
                },
                {
                    id: 3,
                    profile: 'profile03.jpg',
                    nickname: 'Vivien',
                    nation: 'USA.svg',
                    lv: "알천사",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    time: '50분 전',
                    check: '30',
                    reply: '58',
                    bgImg: 'bg03.jpg',
                    title: '코로나19'
                }
            ],
            categorySample: [
                {
                    id:1,
                    img:'category01_off.svg' ,
                    img_on: 'category01_on.svg',
                    text: '전체',
                },
                {
                    id:2,
                    img:'category02_off.svg',
                    img_on: 'category02_on.svg',
                    text: '배움',
                },
                {
                    id:3,
                    img:'category03_off.svg',
                    img_on: 'category03_on.svg',
                    text: '생활',
                },
                {
                    id:4,
                    img:'category04_off.svg',
                    img_on: 'category04_on.svg',
                    text: '건강',
                },
                {
                    id:5,
                    img:'category05_off.svg',
                    img_on: 'category05_on.svg',
                    text: '고민',
                },
                {
                    id:6,
                    img:'category06_off.svg',
                    img_on: 'category06_on.svg',
                    text: '문예',
                },
                {
                    id:7,
                    img:'category07_off.svg',
                    img_on: 'category07_on.svg',
                    text: '세상',
                },
                {
                    id:8,
                    img:'category08_off.svg',
                    img_on: 'category08_on.svg',
                    text: '돈',
                },
                {
                    id:9,
                    img:'category09_off.svg',
                    img_on: 'category09_on.svg',
                    text: '컴/폰',
                },
                {
                    id:10,
                    img:'category10_off.svg',
                    img_on: 'category10_on.svg',
                    text: '스포츠',
                },
                {
                    id:11,
                    img:'category11_off.svg',
                    img_on: 'category11_on.svg',
                    text: '게임',
                }
            ],
        },
    }
    
    const mainText = langAlogMainText.ko.mainText;
    const alogSliderContents = langAlogMainText.ko.alogSliderContents;
    const alogCategoryList0 = langAlogMainText.ko.alogCategoryList0.sort(function(a, b){ return a.hour - b.hour; } );
    const alogCategoryList1 = langAlogMainText.ko.alogCategoryList1;
    const alogCategoryList2 = langAlogMainText.ko.alogCategoryList2;
    const alogCategoryList3 = langAlogMainText.ko.alogCategoryList3;
    const alogCategoryList4 = langAlogMainText.ko.alogCategoryList4;
    const alogCategoryList5 = langAlogMainText.ko.alogCategoryList5;
    const alogCategoryList6 = langAlogMainText.ko.alogCategoryList6;
    const alogCategoryList7 = langAlogMainText.ko.alogCategoryList7;
    const alogCategoryList8 = langAlogMainText.ko.alogCategoryList8;
    const alogCategoryList9 = langAlogMainText.ko.alogCategoryList9;
    const alogCategoryList10 = langAlogMainText.ko.alogCategoryList10;
    const count = alogSliderContents.length;
    const alogRecommendWriter = langAlogMainText.ko.alogRecommendWriter;
    const alogRecommendContents = langAlogMainText.ko.alogRecommendContents;
    const categorySample = langAlogMainText.ko.categorySample;

function AlogMain() {

    return (
        <>
            <AlogIntro>{mainText.mainTitle}</AlogIntro>
            <AlogSliderCoverDiv>
                <AlogSlider content={alogSliderContents} count={count} />
            </AlogSliderCoverDiv>
            <AlogCategory alogCategoryList0={alogCategoryList0} alogCategoryList1={alogCategoryList1} alogCategoryList2={alogCategoryList2} alogCategoryList3={alogCategoryList3} 
            alogCategoryList4={alogCategoryList4} alogCategoryList5={alogCategoryList5} alogCategoryList6={alogCategoryList6} alogCategoryList7={alogCategoryList7}
            alogCategoryList8={alogCategoryList8} alogCategoryList9={alogCategoryList9} alogCategoryList10={alogCategoryList10} categorySample={categorySample} title={mainText.category}
            />
            <AlogRecommendW writer={alogRecommendWriter} title={mainText.writers}/>
            <AlogRecommendC recommend={alogRecommendContents} title={mainText.contents} />
            <AlogFooter></AlogFooter>
        </>
    );
}

const AlogIntro = styled.p`
    font-size:0.9375rem;
    font-weight:bold;
    text-align:center;
    padding:0.9375rem  3.125rem;
    max-width:750px;
    margin:1.563rem auto 0;
    color:#707070;

    @media (min-width:480px) {
        font-size: 1.375rem;
        margin:1.563rem auto 1.875rem;
    }
`;
const AlogSliderCoverDiv = styled.div`
    height:49vh;
    max-width:800px;
    margin:0 auto;
`;

export default AlogMain;