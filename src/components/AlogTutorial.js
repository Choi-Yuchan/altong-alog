/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

function AlogTutorial () {

    const {t} = useTranslation();
    const [close, setClose] = useState(true);
    return (
        <>
        { close &&
        <Frame onClick = { () => { setClose(!close)}}>
            <Exit src={process.env.PUBLIC_URL + '/images/close-button.svg'} />
            <Title>{t('User_Guide')}</Title>
            <Sub>{t('Guide_01')}</Sub>
            <Word>
                {t('Guide_01_Content_01')}<br /><br />
                {t('Guide_01_Content_02')}<br />
                {t('Guide_01_Content_03')}<br />
                {t('Guide_01_Content_04')}<br />
                {t('Guide_01_Content_05')}<br />
                {t('Guide_01_Content_06')}<br />
                {t('Guide_01_Content_07')}
            </Word>
            <Sub>{t('Guide_02')}</Sub>
            <Word>
                {t('Guide_02_Content_01')}<br />
                {t('Guide_02_Content_02')}<br />
                {t('Guide_02_Content_03')}<br />
            </Word>
        </Frame>
}
       </>
    )
};

const Frame = styled.div`
    width:300px; height:600px;
    padding:0 2rem;
    margin:0 auto 20px;
    background:#fefefe;
    border:1px solid #707070;
    overflow:scroll;
    position:fixed;
    left:50%; top:10%;
    transform:translateX(-50%);
    z-index:99;
    box-sizing:border-box;
    

    @media all and (min-width:800px){
        width:600px;
        height:700px;
        
    }
`;

const Exit=styled.img`
    position:absolute;
    right:0.5rem; top:0.5rem;
    width:30px;
`;
const Title = styled.div`
    font-size:1.2rem;
    font-weight:bold;
    text-align:center;
    margin:50px;
`;
const Sub = styled.div`
    font-size:1rem;
    font-weight:bold;
    margin-bottom:20px;
    margin-left:10px;
`;

const Word =styled.div`
    width:80%; height:auto;
    font-size:0.8rem;
    line-height:2;
    margin:0 auto 10px;
`;
export default AlogTutorial;