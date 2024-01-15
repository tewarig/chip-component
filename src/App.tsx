import { useState } from 'react'
import { IOptionInterface } from './types/common'
import './App.css'
import ChipContainer from './ui/chipContainer'


const options = [{
  avatar: "https://github.com/tewarig.png",
  title: "Gaurav Tewari",
  value: "gauravtewri111@gmail.com"
},
{
  avatar: "http://www.gravatar.com/avatar/1?d=identicon",
  title: "Sample",
  value: "sample@123.com",
},  
{
  avatar: "http://www.gravatar.com/avatar/2?d=identicon",
  title: "Macbook",
  value: "macbook@gmail.com",
},
{
  avatar: "http://www.gravatar.com/avatar/3?d=identicon",
  title: "demo",
  value: "demo3@gmail.com"
},
{
  avatar: "http://www.gravatar.com/avatar/4?d=identicon",
  title: "Cool Stuff",
  value: "coolStuff@gmail.com"
},{
  avatar: "http://www.gravatar.com/avatar/5?d=identicon",
  title: "not so cool stuff",
  value: "notsocoolstuff@gmail.com",
},
{
  avatar: "http://www.gravatar.com/avatar/6?d=identicon",
  title: "john doe",
  value: "john@gmail.com",
},
{
  avatar: "http://www.gravatar.com/avatar/7?d=identicon",
  title: "Super man",
  value: "Superman@gmail.com",
}
];

function App() {
  const [ selectedOptions , setSelectedOptions ] = useState<IOptionInterface[]>([]);

  return (
    <div className='center'>
     <div className='info'>
      <h1>Container chip</h1>
    <ul>
      <li>Click on Input to start typing </li>
      <li>Click on a suggestion or press enter </li>
      <li>press Backspace 2 time to remove last selected element </li>
      <li>press Ecs to remove a selected element </li>
      <li>For more info refer to Story Book Link </li>
    </ul>
    </div>
      <ChipContainer
       width="70%"
       options={options}
       selectedOptions={selectedOptions}
       setSelectedOptions={setSelectedOptions}
      />
    </div>
  )
}

export default App
