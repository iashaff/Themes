import { ThemeContext } from "./App"
import { useContext } from "react"

export default function Button() {
    const value = useContext(ThemeContext)
    return (
        <button
        className={`${value.themeState}-theme`}
        onClick={value.toggleTheme}>
            Switch theme
        </button>
    )
}