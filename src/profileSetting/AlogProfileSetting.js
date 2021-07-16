/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components';
import BgImgPopup from './BgImgPopup';
import PreviewProfile from './PreviewProfile';
import PreviewMyGroup from './PreviewMyGroup';
import { useTranslation } from 'react-i18next';

function DefaultBgImgEl({img, number, alt}) {
    return (
        <BgImgElDiv>
            <img src={img} alt={`${alt}${number}`} />
            <span><i></i></span>
        </BgImgElDiv>
    )
}

function AlogProfileSetting ({setOpened, bgSetting, setShowBgEdit}) {

    const {t} = useTranslation();
    const colorSample = [ 
        {id:1, color:'#EE748D' },
        {id:2, color:'#F0A962' },
        {id:3, color:'#EEEE95' },
        {id:4, color:'#8CE89B' },
        {id:5, color:'#79ADE2' },
        {id:6, color:'#7C79D9' },
        {id:7, color:'#D98DF1' },
        {id:8, color:'#F1F1F1' },
        {id:9, color:'#393939' }
    ];
    const defaultBgImage = [
        { id:1, img:process.env.PUBLIC_URL + '/images/default_img01.jpg' },
        { id:2, img:process.env.PUBLIC_URL + '/images/default_img02.jpg' },
        { id:3, img:process.env.PUBLIC_URL + '/images/default_img03.jpg' },
        { id:4, img:process.env.PUBLIC_URL + '/images/default_img04.jpg' },
        { id:5, img:process.env.PUBLIC_URL + '/images/default_img05.jpg' },
        { id:6, img:process.env.PUBLIC_URL + '/images/default_img06.jpg' },
        { id:7, img:process.env.PUBLIC_URL + '/images/default_img07.jpg' },
        { id:8, img:process.env.PUBLIC_URL + '/images/default_img08.jpg' },
        { id:9, img:process.env.PUBLIC_URL + '/images/default_img09.jpg' },
        { id:10, img:process.env.PUBLIC_URL + '/images/default_img10.jpg' },
        { id:11, img:process.env.PUBLIC_URL + '/images/default_img11.jpg' },
        { id:12, img:process.env.PUBLIC_URL + '/images/default_img12.jpg' },
        { id:13, img:process.env.PUBLIC_URL + '/images/default_img13.jpg' },
        { id:14, img:process.env.PUBLIC_URL + '/images/default_img14.jpg' },
        { id:15, img:process.env.PUBLIC_URL + '/images/default_img15.jpg' },
        { id:16, img:process.env.PUBLIC_URL + '/images/default_img16.jpg' },
        { id:17, img:process.env.PUBLIC_URL + '/images/default_img17.jpg' },
        { id:18, img:process.env.PUBLIC_URL + '/images/default_img18.jpg' },
        { id:19, img:process.env.PUBLIC_URL + '/images/default_img19.jpg' },
        { id:20, img:process.env.PUBLIC_URL + '/images/default_img20.jpg' },
        { id:21, img:process.env.PUBLIC_URL + '/images/default_img21.jpg' },
        { id:22, img:process.env.PUBLIC_URL + '/images/default_img22.jpg' },
        { id:23, img:process.env.PUBLIC_URL + '/images/default_img23.jpg' },
        { id:24, img:process.env.PUBLIC_URL + '/images/default_img24.jpg' },
        { id:25, img:process.env.PUBLIC_URL + '/images/default_img25.jpg' },
        { id:26, img:process.env.PUBLIC_URL + '/images/default_img26.jpg' },
        { id:27, img:process.env.PUBLIC_URL + '/images/default_img27.jpg' },
        { id:28, img:process.env.PUBLIC_URL + '/images/default_img28.jpg' },
        { id:29, img:process.env.PUBLIC_URL + '/images/default_img29.jpg' },
        { id:30, img:process.env.PUBLIC_URL + '/images/default_img30.jpg' }
    ]
    const selectImg = 0;
    const bgImgCount = defaultBgImage.length;
    const rand1 = Math.floor(Math.random()*bgImgCount);
    const rand2 = Math.floor(Math.random()*bgImgCount);

    const [popupOpen, setPopupOpen] = useState(false);
    const groupSampleBgImg = defaultBgImage[1].img;
    
    const viewBgSetting = () => {
        setOpened(false); 
        setShowBgEdit(false);
    }

    return (
        <>
        <SettingWrap onClick={viewBgSetting}>
            <Setting onClick={(e)=>{e.stopPropagation();}}>
                <Title>{bgSetting === false ? t('Alog_Setting')[1] : t('Alog_Setting')[1]}</Title>
                {bgSetting === false &&
                    <>
                        <span className="subheading">{t('Alog_Setting')[3]}</span>
                        <IntroInput type="text" placeholder={t('Alog_Setting')[4]} maxLength="30"  />
                        <span className="subheading">{t('Alog_Setting')[5]}</span>
                        <HashTagBox>
                            <p>{t('Alog_Setting')[6]}</p>
                            <HashTagInputBox># <HashInput type="text" maxLength="5" /> # <HashInput type="text" maxLength="5" /> # <HashInput type="text" maxLength="5" /></HashTagInputBox>
                        </HashTagBox>
                    </>
                }
                <span className="subheading">{t('Alog_Setting')[7]}</span>
                <BgColorBox>
                    {colorSample.map(color => <BgColorEl key={color.id} color={color.color} /> )}
                </BgColorBox>
                <span className="subheading">{t('Alog_Setting')[0]}</span>
                <DefaultImgBox>
                    <DefaultBgImgEl img={defaultBgImage[selectImg].img} number={defaultBgImage[selectImg].id} alt={t('Alog_Setting')[0]} />
                    <DefaultBgImgEl img={defaultBgImage[rand1].img} number={defaultBgImage[rand1].id} alt={t('Alog_Setting')[0]} />
                    <DefaultBgImgEl img={defaultBgImage[rand2].img} number={defaultBgImage[rand2].id} alt={t('Alog_Setting')[0]} />
                    <MoreButton onClick={()=>{setPopupOpen(true)}}><i></i><i></i></MoreButton>
                </DefaultImgBox>
                <span className="subheading">{t('Alog_Setting')[8]}</span>
                <FileInputBox>
                    <FileNameInput value="" disabled="disabled" />
                    <FileLabel htmlFor="image_file">{t('Alog_Setting')[9]}</FileLabel>
                    <FileInput type="file" accept='image/*' id="image_file" />
                </FileInputBox>
                <span className="subheading">{t('Alog_Setting')[10]}</span>
                {bgSetting === true ? <PreviewMyGroup sample={groupSampleBgImg} /> : <PreviewProfile />}
                <SettingBtnBox>
                    <SettingBtn>{t('Save')}</SettingBtn>
                    <SettingBtn onClick={viewBgSetting}>{t('Cancel')}</SettingBtn>
                </SettingBtnBox>
            </Setting>
        </SettingWrap>
        {popupOpen === true && <BgImgPopup defaultBgImage={defaultBgImage} setPopupOpen={setPopupOpen} />}
        </>
    )
};

