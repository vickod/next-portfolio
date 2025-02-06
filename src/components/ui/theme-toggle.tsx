"use client"
import { useTheme } from "next-themes"
import { Button } from "./button";
import { Ghost } from "lucide-react";
import { FaMoon, FaSun } from "react-icons/fa";


export default function themeToggle(){
    const {theme, setTheme} = useTheme();
    console.log(theme)
    return (
        <Button variant="ghost" size="icon" className="rounded-full" 
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            <FaSun className="absolute h-5 w-5 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" ></FaSun>
            <FaMoon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"></FaMoon>
        </Button>
    )

}