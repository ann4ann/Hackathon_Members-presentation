import React from "react";
import Button from "./components/UI/button";

const openUserBadge = (e) => {
  e.preventDefault();
  const openBadge = "open badge";
  console.log(openBadge);
};

function App() {
  return (
    <div>
      <Button onClick={openUserBadge}>Open user card</Button>
      <div>
        <Button onClick={() => history.push("/")}>Back</Button>
      </div>
    </div>
  );
}

export default App;
