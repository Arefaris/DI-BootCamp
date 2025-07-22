import { themeContext } from "../App";
import { useContext } from "react";



const Main = () => {
  const theme = useContext(themeContext);  
  console.log(theme);
  return (
    <div className={`main ${theme.theme}`} style={theme.theme === 'dark' ? { backgroundColor: '#333', color: '#fff' } : { backgroundColor: '#fff', color: '#000' }}>
      <h2>Main Component</h2>
      <button onClick={() => theme.setTheme(theme.theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );

  
}

export default Main;