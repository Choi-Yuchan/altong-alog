import React from 'react';
import styled from 'styled-components';



const NewTxt = styled.div`
    width: 100%;
    display:flex;
    padding: 15px 20px;
    box-sizing: border-box;
    margin: 0 auto;
    color: #333;
    align-items:center;
    justify-content: space-around;
    font-size:1rem;
    text-align:center;
    flex-direction: column;
    margin-top:3rem;

`;

const Line = styled.span`
    margin-top:1rem;
    width:80%;
    height:2px;
    background-color:#eeeeee;
`;

const langNew = {
    ko:{
        NewTxt : ["Vivien의 최근 게시물"],
    }
};



function New() {

    const newT = langNew.ko.NewTxt;

    return (
        <>
            <NewTxt>
                    {newT}
                    <Line></Line>
            </NewTxt>
            
        </>
    );
};



export default New;

