import styled, { css } from "styled-components";

const maxWidthMobile = "575px";
const maxWidthMedium = "900px";

export const StyledText = styled.p`
  font-family: "Audiowide", cursive;
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
  margin-bottom: 10px;
  letter-spacing: 0.6px;
  color: #000;
  text-transform: uppercase;

  @media (max-width: ${maxWidthMobile}) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const StyledFontsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 390px;

  @media (max-width: ${maxWidthMobile}) {
    width: 100%;
  }
`;
export const StyledFontSize = styled.div`
  li {
    color: #737272;
    width: 28px;
    height: 23px;
    text-align: center;
  }
`;

export const StyledFonts = styled.div`
  li {
    cursor: pointer;
    background-color: #ffffff;
    font-size: 16px;
    color: #737272;
    height: 25px;
    position: relative;
    padding: 3px;
    padding-left: 10px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: space-around;
  @media (max-width: ${maxWidthMedium}) {
    display: block;
  }
`;

export const StyledImage = styled.img`
  box-shadow: 0 6px 13px 2px rgb(0 0 0 / 61%);

  width: 500px;

  @media (max-width: ${maxWidthMobile}) {
    width: 100%;
  }
`;

export const StyledMessage = styled.p`
  position: absolute;
  top: 15%;
  left: 10%;
  color: white;
  white-space: pre-wrap;
  transform: rotate(-3deg);
  text-align: left;
  text-shadow: white 0px 0px 1px;
  font-family: ${(props) => `${props.font} , cursive`};
  font-size: ${(props) => props.size};
  max-width: 68%;
  overflow: hidden;
  max-height: 58%;
`;

const listItemStyles = css`
  cursor: pointer;
  background-color: #ffffff;
  font-size: 16px;
  margin-top: 4px;

  border: ${(props) =>
    props.isActive ? `#050505 solid 2px;` : `#ef69a5 solid 2px`};
  line-height: 23px;
  color: #737272;
  position: relative;
  padding-left: 3px;
  padding-right: 2px;

  :hover {
    border: ${(props) =>
      props.isActive ? `#050505 solid 2px;` : `grey solid 2px`};
    color: #676666;
  }
`;

export const StyledListItem = styled.li`
  ${listItemStyles}
`;

export const StyledListItemShadows = styled.li`
  font-family: "Shadows Into Light", cursive;
  ${listItemStyles}
`;
export const StyledListItemFlower = styled.li`
  font-family: "Indie Flower", cursive;
  ${listItemStyles}
`;
export const StyledListItemRock = styled.li`
  font-family: "Rock Salt", cursive;
  ${listItemStyles}
`;

const listStyles = css`
  font-family: "Audiowide", cursive;
  font-size: 14px;
  text-transform: uppercase;
  color: #fff;
  list-style: none;
  padding-left: 0;
  margin-left: 10px;
  margin-bottom: 15px;
`;
export const StyledList = styled.ul`
  ${listStyles}

  @media (max-width: ${maxWidthMobile}) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const StyledSizeList = styled.ul`
  ${listStyles}
  display: flex;

  @media (max-width: ${maxWidthMobile}) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 400px;
  margin-left: 10px;

  @media (max-width: ${maxWidthMedium}) {
    width: auto;
    margin-left: 0;
    padding: 10px;
  }
`;

export const StyledTextarea = styled.textarea`
  outline: none;
  color: #4e4e4e;
  white-space: pre-wrap;
  display: block;
  width: 100%;
  font-family: "Open Sans", cursive;
  font-size: 14px;
  margin-top: 10px;
  resize: none;
  border: none;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 0;
  &::placeholder {
    color: #b3b1b1;
  }
  @media (max-width: ${maxWidthMedium}) {
    height: 140px;
  }
`;

export const StyledPostcardWrapper = styled.div`
  width: 500px;
  height: 694px;
  margin: 0;
  border: 0;
  padding: 0;
  @media (max-width: ${maxWidthMedium}) {
    margin: auto;
  }

  @media (max-width: ${maxWidthMobile}) {
    width: 100%;
    height: auto;
  }
`;

export const StyledApp = styled.div`
  background-color: #ef69a5;

  @media (max-width: ${maxWidthMobile}) {
    margin: 0;
  }
`;

export const StyledPostcardMessage = styled.div`
  position: relative;
`;

export const StyledButton = styled.input`
  border-style: solid;

  color: white;
  font-size: 16px;
  background-color: #050505;
  border: 0;
  border-radius: 0;
  -webkit-appearance: none;
  cursor: pointer;
  font-family: "Audiowide", cursive;
  padding: 10px;
  text-transform: uppercase;
  width: 380px;
  margin-left: 10px;
  @media (max-width: ${maxWidthMobile}) {
    width: 100%;
    margin-left: 0;
  }
`;

export const StyledLabel = styled.label`
  font-family: "Audiowide", cursive;
  color: #000;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-right: 10px;

  @media (max-width: ${maxWidthMobile}) {
    margin-left: 0;
    margin-right: 0;
  }
`;
