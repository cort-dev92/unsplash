import React from "react";
import { Input } from "antd";
import "./App.css";
import ImageList from "./components/Images/ImageList";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./utils/Themes";
import { FiSun, FiMoon } from "react-icons/fi";
import { Toggler } from "./components/Toggler";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

function App() {
  const [theme, setTheme] = React.useState("light");
  const [text, setText] = React.useState("");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const handleTextChange = (event: any) => {
    setText(event.target.value);
  };

  const icon = theme === "light" ? <FiMoon size={26} /> : <FiSun size={26} />;

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="container">
          <div className="App">
            <nav className="navbar navbar-expand-lg d-flex justify-content-end ">
              <Input style={{ width: 200 }} onChange={handleTextChange} value={text} />
              <Toggler onClick={toggleTheme}>{icon}</Toggler>
            </nav>
            <ImageList theme={theme} text={text} />
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
