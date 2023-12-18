import MyComponent from "./components/myComponent";
import { ThemeProvider } from "./ThemeContext";

const React6 = () => {
  return (
    <ThemeProvider>
      <MyComponent />
    </ThemeProvider>
  );
};

export default React6;
