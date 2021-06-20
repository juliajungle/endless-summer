import { useState, useRef } from "react";
import "./App.css";
import postcard from "./images/postcard.jpg";
import postcardBack from "./images/postcard-back.png";

import {
  StyledFontSize,
  StyledFonts,
  StyledFontsWrapper,
  StyledForm,
  StyledList,
  StyledImage,
  StyledText,
  StyledMessage,
  StyledListItem,
  StyledWrapper,
  StyledTextarea,
  StyledModal,
  StyledPostcardWrapper,
  StyledApp,
  StyledPostcardMessage,
  StyledButton,
  StyledLabel,
  StyledSizeList,
  StyledListItemShadows,
  StyledListItemFlower,
  StyledListItemRock,
} from "./styles";

import html2canvas from "html2canvas";

const fontSizes = [
  { display: "XS", size: "14px" },
  { display: "S", size: "18px" },
  { display: "M", size: "20px" },
  { display: "L", size: "24px" },
];

const placeholderText = "Should have known at the end of summer";

function App() {
  const [message, setMessage] = useState("");
  const [fontSize, setFontSize] = useState("14px");
  const [font, setFont] = useState("Shadows Into Light");
  const componentRef = useRef();
  const testRef = useRef();
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    // download postcard
    event.preventDefault();
    document.getElementById("test").scrollIntoView();

    canvas();
  };

  const handleFontSize = (value) => {
    setFontSize(value);
  };

  const handleFont = (value) => {
    setFont(value);
  };

  const saveAs = (blob, fileName) => {
    var elem = window.document.createElement("a");
    elem.href = blob;
    elem.download = fileName;
    elem.style = "display:none;";
    (document.body || document.documentElement).appendChild(elem);
    if (typeof elem.click === "function") {
      elem.click();
    } else {
      elem.target = "_blank";
      elem.dispatchEvent(
        new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: true,
        })
      );
    }
    URL.revokeObjectURL(elem.href);
    elem.remove();
  };

  const canvas = () => {
    const input = document.getElementById("test");
    const width = input.clientWidth;
    const height = input.clientHeight;
    console.log("??", width, height);

    html2canvas(input, {
      width: width,
      height: height,
    }).then((canvas) => {
      var resizedCanvas = document.createElement("canvas");

      var resizedContext = resizedCanvas.getContext("2d");
      // get width of screen for mobile
      resizedCanvas.height = height + 40;
      resizedCanvas.width = width + 20;
      resizedContext.drawImage(canvas, 0, 0, width + 20, height);
      resizedContext.scale(0.5, 0.5);
      var image = resizedCanvas.toDataURL("image/jpg", 1);

      saveAs(image, "endless-summer.jpg");
    });
  };

  return (
    <StyledApp>
      <StyledForm onSubmit={handleSubmit}>
        <StyledPostcardWrapper>
          <div ref={componentRef} id="test">
            <StyledImage width="100%" src={postcard} />
            <StyledPostcardMessage>
              <StyledImage width="100%" src={postcardBack} />
              <StyledMessage size={fontSize} font={font}>
                {message}
              </StyledMessage>
            </StyledPostcardMessage>
          </div>
        </StyledPostcardWrapper>

        <StyledWrapper>
          <StyledLabel>
            Your message
            <StyledTextarea
              placeholder={placeholderText}
              cols="30"
              rows="10"
              name="message"
              value={message}
              onChange={handleMessageChange}
            />
          </StyledLabel>
          <StyledFontsWrapper>
            <StyledFonts>
              <StyledText>Select font</StyledText>
              <StyledList>
                <StyledListItemShadows
                  isActive={font === "Shadows Into Light"}
                  onClick={() => handleFont("Shadows Into Light")}
                >
                  Shadows Into Light
                </StyledListItemShadows>
                <StyledListItemFlower
                  isActive={font === "Indie Flower"}
                  onClick={() => handleFont("Indie Flower")}
                >
                  Indie Flower
                </StyledListItemFlower>
                <StyledListItemRock
                  isActive={font === "Rock Salt"}
                  onClick={() => handleFont("Rock Salt")}
                >
                  Rock Salt
                </StyledListItemRock>
              </StyledList>
            </StyledFonts>
            <StyledFontSize>
              <StyledText>Select font size</StyledText>
              <StyledSizeList>
                {fontSizes.map(({ size, display }) => (
                  <StyledListItem
                    key={display}
                    isActive={size === fontSize}
                    onClick={() => handleFontSize(size)}
                  >
                    {display}
                  </StyledListItem>
                ))}
              </StyledSizeList>
            </StyledFontSize>
          </StyledFontsWrapper>
          <StyledButton type="submit" value="Download" />
        </StyledWrapper>
      </StyledForm>

      <StyledModal id="modal" ref={testRef}></StyledModal>
    </StyledApp>
  );
}

export default App;
