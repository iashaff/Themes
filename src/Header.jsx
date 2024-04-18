import { useContext } from "react"
import { ThemeContext } from "./App"

export default function Header() {
    const value = useContext(ThemeContext)
    return (
        <header className={`${value.themeState}-theme`}>
            <h1>{`${value.themeState === 'light' ? 'Light' : 'Dark'}`} Theme</h1>
        </header>
    )
}