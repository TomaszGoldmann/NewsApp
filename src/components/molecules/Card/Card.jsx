import PropTypes from "prop-types";
import styled, {css} from "styled-components";
import Paragraph from "src/components/atoms/Paragraph/Paragraph.jsx";
import Button from "src/components/atoms/Button/Button.jsx";
import Heading from "src/components/atoms/Heading/Heading.jsx";
import LinkIcon from "src/assets/icons/link.svg"

const StyledWrapper = styled.div`
  min-height: 330px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`

const InnerWrapper = styled.div`
  padding: 17px 30px;
  background-color: ${({activeColor, theme}) => activeColor ? theme[activeColor] : 'white'};
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
  max-width: 200px;
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

export const Card = ({cardType, title, created, twitterName, articleUrl, content}) => (
    <StyledWrapper>
        <InnerWrapper activeColor={cardType}>
            <StyledHeading>{title}</StyledHeading>
            <DateInfo>{created}</DateInfo>
            {cardType === 'twitters' && <StyledAvatar src={`${twitterName}`} />}
            {cardType === 'articles' && <StyledLinkButton href={articleUrl}/>}
        </InnerWrapper>
        <InnerWrapper flex>
            <Paragraph>{content}</Paragraph>
            <Button secondary={true}>Remove</Button>
        </InnerWrapper>
    </StyledWrapper>
)

Card.propTypes = {
    cardType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
    title: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    twitterName: PropTypes.string,
    articleUrl: PropTypes.string,
    content: PropTypes.string.isRequired,
};

Card.defaultProps = {
    cardType: 'notes',
    twitterName: null,
    articleUrl: null
}
