import styled from "styled-components";

export const StyledList = styled.ul`
  width: 310px;
  float: left;
  font-family: "lato", sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  color: #fff;
  list-style: none;
  padding-left: 0;
  margin-left: 10px;
  margin-bottom: 15px;
`;

export const StyledText = styled.p`
  font-family: "Quicksand", sans-serif;
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
  margin-bottom: 10px;
  letter-spacing: 0.6px;
  color: #4e4e4e;
  text-transform: uppercase;
`;

export const StyledFontsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledFontSize = styled.div`
  li {
    color: #9a9a9a;
    width: 20px;
    height: 23px;
    text-align: center;
  }
`;
export const StyledFontColor = styled.div``;
export const StyledFonts = styled.div`
  li {
    cursor: pointer;
    background-color: #ffffff;
    font-size: 16px;
    color: #9a9a9a;
    height: 25px;
    position: relative;
    padding-left: 10px;
    font-family: "Quicksand", sans-serif;
  }
`;

export const StyledForm = styled.form`
  display: flex;
`;

export const StyledImage = styled.img`
  box-shadow: 0 6px 13px 2px rgb(0 0 0 / 61%);
  margin-bottom: 10px;
`;

export const StyledMessage = styled.p`
  position: absolute;
  top: 480px;
  left: 37px;
  color: white;
  white-space: pre-wrap;
  transform: rotate(-3deg);
  text-align: left;
  text-shadow: white 0px 0px 1px;
  font-family: ${(props) => `${props.font} , cursive`};
  font-size: ${(props) => props.size};
  max-width: 500px;
`;

export const StyledListItem = styled.li`
  cursor: pointer;
  background-color: #ffffff;
  font-size: 16px;

  font-family: "Quicksand", sans-serif;
  border: ${(props) =>
    props.isActive ? `#ef7ab1 solid 3px;` : `transparent solid 3px`};
  //   border-radius: 100%;
  line-height: 23px;
  color: #9a9a9a;
  position: relative;
  padding-left: 3px;
  padding-right: 2px;

  :hover {
    border: ${(props) =>
      props.isActive ? `#ef7ab1 solid 3px;` : `grey solid 3px`};
    color: #676666;
  }
`;
