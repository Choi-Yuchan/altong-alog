import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import AlogSliderEl from './AlogSliderEl';
import AlogPage from '../../AP/AlogPage';

function AlogSlider(props) {

    const totalSlide = props.count/2;
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);
    const nextSlide = () => {
        if (currentSlide >= totalSlide) {
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
    const moveSize = currentSlide*2;

    useEffect(() => {
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${moveSize}0%)`;
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
    width:1.25rem;
    height:1.25rem;
    border-top:3px solid #333;
    border-right:3px solid #333;
    transform:translateY(-50%) rotate(45deg);
    position:absolute;
    top:50%;
    right:0.625rem;
    z-index:9;
    cursor:pointer;
`;
const LeftArrow = styled.div`
    width:1.25rem;
    height:1.25rem;
    border-top:3px solid #333;
    border-left:3px solid #333;
    position:absolute;
    top:50%;
    left:0.625rem;
    z-index:9;
    cursor:pointer;
    transform:translateY(-50%) rotate(-45deg);
`;



export default AlogSlider;