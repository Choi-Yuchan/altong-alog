import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

function PopSiren({siren, setSiren}) {
    const [ radioN , setRadioN ] = useState(0);
    const [ reason , setReason ] = useState("");

    const handleChange = (e) => {
        setReason(e.target.value);
    }
    const cancel = () => {
        setSiren(false);
    }


    return (
        <>
        {siren === true &&
        <Wrap onClick={cancel}>
        <PopReportDiv>
            <PopReport><ReportIcon src={process.env.PUBLIC_URL + '/images/report_icon.png'}/>신고</PopReport>
            <ReportWrap>
                <ReportForm>
                    <ReportFormContents>
                            <ContentsRow>
                                <ContentsSubtitle>제보자</ContentsSubtitle>
                                <ContentsInfo>알통</ContentsInfo>
                            </ContentsRow>
                            <ContentsRow>
                                <ContentsSubtitle>내용</ContentsSubtitle>
                                <ContentsInfo>알통의 발견 연예의 발견2</ContentsInfo>
                            </ContentsRow>
                    </ReportFormContents>
                </ReportForm>
                <ReportReason>
                    <ReasonTitle>- 신고사유 선택</ReasonTitle>
                    <ReasonContainer>
                        <ReasonColumn>
                            <ReasonList>
                                <ARInput type="radio" name="H_Reason"
                                    onClick={() => {
                                        setRadioN("1")
                                    }}
                                    defaultChecked={radioN === "1" ? true : false}
                                />
                                <ReasonLabel>저작권 침해</ReasonLabel>
                            </ReasonList>
                            <ReasonList>
                                <ARInput type="radio" name="H_Reason"
                                    onClick={() => {
                                        setRadioN("2")
                                    }}
                                    defaultChecked={radioN === "2" ? true : false}
                                />
                                <ReasonLabel>유해성</ReasonLabel>
                            </ReasonList>
                            <ReasonList>
                                <ARInput type="radio" name="H_Reason"
                                    onClick={() => {
                                        setRadioN("3")
                                    }}
                                    defaultChecked={radioN === "3" ? true : false}
                                />
                                <ReasonLabel>장난성</ReasonLabel>
                            </ReasonList>
                            <ReasonList>
                                <ARInput type="radio" name="H_Reason"
                                    onClick={() => {
                                        setRadioN("4")
                                    }}
                                    defaultChecked={radioN === "4" ? true : false}
                                />
                                <ReasonLabel>중복성</ReasonLabel>
                            </ReasonList>
                        </ReasonColumn>
                        <ReasonColumn>
                            <ReasonList>
                                <ARInput type="radio" name="H_Reason"
                                    onClick={() => {
                                        setRadioN("5")
                                    }}
                                    defaultChecked={radioN === "5" ? true : false}
                                />
                                <ReasonLabel>비속어/반말</ReasonLabel>
                            </ReasonList>
                            <ReasonList>
                                <ARInput type="radio" name="H_Reason"
                                    onClick={() => {
                                        setRadioN("6")
                                    }}
                                    defaultChecked={radioN === "6" ? true : false}
                                />
                                <ReasonLabel>비 정보/지식</ReasonLabel>
                            </ReasonList>
                            <ReasonList>
                                <ARInput type="radio" name="H_Reason"
                                    onClick={() => {
                                        setRadioN("7")
                                    }}
                                    defaultChecked={radioN === "7" ? true : false}
                                />
                                <ReasonLabel>음해/비방</ReasonLabel>
                            </ReasonList>
                            <ReasonList>
                                <ARInput type="radio" name="H_Reason"
                                    onClick={() => {
                                        setRadioN("8")
                                    }}
                                    defaultChecked={radioN === "8" ? true : false}
                                />
                                <ReasonLabel>기타</ReasonLabel>
                            </ReasonList>
                        </ReasonColumn>
                    </ReasonContainer>
                    <ReasonTextBox>
                        <ReTextarea maxlength="1000" placeholder="altong" value={reason} onChange={(e) => {handleChange(e)}}/>
                    </ReasonTextBox> 
                </ReportReason>
                <WarningDiv>
                    <WarningTitle>WARNING</WarningTitle>
                    <WarningPara>무고한 게시물을 신고하실 경우 향후 사이트 이용시 불이익이 있을 수도 있으니 신중을 기해주세요.</WarningPara>
                </WarningDiv>
                <ReportBtnBox>
                    <DRInput value="취소"
                    onChange={(e) => {handleChange(e)} }
                    onClick={cancel}
                    />
                    <DSubmit value="제출"
                     onClick={cancel}
                    onChange={(e) => {handleChange(e)}} 
                    />
                </ReportBtnBox>
            </ReportWrap>
        </PopReportDiv>
        </Wrap>
    }
    </>
    );
}
  