const SettingWrap = styled.div`
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    z-index:9999;
`;

const Setting = styled.div`
    width:90%;
    max-width:780px;
    background:#fefefe;
    border:1px solid #707070;
    border-radius:10px;
    position:absolute; 
    left:50%; top:50%;
    transform: translate(-50%, -50%);
    box-sizing:border-box;
    display:grid;
    grid-template-columns: 1fr;
    gap: 7px 0px;
    align-items: center;
    justify-items: center;
    padding:0.625rem;
    z-index: 10;

    @media (min-width:480px) {
        padding:1.5rem;
        grid-template-columns:1fr 5fr;
        gap: 20px 10px;
    }

    .subheading {
        text-align:right;
        font-weight:bold;
        color:#666;
        font-size:0.75rem;
        justify-self:self-start;
        letter-spacing:-0.5px;
        grid-column: 1/3;

        @media (min-width:480px) {
            justify-self:end;
            grid-column: 1/2;
            font-size:0.875rem;
        }
    }
    input { 
        height:23px;
        border:1px solid #666;
        border-radius:3px;
    }
`;
const Title = styled.p`
    grid-column: 1 / 3;
    text-align:center;
    font-size:1rem;
    font-weight:bold;
    color:#555;
    margin-bottom:10px;

    @media (min-width:480px) {font-size:1.25rem; margin-bottom:0.625rem;}
`;
const IntroInput = styled.input`
    width:80%;
    letter-spacing:-0.5px;
    font-size:12px;
`;
const HashTagBox = styled.div`
    display:flex;
    flex-direction:column;
    
    p {
        display:flex;
        justify-content:flex-start;
        padding-right:0;
        font-size:0.75rem;
        color:#999;

        @media (min-width:480px) {
            justify-content:flex-end;
            padding-right:2.5rem;
        }
    }
`;
const HashTagInputBox = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    white-space:nowrap;
    margin-top:5px;
