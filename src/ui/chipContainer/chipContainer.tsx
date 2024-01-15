import React from 'react';
import Chip from '../chip';
import { AvatarGenerator } from 'random-avatar-generator';

import "./chipContainer.css";


function ChipContainer(props : IChipContainerProps) {
    const { width , fontSize } = props;
    const generator = new AvatarGenerator();

  return (
    <div>
     <Chip title="dummy chip"
     avatar="https://github.com/tewarig.png"
     closable={true}
     onClose={()=>{
        console.log('close')
     }}
     />
    <input type="text" className="chip-container" aria-label='chip-container' style={{ width }} />
    </div>
  )
}


interface IChipContainerProps {
    width?: string;
    fontSize?: string;
}
export default ChipContainer