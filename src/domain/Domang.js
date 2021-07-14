import React, { useState } from 'react';
import styled from 'styled-components';

const Domanga = styled.div`
    position:fixed;
    width:100%; height:100%;
    left:0; top:0;
    z-index:10000;
    background: #fff;
`;

const Main = styled.img`
    width:10px; height:10px;
    position:absolute;
    left:98%; top:95%;
    transform: translate(-50%);
    cursor:pointer;
`;

const Cheer = styled.div`
    text-align: center;
    font-size:65px;
    position:absolute;
    left:50%; top:50%;
    transform: translate(-50%);
    line-height: 2;
`;

const LastChance = styled.p`
    font-size:10px; 
    color:#fff;
`;
const Domang  = () => {

    const [alert, setAlert] = useState("");

    const goodLuck = () => {
        setAlert("good");
        console.log("바보... 그러지마.... ㄷㅁㅊ..");
    }
    const badLuck = () => {
        setAlert("bad");
        console.log("현명해...하지만 ㄷㅁㅊ!");
    }
    function confirmModal() {
        if (window.confirm("열심히 일하고 계십니까?")) {
            goodLuck();
        }else{
            badLuck();
        }
    }

    return(
     <Domanga>
         { alert === "" &&
         <Main src={process.env.PUBLIC_URL + '/images/logo.png'} onClick={()=>{confirmModal()}}></Main>
        }
         { alert === "good" &&
         <Cheer>
            <p>알통을 위해 계속 열심히 해주세요!</p>
            <p>화이통!</p>
            <LastChance>개발자 답게 확인하세요.</LastChance>     
        </Cheer>
        }
        { alert === "bad" &&
         <Cheer>
            <p>조금만 더 힘내세요, 할 수 있어요!</p>
            <p>화이통!</p>     
            <LastChance>개발자 답게 확인하세요.</LastChance>
        </Cheer>
        }
     </Domanga> 
    )
};

export default Domang;