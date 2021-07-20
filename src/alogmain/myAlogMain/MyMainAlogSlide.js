import React from 'react';
import styled from 'styled-components';
import AlogSlider from '../alogslider/AlogSlider';
import { useTranslation } from 'react-i18next';

function MyMainAlogSlide({content, count}) {

    const {t} = useTranslation();

    return (
        count === 0
            ? <DefaultSlideBox>
                <DefaultSlideEl>{t('MyAlog_Slide')[0]}<br/>{t('MyAlog_Slide')[1]}</DefaultSlideEl>
                <DefaultSlideEl>{t('MyAlog_Slide')[0]}<br/>{t('MyAlog_Slide')[1]}</DefaultSlideEl>
            </DefaultSlideBox>
            : <MyMainAlogSlideDiv>
                <AlogSlider content={content} count={count}/>
            </MyMainAlogSlideDiv>
    );
}

const DefaultSlideBox = styled.div`
    display:flex;
    background:#eee;
    justify-content:center;
    box-sizing:border-box;
    padding: 20px 0;
    margin-bottom:15px;

    p:first-child {
        margin-right:20px;

        @media (min-width:480px) {
            margin-right:50px;
        }
    }
`;
const DefaultSlideEl = styled.p`
    width:35%;
    padding:10px;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    height:150px;
    background:#bbb;
    border-radius:20px;
    box-sizing:border-box;
    font-size:14px;
    line-height:1.5em;
    color:#777;
    font-weight:bold;
    box-shadow:2px 2px 10px rgba(0,0,0,0.2);
    letter-spacing:-1px;

    @media (min-width:480px) {
        width:25%;
        height:200px;
    }
`;

const MyMainAlogSlideDiv = styled.div`
    height:250px;
    max-width:800px;
    margin:0 auto 20px;
`;

export default MyMainAlogSlide;