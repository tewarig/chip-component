import { useState , useRef } from 'react';
import classNames from 'classnames';
import Chip from '../chip';
import { IOptionInterface } from '../../types/common';

import "./chipContainer.css";

function ChipContainer(props : IChipContainerProps) {
  const { width , options = [] , selectedOptions=[] , setSelectedOptions } = props;
  const optionContainerRef = useRef<HTMLDivElement | null>();
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<IOptionInterface[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const [selectedFilteredOptionIndex, setSelectedFilteredOptionIndex] = useState<number>(0);
  const showFilteredOptions = inputValue && filteredOptions.length > 0;

  const handleSelect = (selectedOption: IOptionInterface) => {
    setInputValue('');
    setFilteredOptions([]);
    setSelectedOptions([...(selectedOptions ?? []), selectedOption]);
  };

  const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setHighlightedIndex(-1);
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

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter'&&filteredOptions.length>0) {
            handleSelect(filteredOptions[selectedFilteredOptionIndex]);
        }
        if(e.key === 'Backspace' && !inputValue && highlightedIndex === -1){
            setHighlightedIndex(selectedOptions?.length - 1 ?? -1);
        }
        if(e.key === 'Backspace' && !inputValue && highlightedIndex > -1){
            handleClose(selectedOptions[highlightedIndex]);
            setHighlightedIndex(-1);
        }
        if(e.key === 'ArrowLeft' && highlightedIndex > -1){
            setHighlightedIndex(highlightedIndex - 1);
        }
        if(e.key === 'ArrowRight' && highlightedIndex < selectedOptions?.length - 1){
            setHighlightedIndex(highlightedIndex + 1);
        }
        if(e.key === 'ArrowUp' && selectedFilteredOptionIndex > 0){
            setSelectedFilteredOptionIndex(selectedFilteredOptionIndex - 1);
            if(optionContainerRef.current){
               const element = optionContainerRef.current;
               element.scrollTo({
                top: element.scrollTop - 36,
                behavior: 'smooth',
              });
            } 
        }
        if(e.key === 'ArrowDown' && selectedFilteredOptionIndex < filteredOptions.length - 1){
            setSelectedFilteredOptionIndex(selectedFilteredOptionIndex + 1);
            if(optionContainerRef.current){
              const element = optionContainerRef.current;
              element.scrollTo({
                top: element.scrollTop + 36,
                behavior: 'smooth',
              });
           } 
        }
    }


  return (
    <div className='chip-container' style={{ width }} onClick={focusInput}>
    {selectedOptions && selectedOptions.map((option, index) => (
    <Chip 
     title={option.title ?? ""}
     key={index}
     isHighlighted={index === highlightedIndex}
     avatar={option.avatar}
     closable={true}
     onClose={() => handleClose(option)}
     />
     ))}
     <div className="chip-input-container">
    <input type="text" className="chip-input" aria-label='chip-container'  ref={childComponent} 
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown} />
    <div className='chip-autocomplete' ref={optionContainerRef as React.RefObject<HTMLDivElement>}>
        {showFilteredOptions &&filteredOptions.map((option, index) => (
          <button className={classNames("chip-autocomplete-options",{
            "chip-autocomplete-options-selected": index === selectedFilteredOptionIndex,
          })} key={index}  onClick={() => handleSelect(option)} >
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
    options?: IOptionInterface[];
    selectedOptions?: IOptionInterface[];
    setSelectedOptions: (selectedOptions: IOptionInterface[]) => void;
}
export default ChipContainer