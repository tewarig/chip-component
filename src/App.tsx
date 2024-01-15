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
  title: "Gaurav Tewari",
  value: "sample@123.com",
},  
{
  avatar: "http://www.gravatar.com/avatar/2?d=identicon",
  title: "Gaurav Tewari",
  value: "mrow!@gmail.com",
},
{
  avatar: "http://www.gravatar.com/avatar/3?d=identicon",
  title: "Gaurav Tewari",
  value: "233@gmail.com"
},
];

function App() {
  const [ selectedOptions , setSelectedOptions ] = useState<IOptionInterface[]>([]);

  return (
    <>
      <ChipContainer
       width="1000px"
       options={options}
       selectedOptions={selectedOptions}
       setSelectedOptions={setSelectedOptions}
      />
    </>
  )
}

export default App
