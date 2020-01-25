import React from 'react'
import ReactDOM from 'react-dom'

const elem = "Hi"
console.log(elem)

function Test(){
    return <p>Hello</p>
}

ReactDOM.render(<Test />, document.getElementById("root"))