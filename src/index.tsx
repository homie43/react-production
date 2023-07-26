import { render } from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";

// На данном этапе готова структура приложения
// Начинаю планировать архитектуру
// Кажды путь буд подробно комментирвоать

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
