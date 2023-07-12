import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);
  const handleClick = () => {
    if (user) {
      setUser(null);
    } else {
      const val = document.querySelector("input").value;
      setUser(val);
    }
  };

  return (
    <section>
      {user ? <h3>Hello there {user}</h3> : <h3>Please Login!</h3>}
      {!user && (
        <label htmlFor="username">
          <h4>Enter Your Name: </h4>
        </label>
      )}
      {!user && <input type="text" name="username" autoComplete="off" />}
      <br />
      <br />
      <button onClick={handleClick}>{user ? <>LogOut</> : <>LogIn</>}</button>
    </section>
  );
};

export default App;
