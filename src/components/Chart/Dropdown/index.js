import React from 'react'
import './dropdown.css'

export default function Dropdown() {

    const [items] = React.useState([
        { label: "MONTHLY DATA",value: "monthly"},
        { label: "YEARLY DATA", value: "yearly" },
        { label: "DAILY DATA", value: "daily" }
    ]);

    return (
    <select className='selectBox'>
        {items.map(item => (
            <option className='option'
                key={item.value}
                value={item.value}
            >
                {item.label}
            </option>
        ))}
    </select>
    )
}