export default PopSiren;

const Wrap = styled.div`
    width:100vw; height:100vh;
    position:fixed;
    left:0; top:0;
    background:transparent;
    z-index: 1000;
`;
const PopReportDiv = styled.div`
    width: 90%;
    max-width: 520px;
    background: #fff;
    box-shadow: 0 4px 4px rgb(0 0 0 / 20%);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    z-index: 1001;
`;
const ReportIcon = styled.img`
    width: 19px;
    margin-right: 5px;
    margin-bottom: -3px;
`;
const PopReport = styled.h4`
    text-align: center;
    font-size: 16px;
    letter-spacing: -0.5px;
    width: 100%;
    line-height: 37px;
    background: #fff;
    box-shadow: 0 2px 8px rgb(0 0 0 / 20%);
`
const ReportReason = styled.article`
`;

const ReasonLabel = styled.label`
    line-height:2;
`;
const ReasonTextBox = styled.div`
    line-height: 28px;
    font-size: 15px;
    margin:0 auto;
`
const ReasonTitle = styled.p`
    font-size: 14px;
    font-weight: bold;
    padding: 5px;
`
const ReasonContainer = styled.div`
    width: 100%;
    display: flex;
`
const ReasonColumn = styled.div`
    display:flex;
    flex-direction: column;
    width: 50%;
    padding-left:0.5rem;
`;
const ReTextarea = styled.textarea`
    resize: none;
    width: 100%;
    margin-top: 13px;
    box-sizing: border-box;
    padding: 5px 10px;
    font-size: 14px;
    letter-spacing: -0.5px;
    line-height: 22px;
    border: 1px solid #cacaca;
    min-height: 70px;
    outline: none;
    ::placeholder{
        font-size:12px;
    }
`
const ReasonList = styled.div`
    font-size: 15px;
`
const ARInput = styled.input`
    margin: 0 5px;
    outline: none;
`
const ReportWrap = styled.main`
    padding: 20px;
`
const ReportForm = styled.article`
    border: 1px dashed #989898;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
`
const ReportFormContents = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-flow:column wrap;
    width: 100%;
`
const ContentsRow = styled.div`
    display: flex;
    width: 100%;
    line-height:1.8;
    align-items: center;
`
const ContentsSubtitle = styled.h6`
    font-size: 14px;
    font-weight: bold;
    width: 25%;
    padding-left: 10px;
    @media (min-width:480px){
        width:16%;
    }
`
const ContentsInfo = styled.p`
    font-size: 15px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 75%;
    @media (min-width:480px){
        width: 82%;
    }
`
const ReportBtnBox = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    margin-top: 1rem;
    width: 100%;
`
const DRInput = styled.input`
    text-align: center;
    width: 40%;
    padding: 6px 0;
    background: #fff;
    border: 2px solid #fd0031;
    font-size: 14px;
    border-radius: 20px;
    color: #fd0031;
    font-weight: bold;
    outline: none;
    cursor: pointer;
`
const DSubmit = styled(DRInput)`
    border: 2px solid #2bb330;
    color: #2bb330;
`
const WarningDiv = styled.div`
    text-align: center;
    color: #989898;
`
const WarningPara = styled.p`
    font-size: 11px;
    @media (min-width: 480px){
        font-size:14px;
    }
`
const WarningTitle = styled.p`
    font-size: 20px;
    margin-bottom: 5px;
    font-family: 'Material Icons';
`