`;
const HashInput = styled.input`
    width:25%;
    margin-right:5px;
`;
const BgColorBox = styled.div`
    width:100%;
    display:flex;
    justify-content: space-around;

    @media (min-width: 768px){
        justify-content: space-evenly;
    }
`;
const BgColorEl = styled.i`
    display:inline-block;
    width:25px; height:25px;
    background-color:${props=>props.color};
    border-radius:50%;
    transition:all 0.3s;
    cursor:pointer;

    @media (min-width: 480px) { width:33px; height:33px;}
    @media (min-width: 769px) {
        width: 50px; height: 50px;
    }
`;
const FileInputBox = styled.div`
    width:90%;
    display:flex;
    align-items:center;
    justify-content:center;
`;
const FileNameInput = styled.input`
    display:block;
    margin-right:10px;
    flex-grow:1;
`;
const FileLabel = styled.label`
    border:1px solid #999;
    padding:3px 10px;
    font-size:12px;
    letter-spacing:-0.5px;
    border-radius:30px;
    color:#666;
    font-weight:bold;
    white-space: nowrap;
    cursor:pointer;

    @media (min-width:480px) {
        font-size:14px;
        padding:5px 15px;
    }
`;
const FileInput = styled.input`
    display:none;
`;
const DefaultImgBox = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
`;
const MoreButton = styled.div`
    width:13px;
    height:100%;
    position:relative;
    cursor:pointer;

    @media (min-width:480px) {width:20px;}

    i {
        display:block;
        width:13px;
        height:2px;
        background:#666;
        border-radius:5px;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);

        @media (min-width:480px) {width:20px;}
    }
    i:last-child {
        width:2px;
        height:13px;

        @media (min-width:480px) {height:20px;}
    }
`;
const SettingBtnBox = styled.div`
    grid-column: 1 / 3;

    button:first-child {
        margin-right:20px;
    }
`;
const SettingBtn = styled.button`
    border:1px solid #666;
    color:#666;
    background:#fff;
    border-radius:30px;
    font-size:0.8rem;
    font-weight:bold;
    padding: 3px 25px;
    cursor:pointer;
`;
const BgImgElDiv = styled.div`
    width:60px;
    height:60px;
    position:relative;
    cursor:pointer;

    @media (min-width: 480px) {width:80px; height:80px;}
    @media (min-width: 768px) {width:100px; height:100px;}

    img {
        width:100%;
        height:100%;
        object-fit: cover;
    }
    span {
        width:12px;
        height:12px;
        background:aqua;
        border-radius:50%;
        position:absolute;
        top:3px;
        right:3px;

        i {
            width:6px;
            height:6px;
            border-radius:50%;
            background:#fff;
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
        }
    }
`;


export default AlogProfileSetting;