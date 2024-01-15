import { useState , useRef } from 'react';
import Chip from '../chip';

import "./chipContainer.css";


function ChipContainer(props : IChipContainerProps) {
  const { width , fontSize } = props;
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<IOptionInterface[]>([]);
  const showFilteredOptions = inputValue && filteredOptions.length > 0;

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
    avatar: "http://www.gravatar.com/avatar/1?d=identicon",
    title: "Gaurav Tewari",
    value: "mrow!@gmail.com",
},
{
    avatar: "http://www.gravatar.com/avatar/1?d=identicon",
    title: "Gaurav Tewari",
    value: "233@gmail.com"
},
];
  const handleSelect = (selectedOption: IOptionInterface) => {
    console.log(`Selected: ${selectedOption}`);
  };

  const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);

    // Filter options based on input value
    const filteredOptions = options.filter(option =>
      option.value.toLowerCase().includes(inputValue.toLowerCase())
    );

    setFilteredOptions(filteredOptions);
  };
    const childComponent = useRef<HTMLInputElement>(null);
    const focusInput = () => {
        childComponent.current?.focus();
    }

  return (
    <div className='chip-container' style={{ width }} onClick={focusInput}>
     <Chip title="dummy chip"
     avatar="https://github.com/tewarig.png"
     closable={true}
     onClose={()=>{
        console.log('close')
     }}
     />
     <div className="chip-input-container">
    <input type="text" className="chip-input" aria-label='chip-container'  ref={childComponent} 
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter Email name..." />
    <div className='chip-autocomplete'>
        {showFilteredOptions &&filteredOptions.map((option, index) => (
          <button className="chip-autocomplete-options" key={index}  onClick={() => handleSelect(option)}>
            {option.avatar && <img className="chip-autocomplete-avatar" src={option.avatar} />}
            <span className="chip-autocomplete-title">{option.title} </span> 
             <span className="chip-autocomplete-value"> {option.value}</span>
          </button>
        ))}
      </div>
    </div>
    </div>
  )
}


interface IOptionInterface {
    avatar?: string;
    title: string;
    value: string;
}

interface IChipContainerProps {
    width?: string;
    fontSize?: string;
}
export default ChipContainer