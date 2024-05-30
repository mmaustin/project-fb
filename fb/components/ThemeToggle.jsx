"use client"

import { useState } from "react";
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const themes = {
  corporate: 'corporate',
  business: 'business',
  // lofi: 'lofi',
  // black: 'black',
  colors: {
    blue: '#fad'
  }
  // winter: 'winter',
  // dracula: 'dracula'
}

const ThemeToggle = () => {

  const [theme, setTheme] = useState(themes.corporate);

  const toggleTheme = () => {
    const newTheme = theme === themes.corporate ? themes.business : themes.corporate;
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} className="btn btn-outline btn-sm">
      {theme === 'corporate' ? (
        <BsMoonFill className="h-4 w-4" />
      ) : (
        <BsSunFill className="h-4 w-4" />
      )}
    </button>
  )
}
export default ThemeToggle;