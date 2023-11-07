import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "src/components/atoms/Input/Input.jsx";
import Heading from "src/components/atoms/Heading/Heading.jsx";
import Paragraph from "src/components/atoms/Paragraph/Paragraph.jsx";
import {UserPageTemplate} from "src/template/UserPageTemplate.jsx";

const StyleWrapper = styled.div`
  padding: 25px 100px 25px 50px;
`

const StyleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // 3 równe kolumny
  grid-gap: 30px;
`

const StylePageHeader = styled.div`
  margin: 25px 0 50px 0;
`

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  &::first-letter {
    text-transform: uppercase;
  }
`

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({theme}) => theme.bold};
`
export const GridTemplate = ({children, pageType}) => (
    <UserPageTemplate pageType={pageType}>
        <StyleWrapper>
            <StylePageHeader>
                <Input search placeholder={"search"}/>
                <StyledHeading big as={'h1'}>{pageType}</StyledHeading>
                <StyledParagraph>6 {pageType}</StyledParagraph>
            </StylePageHeader>
            <StyleGrid>
                {children}
            </StyleGrid>
        </StyleWrapper>
    </UserPageTemplate>
)

GridTemplate.propTypes = {
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
    pageType: PropTypes.oneOf(['notes', 'twitters', 'articles'])
};

GridTemplate.defaultProps = {
    pageType: 'notes'
};