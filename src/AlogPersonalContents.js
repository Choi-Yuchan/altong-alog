import React, {useState} from 'react';
import styled from 'styled-components';
import AlogFixSectionContents from './AlogFixSectionContents';
import AlogProfile from './alogprofile/AlogProfile';
import AlogProfileBg from './alogprofile/AlogProfileBG';
import AlogWordSection from './AlogWordSection';

function AlogPersonalcontents (props) {

    const [show, setShow] = useState(false);
    const click = () => {
        setShow(!show);
      }

    return (
        <>
            <AlogProfileBg></AlogProfileBg>
            <AlogProfile></AlogProfile>
            <AlogFixSectionContents show= { show } click ={ click } ></AlogFixSectionContents>
            <AlogWordSection show = { show } bgImg={ props.bgImg }></AlogWordSection>
        </>
    );
};

export default AlogPersonalcontents;