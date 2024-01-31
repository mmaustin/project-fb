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
    <button className="btn btn-primary btn-sm">Toggle</button>
  )
}
export default ThemeToggle;