import React, {useState} from 'react';
import styled from 'styled-components';
import AlogTutorial from '../AlogTutorial';

function AlogFooter() {

    const footer = ["고객만족 직통전화", "메일", "이용약관", "개인정보취급방침", "고객센터"]
    const [Opend, SetOpen] = useState(false);
    const Opener = () => {
        SetOpen(!Opend);
    }

    const langFooter = {
        ko:{
            call:"고객만족 직통전화",
            mail:"메일",
            use:"이용약관",
            personal:"개인정보취급방침",
            customer:"고객센터"
        }
    }

        const call = langFooter.ko.call;
        const mail = langFooter.ko.mail;
        const use = langFooter.ko.use;
        const personal = langFooter.ko.personal;
        const customer = langFooter.ko.customer;

    return (
        <FooterBox>
            { Opend ? <AlogTutorial />: null }
            <FooterEl>
                {call} <FooterA>(02)330-3000</FooterA> | {mail}: <FooterA>admin@altong.com</FooterA>
            </FooterEl>
            <FooterEl>
                <FooterA onClick={ () => { Opener() }}>{use}</FooterA> | <FooterA href="http://www.altong.com/default/rule#b">{personal}</FooterA> | <FooterA href="http://www.altong.com/default/cs/customerService">{customer}</FooterA>
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