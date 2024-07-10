import Age from "./Age"
import Instructions from "./Instructions"
import React,{useState,useCallback} from "react"
const Main = () => {
    const [age, setAge] = useState(99)
    const handleClick = () => setAge(age + 1)
    const someValue = "someValue"
    // const doSomething = () => {
    //   return someValue
    // }


    // with refrence value
    const doSomething = useCallback(() => {
        return someValue
      }, [someValue])
  
    return (
      <div>
        <Age age={age} handleClick={handleClick}/>
        <Instructions doSomething={doSomething} />
      </div>
    )
}

export default Main;