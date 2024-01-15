import React from 'react';
import classNames from 'classnames';
import { IoMdClose } from "react-icons/io";

import './chip.css';

function Chip({ color , disabled ,style , onClick , onClose, avatar, title , closable , suffix, prefix, className ,children , isHighlighted,...props}: IChipProps) {
  return (
    <button className={classNames('chip', {
        [`chip-${color}`]: color,
        'chip-disabled': disabled,
        'chip-highlighted': isHighlighted,
     className
    })}
        style={style}
        onClick={onClick}
        tabIndex={0}
        aria-label="button-chip"
        {...props}
    >   
        {prefix && <span className="chip-prefix">{prefix}</span>}
        {avatar && <img  className="chip-avatar" src={avatar} />}
        {title}
        {children}
        {closable && <span className="chip-close" onClick={onClose}><IoMdClose/></span>}
        {suffix && <span className="chip-suffix">{suffix}</span>}
    </button>
  )
}
interface IChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    avatar?: string;
    title: string;
    onClose: () => void;
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    closable?: boolean;
    prefix?: string;
    suffix?: string;
    isHighlighted?: boolean;
}

export default Chip;