import React, { createContext, useState } from "react";

interface UserInfo {
    value: boolean;
    handleChange: () => void
}

export const UserContext = createContext<UserInfo>({value: false, handleChange: () => {}}) 

const AppContext: React.FC = ({children}) => {
const [value, setValue] = useState(false)
const handleChange = () => {
    setValue(prev => !prev)
}

    return(
        <UserContext.Provider value={{value, handleChange}}>
            {children}
        </UserContext.Provider>
    )
}

export default AppContext