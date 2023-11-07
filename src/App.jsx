import { createContext } from "react";
import "./App.css";
import Navigation from './Routes/Navigation'
import CartContext from './Context/CartContext'




function App() {
  return (
    <CartContext>
            <Navigation />
    </CartContext>

  );
}
export const ThemeContext = createContext()

export default App