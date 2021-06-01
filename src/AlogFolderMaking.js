/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components';

function AlogFolderMaking () {

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

    const langFolderMaking = {
        ko:{
            BgChoice:"배경이미지 선택",
            BgColor:"배경색 선택",
            folderName:"폴더명",
            save:"저장"
        }
    }
    const BgChoice = langFolderMaking.ko.BgChoice;
    const BgColor = langFolderMaking.ko.BgColor;
    const folderName = langFolderMaking.ko.folderName;
    const save = langFolderMaking.ko.save;

    return (
        <>
        { close ?
        <Setting>
            <Exit src={process.env.PUBLIC_URL + '/images/close-button.svg'} onClick = { () => { setClose(!close) } }></Exit>
            <BackChoose for="file">{BgChoice}</BackChoose><Uploader type="file" id="file"/>
            <ColorChoose>{BgColor}</ColorChoose>
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
            <FolderName>{folderName} : <TextAreaForm><TextArea type="text" placeholder="폴더명을 입력해주세요."/></TextAreaForm> </FolderName>
            <Save>{save}</Save>
        </Setting>    
        : null
        }
        </>        
    )
};


const Setting = styled.div`
    width:90%; height:237.5px;
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

const Exit = styled.img`
    width:20px; height:20px;
    position:absolute;
    right:20px; top:20px;
    cursor:pointer;
`;
const Uploader = styled.input`
    display:none;
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
const TextAreaForm = styled.form`
    width:70%; height:100%; 
    display:inline-block;
`;
const TextArea = styled.input`
    width:100%; height:100%; 
`;

const ColorChoose = styled.div`
    width:100px; height:30px;
    background:#E8E1E1;
    border-radius:25px;
    line-height:30px;
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
    box-sizing:border-box;
    background-color:${props => props.color};
    cursor:pointer;
    margin-bottom:20px;
    border: ${props => props.state ? "4px solid #707070": "4px solid transparent" };

    @media all and (min-width:400px){
        width:40px; height:40px;
    }
    @media all and (min-width:600px){
        width:50px; height:50px;
    }
`;
const FolderName = styled.div`
    margin-bottom:20px;
`;
const Save = styled.div`
    width:20%; height:20px;
    line-height:20px;
    border:1px solid #707070;
    border-radius:25px;
    cursor:pointer;
`;

const Not = styled.div`
    width:0; height:0;
    display:none;
`;



export default AlogFolderMaking;