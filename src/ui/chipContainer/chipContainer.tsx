import { useState , useRef } from 'react';
import Chip from '../chip';
import { IOptionInterface } from '../../types/common';

import "./chipContainer.css";


function ChipContainer(props : IChipContainerProps) {
  const { width , options = [] , selectedOptions , setSelectedOptions } = props;
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<IOptionInterface[]>([]);
  const showFilteredOptions = inputValue && filteredOptions.length > 0;

  const handleSelect = (selectedOption: IOptionInterface) => {
    setInputValue('');
    setFilteredOptions([]);
    setSelectedOptions([...(selectedOptions ?? []), selectedOption]);
  };

  const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);

    // Filter options based on input value
    const filteredOptions = options.filter(option =>
      option.value.toLowerCase().includes(inputValue.toLowerCase())&&selectedOptions?.every(o => o.value !== option.value)
    );

    setFilteredOptions(filteredOptions);
  };

  const handleClose = (option: IOptionInterface) => {
    //value is the email address so it will be always unique
    setSelectedOptions(selectedOptions?.filter(o => o.value !== option.value) ?? []);
    };
    const childComponent = useRef<HTMLInputElement>(null);
    const focusInput = () => {
        childComponent.current?.focus();
    }

  return (
    <div className='chip-container' style={{ width }} onClick={focusInput}>
    {selectedOptions && selectedOptions.map((option, index) => (
    <Chip title={option.title} key={index}
     avatar={option.avatar}
     closable={true}
     onClose={() => handleClose(option)}
     />
     ))}
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



interface IChipContainerProps {
    width?: string;
    fontSize?: string;
    options?: IOptionInterface[];
    selectedOptions?: IOptionInterface[];
    setSelectedOptions: (selectedOptions: IOptionInterface[]) => void;
}
export default ChipContainer