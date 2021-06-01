import React, { useState } from 'react';
import styled from 'styled-components';
import AlogFolder from './AlogFolder';
import AlogFolderMaking from './AlogFolderMaking';


function AlogFolderSection (props) {

    const [Open, SetOpen] = useState(false);
    const Opener = () => {
        SetOpen(!Open);
    }
    const selfLogin = true;
    const langFolderSection = {
        ko:{
            make1:"폴더를",
            make2:"생성해주세요"
        }
    }
    const make1=langFolderSection.ko.make1;
    const make2=langFolderSection.ko.make2;

    return ( 
       <Frame>
           <SearchWrap>
           <AlogFolder show = { props.show } bgImg={props.bgImg}></AlogFolder>
           { selfLogin === true && 
           <Making onClick={ () => Opener()  }>{make1}<br/>{make2}<AddImage src={process.env.PUBLIC_URL + '/images/add.png'}/></Making>}
           { Open ? <AlogFolderMaking />: null }
           </SearchWrap>
       </Frame>
    )
};

const SearchWrap = styled.div`
    width:90%;
    margin:0 auto;
    display:flex;
    justify-content: space-between;
`;

const Frame = styled.div`
    width:100%; height:auto;
    box-sizing:border-box;
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
`;

const Making = styled.div`
    flex-basis:43%; height:200px;
    background:#ccc;
    border:1px solid rgba(0,0,0,.2);
    font-size:1em;
    display:flex;
    text-align:center;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    cursor:pointer;
`;

const AddImage = styled.img`
    width:40px; height:40px;
`; 

export default AlogFolderSection;