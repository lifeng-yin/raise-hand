import { useContext } from "react";
import { PusherContext } from "../contexts/PusherContext";

export const usePusher = () => {
    const context = useContext(PusherContext);
  
    if (!context) {
      throw new Error('useThemeContext must be used inside the ThemeProvider');
    }
  
    return context;
};