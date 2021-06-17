import { useState, useRef } from "react";
import "./App.css";
import postcard from "./images/postcard.jpg";
import postcardBack from "./images/postcard-back.jpg";
import {
  exportComponentAsJPEG,
  exportComponentAsPNG,
} from "react-component-export-image";
import {
  StyledFontColor,
  StyledFontSize,
  StyledFonts,
  StyledFontsWrapper,
  StyledForm,
  StyledList,
  StyledImage,
  StyledText,
  StyledMessage,
  StyledListItem,
} from "./styles";

const fontSizes = [
  { display: "XS", size: "14px" },
  { display: "S", size: "18px" },
  { display: "M", size: "20px" },
  { display: "L", size: "24px" },
];

const fonts = [
  { display: "Shadows Into Light", name: "Shadows Into Light" },
  { display: "Indie Flower", name: "Indie Flower" },
];
const placeholderText = "Should have known at the end of summer";

function App() {
  const [message, setMessage] = useState("");
  const [fontSize, setFontSize] = useState("14px");
  const [font, setFont] = useState("Shadows Into Light");
  const componentRef = useRef();
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    // download postcard
    event.preventDefault();
    exportComponentAsJPEG(componentRef, { fileName: "endless-summer" });
  };

  const handleFontSize = (value) => {
    setFontSize(value);
  };

  const handleFont = (value) => {
    console.log(value);
    setFont(value);
  };

  return (
    <div className="App">
      <StyledForm onSubmit={handleSubmit}>
        <div ref={componentRef} className="postcard-wrapper">
          <StyledImage width="500" src={postcard} />
          <StyledImage width="500" src={postcardBack} />
          <StyledMessage size={fontSize} font={font}>
            {message}
          </StyledMessage>
        </div>
        <div>
          <label>
            Your message
            <textarea
              placeholder={placeholderText}
              cols="30"
              rows="10"
              name="message"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
          </label>
          <StyledFontsWrapper>
            <StyledFonts>
              <StyledText>Select font</StyledText>
              <StyledList>
                {fonts.map(({ display, name }) => (
                  <StyledListItem
                    key={display}
                    onClick={() => handleFont(name)}
                    isActive={font === name}
                  >
                    {display}
                  </StyledListItem>
                ))}
              </StyledList>
            </StyledFonts>
            <StyledFontSize>
              <StyledText>Select font size</StyledText>
              <StyledList>
                {fontSizes.map(({ size, display }) => (
                  <StyledListItem
                    key={display}
                    isActive={size === fontSize}
                    onClick={() => handleFontSize(size)}
                  >
                    {display}
                  </StyledListItem>
                ))}
              </StyledList>
            </StyledFontSize>
          </StyledFontsWrapper>
          <input type="submit" value="Download" />
        </div>
      </StyledForm>
    </div>
  );
}

export default App;
