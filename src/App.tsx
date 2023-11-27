import { FC, useState } from "react";
import Header from "./components/Header/Header";
import Todo from "./components/Todo/Todo";
import { ThemeContext } from "./contexts/ThemeContext";
import { ELocalKeys, ETheme } from '../types';

const App: FC = () => {
  const themeLocal = localStorage.getItem(ELocalKeys.theme) as ETheme | null;
  const [theme, setTheme] = useState<ETheme>(themeLocal ? themeLocal : ETheme.ligth);
  document.body.className = theme === ETheme.dark ? ETheme.dark : ETheme.ligth;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <Todo />
    </ThemeContext.Provider>
  );
}

export default App;