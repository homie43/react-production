import React, { useContext } from "react";
import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Counter from "./components/Counter";
import "./styles/index.scss";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Theme, ThemeContex } from "./theme/ThemeContext";

const App = () => {
  const { theme, setTheme } = useContext(ThemeContex);

  const toggleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
          <Route path={"/counter"} element={<Counter />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
