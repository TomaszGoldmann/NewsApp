import React, {useEffect, useState} from "react";
import {DetailsTemplate} from "src/template/DetailsTemplate.jsx";
import {NavLink, useLocation, useParams} from "react-router-dom";
import {articles} from "src/views/Articles.jsx";
import {twitters} from "src/views/Twitters.jsx";
import {notes} from "src/views/Notes.jsx";
import Paragraph from "src/components/atoms/Paragraph/Paragraph.jsx";
import Button from "src/components/atoms/Button/Button.jsx";
import styled, {css} from "styled-components";
import Heading from "src/components/atoms/Heading/Heading.jsx";
import LinkIcon from "src/assets/icons/link.svg";

const StyledWrapper = styled.div`
  max-width: 60vw;
  min-height: 330px;
  padding: 25px 35px;
  position: relative;
`

const InnerWrapper = styled.div`
  position: relative;

  ${({flex}) =>
          flex && css`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          `
  }
`

const DateInfo = styled.div`
  margin: 0 0 5px;
  font-weight: ${({theme}) => theme.bold};
  font-size: ${({theme}) => theme.fontSize.xs};
`

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`

const StyledButton = styled(Button)`
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({theme}) => theme.twitters};
  border-radius: 50%;
  position: absolute;
  right: 25px;
  top: 25px;
  z-index: 1;
`

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50%;
  background: white url(${LinkIcon}) no-repeat;
  background-size: 50%;
  background-position: 50%;
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
`

export const DetailPage = ({pageType}) => {
    const location = useLocation();
    const { id } = useParams();
    const [pageDetailType, setPageDetailType] = useState('notes')
    const [pageDetailData, setPageDetailData] = useState(notes)

    useEffect(() => {
        console.log(pageDetailData)
        if (location.pathname.includes("articles")) {
            setPageDetailType('articles')
            setPageDetailData(articles)
        } else if (location.pathname.includes("twitters")) {
            setPageDetailType('twitters')
            setPageDetailData(twitters)
        } else {
            setPageDetailType('notes')
            setPageDetailData(notes)
        }
    }, [location])

    return (
        <DetailsTemplate pageType={pageDetailType}>
            <StyledWrapper onClick={()=>console.log(pageDetailData)}>
                <InnerWrapper>
                    <StyledHeading>{pageDetailData[id].title}</StyledHeading>
                    <DateInfo>{pageDetailData[id].created}</DateInfo>
                    {pageDetailType === 'twitters' && <StyledAvatar src={`${pageDetailData[id].twitterName}`}/>}
                    {pageDetailType === 'articles' && <StyledLinkButton href={pageDetailData[id].articleUrl}/>}
                </InnerWrapper>
                <InnerWrapper flex>
                    <Paragraph>{pageDetailData[0].content}</Paragraph>
                    <StyledButton as={NavLink} to={`/${pageDetailType}`} secondary={true}>Back</StyledButton>
                </InnerWrapper>
            </StyledWrapper>
        </DetailsTemplate>
    );
};