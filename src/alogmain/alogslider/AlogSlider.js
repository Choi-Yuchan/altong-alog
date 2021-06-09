import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import AlogSliderEl from './AlogSliderEl';

function AlogSlider(props) {

    const totalSlide = 100/props.count; //컨텐츠 하나의 너비
    const [currentSlide, setCurrentSlide] = useState(0); // 이동 횟수
    const slideRef = useRef(null);
    const moveSize = totalSlide * currentSlide; //이동 거리
    const nextSlide = () => {
        if (currentSlide === props.count-2 ) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };
    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(totalSlide);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    }
    
    useEffect(() => {
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${moveSize}%)`;
    }, [currentSlide]);

    return (
        <SliderDiv>
            {
                props.count >= 3 && <RightArrow onClick={nextSlide}></RightArrow>
            }
            <SliderContainer>
                <SliderBox count={props.count} ref={slideRef}>
                    {props.content.map(content => (
                        <AlogSliderEl content={content} key={content.id} count={props.count} />
                    ))}
                </SliderBox>
            </SliderContainer>
            {
                currentSlide >= 1 && <LeftArrow onClick={prevSlide}></LeftArrow>
            }
            
        </SliderDiv>
    );
}

const SliderDiv = styled.div`
    width:100%;
    height:49vh;
    max-width:800px;
    margin:0 auto;
    position:relative;
`;
const SliderContainer = styled.div`
    height:100%;
    overflow:hidden;
`;
const SliderBox = styled.div`
    width:${props => props.count*50}%;
    height:100%;
    display:flex;
`;

const RightArrow = styled.div`
    width:2rem;
    height:5rem;
    transform:translateY(-50%) ;
    position:absolute;
    top:50%;
    right:0;
    z-index:9;
    cursor:pointer;
    box-sizing:border-box;
    display:flex;
    justify-content:flex-start;
    align-items:center;

    ::after {
        content:'';
        display:block;
        width:1.25rem;
        height:1.25rem;
        border-top:3px solid #333;
        border-right:3px solid #333;
        transform:rotate(45deg);
    }
`;
const LeftArrow = styled.div`
    width:2rem;
    height:5rem;
    position:absolute;
    top:50%;
    left:0;
    z-index:9;
    cursor:pointer;
    transform:translateY(-50%);
    display:flex;
    justify-content:flex-end;
    align-items:center;

    ::after {
        content:'';
        display:block;
        width:1.25rem;
        height:1.25rem;
        border-bottom:3px solid #333;
        border-left:3px solid #333;
        transform:rotate(45deg);
    }
`;



export default AlogSlider;