import { AppContext } from "../context/AppContext"
import { useContext } from "react"

export const useDoctorsContext = () => {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error('useContext must be used within a AppContextProvider')
    }

    return context
} 