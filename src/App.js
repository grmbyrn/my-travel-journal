import React from 'react';
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'
import Style from '../src/style.css'

export default function App(){
    const cards = data.map(item =>{
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })
    return (
        <div>
            <Navbar />
            {cards}
        </div>
    )
}