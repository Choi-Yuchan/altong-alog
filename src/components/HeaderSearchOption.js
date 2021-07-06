import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function HeaderSearchOption(props) {

    const [select, setSelect] = useState(false);
    const array = [
        {
            id:1,
            text: '제목'
        },
        {
            id:2,
            text: '내용'
        },
        {
            id:3,
            text: '작성자'
        },
        {
            id:4,
            text: '제목+내용'
        },
    ]

    const [change, setChange] = useState(array[0].text);
    useEffect(()=>{
        if (props.openInput === false) {
            setSelect(false);
        }
    }, [props.openInput])

    return (
        <OptionDiv>
            <OptionSelect onClick={()=>{setSelect(!select)}}>
                {change}
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9">
                    <path id="down" data-name="down" d="M6,0l6,9H0Z" transform="translate(12 9) rotate(180)" fill="#fe607e"/>
                </svg>
            </OptionSelect>
            <OptionBox select={select}>
                {
                    array.map((list)=>{
                       return <OptionList key={list.id} onClick={()=>{setChange(list.text); setSelect(!select); props.setSearchOption(list.id)}}>{list.text}</OptionList>
                    })
                }
            </OptionBox>
        </OptionDiv>
    );
}

const OptionDiv = styled.div`
    display:flex;
    flex-direction:column;
    position:relative;
`;
const OptionSelect = styled.div`
    display:flex;
    white-space:nowrap;
    align-items:center;
    justify-content:space-between;
    cursor:pointer;
    height:30px;
    padding:0 5px;
    box-sizing:border-box;
    border:1px solid #999;
    background:#fff;
`;
const OptionBox = styled.div`
    background:#fff;
    height:${props => props.select ? '120px;':'0'};
    overflow:hidden;
    transition:all 0.3s;
    border-left:1px solid #999;
    border-right:1px solid #999;
`;
const OptionList = styled.div`
    display:flex;
    white-space:nowrap;
    align-items:center;
    cursor:pointer;
    height:30px;
    padding:0 5px;
    border-bottom:1px solid #aaa;
    box-sizing:border-box;
`;

export default HeaderSearchOption;