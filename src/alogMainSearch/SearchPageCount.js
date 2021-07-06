import React from 'react';
import styled from 'styled-components';

function PageCount2({pageNumber,currentPage, setCurrentPage, count, nextPage, prevPage, firstPage, lastPage }) {

    return (
        count >= 1 &&
        <CountBox>
            {currentPage >= 6 &&
                <LeftBox>
                    <LeftIcon2 src={process.env.PUBLIC_URL + '/images/strong_left_arrow.svg'} onClick={firstPage}></LeftIcon2>
                    <LeftIcon1 src={process.env.PUBLIC_URL + '/images/left_arrow.svg'} onClick={prevPage}></LeftIcon1>
                </LeftBox>           
            }
            <CountNumber>
                {pageNumber.map(number => (
                    <ShowNumber key={number} onClick={()=>{setCurrentPage(number); }} className={number === currentPage ? "focus":"blur"}>{number}</ShowNumber>
                ))}
                
            </CountNumber>
            {count >= 6 &&
                <RightBox>
                    <RightIcon1 src={process.env.PUBLIC_URL + '/images/right_arrow.svg'} onClick={nextPage}></RightIcon1>
                    <RightIcon2 src={process.env.PUBLIC_URL + '/images/strong_right_arrow.svg'} onClick={lastPage}></RightIcon2>
                </RightBox>
            }
        </CountBox>
    );
}

const CountBox = styled.div`
    width:90%;
    max-width:800px;
    margin:0 auto;
    height:50px;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const LeftBox = styled.div`
    width:20%;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const LeftIcon2 = styled.img`
    margin-right:1rem;
    cursor:pointer;
`;
const LeftIcon1 = styled.img`
    cursor:pointer;
`;
const CountNumber = styled.div`
    width:40%;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    .focus {
        color:#fd0031;
    }
    .blur {
        color:#333;
    }
`;
const ShowNumber = styled.span`
    cursor:pointer;
    transition:all 0.3s;
    :hover {
        color:#fd0031;
    }
`;
const RightBox = styled.div`
    width:20%;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const RightIcon1 = styled.img`
    cursor:pointer;
`;
const RightIcon2 = styled.img`
    margin-left:1rem;
    cursor:pointer;
`;

export default PageCount2;