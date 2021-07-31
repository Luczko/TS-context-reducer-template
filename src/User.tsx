import React, { useContext } from "react";

import { UserContext } from "./AppContext";

const User = () => {
const { value } = useContext(UserContext)
const info = value ? 'zalogowany' : 'niezalogowany'

    return(
        <div>
            <p>Użytkownik jest {info}</p>
        </div>
    )
}

export default User