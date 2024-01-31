"use client"

import { useState } from "react";
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const themes = {
  winter: 'winter',
  dracula: 'dracula'
}

const ThemeToggle = () => {

  const [theme, setTheme] = useState(themes.winter);

  return (
    <button className="btn btn-outline btn-sm">
      {theme === 'winter' ? (
        <BsMoonFill className="h-4 w-4" />
      ) : (
        <BsSunFill className="h-4 w-4" />
      )}
    </button>
  )
}
export default ThemeToggle;