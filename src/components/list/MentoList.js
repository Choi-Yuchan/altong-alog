import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ActiveList = styled.li`
    padding: 0.625rem 0;
    font-size:1rem;
    border-top:1px solid #f0f0f0;
    width:100%;
    cursor:pointer;
    :last-child{
        border-bottom:1px solid #f0f0f0;
    }
`;

const ListTitle = styled.p`
    :hover,:active,:focus{
    color:#FF4A4A;
    font-weight:bold;
    }
`;

const Content = styled.div`
    max-height:140px;
    background-color:#eee;
    padding:0.625em 0.5em;
    margin-top:0.625rem;
    overflow:scroll;
    display:none;
    height:140px;
    
    ::-webkit-scrollbar {
    display: none; 
}
    @media (min-width: 480px){
        max-height:300px;
    }
`;

const ShowContent = styled(Content)`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const MentoProfile = styled(Link)`
    display: flex;
    justify-content:left;
    align-items: center;
    padding: 1.5em 0 0.375em 0.5em;
    text-decoration: none;
    flex-direction: row;
    color:#707070;
    flex-basis:50%;
    box-sizing:border-box;
    height:40px;
`;

const MentoImg = styled.img`
    width:40px;
    height:40px;
    padding-right:5px;
    border-radius: 50%;
    flex-basis:20%;
`;

const MentoID = styled.h5`
    font-size:0.75rem;
    font-weight:bold;
    text-align:center;
    flex-basis:80%;
`;

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (e) => {
       console.log(e.target.value);
    }
    return { value, onChange };
};

const Arrow = styled.img`
    position:absolute;
    right:30px;
    width:20px;
    transform:rotate(90deg);
`;
export const MentoList = ({title, arrow, bookmarkMento, closeNav}) => {
    const [isActive,setIsActive] = useState(false);

    const OpenList = () => {
        setIsActive(!isActive);
    }

    const name = useInput("");

    const onSubmit = (e) => {
        e.stopPropagation();
        console.log("submitted search result!");
    }

    return(  
        <ActiveList onClick={() => OpenList()}>
            <ListTitle>{title}<Arrow src={arrow}></Arrow></ListTitle>
            {isActive && 
            <ShowContent>
                {
                bookmarkMento.map((bookmark)=>{
                    return(
                    <MentoProfile to={bookmark.href} onClick={()=>{closeNav()}} key={bookmark.id}>
                        <MentoImg src={bookmark.profile} alt="프로필"></MentoImg>
                        <MentoID>{bookmark.nickname}</MentoID>
                    </MentoProfile>
                    )
                    })
                }
            </ShowContent>
            }       
        </ActiveList>   
    )
} 
