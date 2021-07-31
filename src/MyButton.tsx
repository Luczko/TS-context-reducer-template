import React, { useContext } from "react";

import { UserContext } from "./AppContext";

const MyButton = () => {
  const { handleChange } = useContext(UserContext);

  return (
    <div>
      <button onClick={handleChange}>Zmień</button>
    </div>
  );
};

export default MyButton;
