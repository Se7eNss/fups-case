import { useState } from "react";


export default function useLocalStorage (key:string,defaultValue:any) {

    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue === null ? defaultValue : JSON.parse(storedValue);
      });
    
      const setValueInLocalStorage = (newValue: any) => {
        setValue((currentValue: any) => {
          const result = typeof newValue === 'function' ? newValue(currentValue) : newValue;
          localStorage.setItem(key, JSON.stringify(result));
          return result;
        });
      };
    
      return [value, setValueInLocalStorage];
}