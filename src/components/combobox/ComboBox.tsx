import React, { useState } from 'react'
import styles from './ComboBox.module.scss'

interface ComboBoxProps {
    required:boolean,
    placeholder: string,
    options: string[],
    setSelection: (value: any) => void
}


const ComboBox = ({required , setSelection, placeholder, options }: ComboBoxProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string | null>();
    const onOptionClicked = (value: React.SetStateAction<string | null | undefined>) => () => {
        setSelectedOption(value);
        setSelection(value);
        setIsOpen(false);

    };
    return (
        <div className={styles.combobox}>
            <div className={styles.combobox__wrapper} onClick={() => setIsOpen(!isOpen)}>
                <div className={`${styles.combobox__wrapper__input} ${isOpen && styles.focus} ${required  && !selectedOption && styles.required}` }>
                    <div className={styles.combobox__wrapper__input__text}  > {selectedOption || ""}</div>
                    <span className={selectedOption ? styles.combobox__wrapper__input__selectedlabel : styles.combobox__wrapper__input__label}>{placeholder}</span>
                </div>
                <img className={styles.combobox__wrapper__icon} src="/assets/icons/icon-20-helper-arrow-down.svg" alt="" />
            </div>
            {isOpen && (
                <ul className={styles.combobox__options}>
                    {options.map(option => (
                        <li key={option} onClick={onOptionClicked(option)} className={option === selectedOption ? styles.combobox__options__item_active : styles.combobox__options__item} value="standart">
                           {option}
                           <hr className={option === selectedOption ? styles.combobox__options__item_active__hr : styles.combobox__options__item__hr}/>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ComboBox