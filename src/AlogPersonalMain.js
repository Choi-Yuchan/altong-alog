import React, {useState} from 'react';
import styled from 'styled-components';
import AlogFixSectionFolder from './AlogFixSectionFolder';
import AlogFolderSection from './AlogFolderSection';
import AlogProfile from './alogprofile/AlogProfile';
import AlogProfileBg from './alogprofile/AlogProfileBG';

function AlogPersonalMain (props) {

    const [show, setShow] = useState(false);
    const click = () => {
        setShow(!show);
      }

    return (
        <>
            <AlogProfileBg></AlogProfileBg>
            <AlogProfile></AlogProfile>
            <AlogFixSectionFolder show = { show } click ={ click }></AlogFixSectionFolder>
            <AlogFolderSection show = { show } bgImg={props.bgImg}></AlogFolderSection>
        </>
    );
};

export default AlogPersonalMain;