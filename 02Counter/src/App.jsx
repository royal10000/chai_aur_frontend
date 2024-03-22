import { useState } from "react";

function App() {
  const [data, setData] = useState(0)

  // let counter = 1;

  function AddValue() {
    setData(data + 1)

  }
  function RemoveValue() {
    setData(data - 1)

  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {data}</h2>
      <button onClick={AddValue}>Add Value</button>
      <button onClick={RemoveValue}>Decrease  Value</button>
    </>
  )
}

export default App
