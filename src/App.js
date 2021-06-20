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
  const postcardRef = useRef();
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    // download postcard
    event.preventDefault();
    componentRef.current.scrollIntoView();

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

  const getAdjustments = () => {
    if (window.innerWidth < 575) {
      return { heightAdjustment: 10, widthAdjustment: 0 };
    } else if (window.innerWidth < 900) {
      return { heightAdjustment: 10, widthAdjustment: 10 };
    }

    return { heightAdjustment: 0, widthAdjustment: 0 };
  };

  const canvas = () => {
    const input = componentRef.current;

    const width = input.clientWidth;
    const height = input.clientHeight;

    const { widthAdjustment, heightAdjustment } = getAdjustments();

    html2canvas(input, {
      width: width + widthAdjustment,
      height: height + heightAdjustment,
    }).then((canvas) => {
      var resizedCanvas = document.createElement("canvas");

      var resizedContext = resizedCanvas.getContext("2d");
      // get width of screen for mobile
      resizedCanvas.height = height;
      resizedCanvas.width = width;
      resizedContext.drawImage(canvas, 0, 0, width, height);
      resizedContext.scale(0.5, 0.5);
      var image = resizedCanvas.toDataURL("image/jpg", 1);

      saveAs(image, "endless-summer");
    });
  };

  return (
    <StyledApp>
      <StyledForm onSubmit={handleSubmit}>
        <StyledPostcardWrapper ref={componentRef}>
          <StyledImage width="100%" src={postcard} ref={postcardRef} />
          <StyledPostcardMessage>
            <StyledImage width="100%" src={postcardBack} />
            <StyledMessage size={fontSize} font={font}>
              {message}
            </StyledMessage>
          </StyledPostcardMessage>
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
    </StyledApp>
  );
}

export default App;
