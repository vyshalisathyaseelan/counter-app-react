import { useState } from "react"
import Design from "./Design"

function App() {
  const [count, setCount] = useState(0)
  function increase(){
    setCount(count + 1)
  }
    function decrease(){
    if (count > 0) {
      setCount(count - 1)
    }
  }
  function reset(){
    setCount(0)
  }
return (
    <Design
    count={count}
    increment={increase}
    decrement={decrease}
    reset={reset}/>
  )}

export default App
