
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Preload the new logo
const logoPreload = new Image();
logoPreload.src = "/lovable-uploads/b1e34a76-0579-453d-bed3-39841e7c8d00.png";

createRoot(document.getElementById("root")!).render(<App />);
