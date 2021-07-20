import React, {useState} from 'react';
import styled from 'styled-components';
import AlogTutorial from '../components/AlogTutorial';
import { useTranslation } from 'react-i18next';

function AlogFooter() {

    const {t} = useTranslation();
    const [Opend, SetOpen] = useState(false);
    const Opener = () => {
        SetOpen(!Opend);
    }

    return (
        <FooterBox>
            { Opend ? <AlogTutorial />: null }
            <FooterEl>
                {t('Footer_Text')[0]} <FooterA>(02)330-3000</FooterA> | {t('Footer_Text')[1]}: <FooterA>admin@altong.com</FooterA>
            </FooterEl>
            <FooterEl>
                <FooterA onClick={ () => { Opener() }}>{t('Footer_Text')[2]}</FooterA> | <FooterA href="http://www.altong.com/default/rule#b">{t('Footer_Text')[3]}</FooterA> | <FooterA href="http://www.altong.com/default/cs/customerService">{t('Footer_Text')[4]}</FooterA>
            </FooterEl>
            <FooterCopy>Copyleft 2017 Altong, Inc.</FooterCopy>
        </FooterBox>
    );
}

const FooterBox = styled.div`
    margin-top:3.125rem;
    margin-bottom:2rem;
`;
const FooterEl = styled.p`
    font-size:0.875rem;
    text-align:center;
    color:#707070;
    margin:0.3125rem 0;
`;
const FooterA = styled.a`
    color:#707070;
    cursor: pointer;
`;
const FooterCopy = styled.p`
    font-size:0.6875rem;
    text-align:center;
    color:#707070;
`;

export default AlogFooter;