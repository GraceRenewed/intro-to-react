import React from 'react'
import SayHello from '@/components/SayHello'

export default function Components() {
  const array = [
    {
    name: 'Poe',
    greeting: "I like your shoe",
    },
    {
      name:'Kobe',
      greeting: "Nice toy you have",
    },
  ]
  return (
    <div>
      {
      // eslint-disable-next-line react/no-array-index-key
      array.map((item, i) => <SayHello key={i} name={item.name} greeting={item.greeting} />)
      }
    
      <SayHello name="Valerie" greeting="We are glad you are here!"/> 
    </div>
  )
}
