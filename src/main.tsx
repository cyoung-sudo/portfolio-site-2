import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Animations
import { AnimatePresence } from "motion/react";
// Override imported styles
import './index.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AnimatePresence>
      <App />
    </AnimatePresence>
  </StrictMode>,
)
