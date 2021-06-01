import React from 'react';
import styled from 'styled-components';

function AlogProfileBg () {
    return ( 
        <Back>
            <BackImg src={process.env.PUBLIC_URL + '/images/background.jpg'}></BackImg>
        </Back>
    )
};

const Back = styled.div`
    width:100%; height:50vw;
    object-fit:cover;
    object-position: center;
    margin:0 auto;


    @media all and (min-width:441px) {
        height:221px;
    }
    @media all and (min-width:800px) {
        width:800px;
    }
`;

const BackImg = styled.img `
    width:100%; height:100%;
`;

export default AlogProfileBg;