import {useState} from "react";

export default (initialValue: any) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e: React.SyntheticEvent) => {
        let target = e.target as HTMLInputElement;
        // @ts-ignore
        setValue({...value, [target.name]: target.value});
    };

    const reset = () => setValue(initialValue);

    return [value, handleChange, reset];
}

