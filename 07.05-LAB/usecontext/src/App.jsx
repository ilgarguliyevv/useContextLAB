import { useState, React } from "react";
import { MyContext } from "./MyContext";
import MyComponent from "./Context";
import Table from "./Table";
import Context from "./Context";
function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <MyContext.Provider value={{ text, setText }}>
        <Context />
      </MyContext.Provider>
    </div>
  );
}
export default App;
