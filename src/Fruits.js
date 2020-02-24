import React from 'react'

export default function Fruits(props) {
    let item = props.fruit
    return (
        <div key={props.index}>
            <p>{item.name}, color = {item.color} <button onClick={() => props.changeColor(props.index)}>Change Color</button> <button onClick={() => props.deleteColor(props.i)}>Delete Me</button></p>
        </div>
    )
}

