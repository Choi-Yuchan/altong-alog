import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';

function AlogFolder (props) {
    const [shows, setShows] = useState(true);

    return ( 
        
       <Folder>
           <Link to="/personalContents">
           { props.show &&
           <Trash src={process.env.PUBLIC_URL + '/images/trash2.png'} onClick={ function(e){e.preventDefault(); window.confirm('정말로 삭제하시겠습니까?')} }></Trash>
        }
           <Bg><BgImg src={process.env.PUBLIC_URL + '/images/' + props.bgImg}></BgImg></Bg> 
           <Title><Word>전체보기<br/>(<span>1</span>)</Word></Title>
           <Language show={shows} src={ shows ? process.env.PUBLIC_URL + '/images/language.svg' : process.env.PUBLIC_URL + '/images/language_on.svg'} 
            onClick={ 
                (e)=> {
                    e.preventDefault();
                    setShows(!shows);
                }
            }></Language>
             </Link>
       </Folder>
      
    )
};

const Folder = styled.div`
    flex-basis:43%; height:200px;
    background:#ccc;
    border:1px solid rgba(0,0,0,.2);
    margin-bottom:10px;
    font-size:1em;
    position:relative;
    cursor:pointer;
    z-index:1;

    @media all and (min-width:800px){
        font-size:1.250em;
    }
`;

const Trash = styled.img`
    width:20px; height:30px; 
    position:absolute;
    left:5px; top:5px;
    z-index:100;
`;
const Bg = styled.div`
    width:100%; height:50%;
`;
const BgImg = styled.img`
    width:100%; height:100%;
    object-fit:cover;
    
`;
const Title = styled.div`
    width:100%; height:50%;
    background:#fefefe;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Word = styled.span`
    width:60%;
    text-align:center;
    position:relative;
    z-index:8;
    color:#707070;
`;

const Language = styled.img`
    width:25px; height:25px;
    position:absolute;
    right:10px; bottom:10px;
    z-index:10;
`;

export default AlogFolder;