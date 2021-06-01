import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const langSearchOption2 = {
    ko:{//고정
        select:"최신 순",
        //고정
        menuList: ['최신 순', '조회 순', '퍼가기 많은 순']

    }
}
function SearchOption2() {
    const firstOption = langSearchOption2.ko.select;

    const [ oplist, setOplist] = useState(false);
    const onClick = () => {
        if (oplist === true) {
            setOplist(false);
        } else {
            setOplist(true);
        }
    };
    const menuList = langSearchOption2.ko.menuList;
    const [select, setSelect ] = useState(firstOption);


    return (
        <OptionBox>
            <OptionSelect onClick={onClick}>
                {select}
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9">
                    <path id="down" data-name="down" d="M6,0l6,9H0Z" transform="translate(12 9) rotate(180)" fill="#fe607e"/>
                </svg>
            </OptionSelect>
            <OptionUl oplist={oplist}>
                <OptionLi onClick={() => {setSelect(menuList[0]); setOplist(false);}}>{menuList[0]}</OptionLi>
                <OptionLi onClick={() => {setSelect(menuList[1]); setOplist(false);}}>{menuList[1]}</OptionLi>
                <OptionLi onClick={() => {setSelect(menuList[2]); setOplist(false);}}>{menuList[2]}</OptionLi>
            </OptionUl>
        </OptionBox>
    );
}

const slideDown = keyframes`
    from {
        height:0;
        transform:scaleY(0);
    }
    to {
        height:80px;
        transform:scaleY(1);
    }
`;
const slideUp = keyframes`
    from {
        height:80px;
        transform:scaleY(1);
    }
    to {
        height:0;
        transform:scaleY(0);
    }
`;

const OptionBox = styled.div`
    display:flex;
    justify-content: flex-end;
    width:95%;
    max-width:800px;
    padding:0.3125rem;
    position:relative;
    margin:0.625rem auto 0;
`;
const OptionSelect = styled.p`
    border:1px solid #fd0031;
    width:6.25rem;
    padding:0.375rem 0.625rem;
    font-size:0.875rem;
    cursor:pointer;
    display:flex;
    justify-content: space-between;
    align-items: center;
`;
const OptionUl = styled.ul`
    position:absolute;
    top:88%;
    right:5px;
    z-index:99;
    background:#ffffff;
    font-size:0.875rem;
    border:1px solid #333;
    transition:all 0.3s;
    transform-origin: center top;
    height:0;
    transform:scaleY(0);

    animation-duration: 0.2s;
    animation-timing-function: ease-out;
    animation-name: ${(props) => props.oplist === true ? slideDown : slideUp};
    animation-fill-mode: forwards;
`;
const OptionLi = styled.li`
    padding:0.3125rem;
    font-size:0.875rem;
    width:6.25rem;
    padding:0.375rem 0.625rem;
    cursor:pointer;
    transition:all 0.3s;

    &:hover {
        background:#eee;
    }
`;


export default SearchOption2;