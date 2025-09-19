import React, {useState, useEffect} from 'react'



function UseEffect(){

    const [count, setCount] = useState(0);
    const [colour, setColour] = useState("green")

    useEffect(() => {
        document.title = `Count ${count} in ${colour}`

        return () => {
            //cleanup code
            
        }
    }, [count,colour])

    function addCount(){
        setCount(c => c + 1)

    }

    function subtractCount(){
        setCount(c => c - 1)
    }

    function changeColour(){
        setColour(c => c == "green" ? "red" : "green")
    }

    return (<>
    <p style={{color: colour}}>Count:{count}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={subtractCount}>Subtract</button>
    <button onClick={changeColour}>Change Colour</button>
    </>)

}

export default UseEffect;