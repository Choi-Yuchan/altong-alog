/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components';

function AlogProfileSetting () {

    const colorSample = [ 
        {color:'#5E82E6',
        state:false},
        {color:'#62F0AB',
        state:false},
        {color:'#ECF5A6',
        state:false},
        {color:'#E8BB8C',
        state:false},
        {color:'#FA5FCA',
        state:false},
        {color:'#DAE8F9',
        state:false},
        {color:'#F3DCFA',
        state:false},
        {color:'#FF6803',
        state:false}
    ];

    const [colorArr, setColorArr] = useState(colorSample);

    const [close, setClose] = useState(true);

    const changeState = (colorArr, setColorArr, idx) => {
        setColorArr(colorArr);
        const pre = colorArr.filter((val, index) => {
            return index < idx;
        });
        const selected = {
            color: colorArr[idx].color,
            state: true
        }
        const behind = colorArr.filter((val, index) => {
            return index > idx;
        });
        setColorArr(pre.concat(selected).concat(behind));
    }

    return (
        <>
        { close ?
        <Setting>
            <Exit src={process.env.PUBLIC_URL + '/images/close-button.svg'} onClick = { () => { setClose(!close) } }></Exit>
            <BackChoose for="file">배경화면 선택</BackChoose><Uploader type="file" id="file"/>
            <ColorChoose>배경색 선택</ColorChoose>
            <Colors>
                {
                    colorArr.map( (color, index) => (
                            <ColorElements state={color.state} onClick={()=>{ 
                                changeState(colorSample, setColorArr, index);
                             }}  color={color.color}  key={index}></ColorElements>
                        )
                    )   
                }
            </Colors>
            <Hashtag>해시태그</Hashtag>
            <HashtagName># <TextArea type="text" /> # <TextArea type="text" /> # <TextArea type="text" /></HashtagName>
            <Save>저장</Save>
        </Setting>    
        : null
        }
        </>        
    )
};


const Setting = styled.div`
    width:90%; height:270px;
    background:#fefefe;
    border:1px solid #707070;
    border-radius:25px;
    position:fixed; z-index:9999;
    left:50%; top:45%;
    transform:translateX(-50%);
    display:flex;
    flex-direction:column;
    align-items:center;
    font-size:12px;
    text-align:center;
    font-weight:bold;
    color:#707070;
    box-sizing:border-box;

    @media all and (min-width:600px){
        width:542px;
    }
`;

const Uploader = styled.input`
    display:none;
`;
const Exit = styled.img`
    width:20px; height:20px;
    position:absolute;
    right:20px; top:20px;
    cursor:pointer;
`;

const BackChoose = styled.label`
    width:100px; height:30px;
    background:#E8E1E1;
    border-radius:25px;
    line-height:30px;
    cursor:pointer;
    margin-top:5%;
    margin-bottom:10px;

    @media all and (min-width:500px){
        margin-top:3%;
    }
    @media all and (min-width:600px){
        margin-top:2%;
    }
`;

const TextArea = styled.input`
    width:20%; height:100%; 
`;

const ColorChoose = styled.div`
    width:100px; height:30px;
    background:#E8E1E1;
    border-radius:25px;
    line-height:30px;;
    margin-bottom:10px;

`;
const Colors = styled.div`
    width:95%;
    display:flex;
    justify-content:space-evenly;
`;


const ColorElements = styled.div`
    width:30px; height:30px;
    border-radius:50%;
    background-color:${props => props.color};
    cursor:pointer;
    margin-bottom:5px;
    box-sizing:border-box;
    border: ${props => props.state ? "1px solid #707070": "1px solid transparent" };


    :active { border:1px solid #707070; }

    @media all and (min-width:400px){
        width:40px; height:40px;
    }
    @media all and (min-width:600px){
        width:50px; height:50px;
    }
`;
const HashtagName = styled.div`
    margin-bottom:20px;
`;
const Save = styled.div`
    width:20%; height:20px;
    line-height:20px;
    border:1px solid #707070;
    border-radius:25px;
    cursor:pointer;
`;

const Hashtag = styled.div`
    width:100px; height:30px;
    background:#E8E1E1;
    border-radius:25px;
    line-height:30px;
    margin-bottom:10px;

    @media all and (min-width:500px){
        margin-top:3%;
    }
    @media all and (min-width:600px){
        margin-top:2%;
    }
`;



export default AlogProfileSetting;