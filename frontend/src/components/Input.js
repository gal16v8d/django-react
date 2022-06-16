import { useState } from 'react';

function InputField({idInput, type, initialValue, label, rows = 1, parentAction}) {
    const [inputValue, setInputValue] = useState(initialValue);
    const onBlurInput = (event) => {
        if (type === 'file') {
            parentAction(idInput, event.target.files[0]);
        } else {
            parentAction(idInput, inputValue);
        }
        setInputValue(event.target.value);
    };

    const onChangeInput = (event) => {
        setInputValue(event.target.value);
    };

    if (type === 'textarea') {
        return (
            <div className="mb-3">
                <label htmlFor={idInput}>{label}</label>
                <textarea 
                    className="form-control" 
                    id={idInput} 
                    rows={rows}
                    value={inputValue}
                    onBlur={onBlurInput}
                    onChange={onChangeInput}
                    required={true}
                />
            </div>
        );
    } else {
        return (
            <div className="mb-3">
                <label htmlFor={idInput}>{label}</label>
                <input 
                    className="form-control" 
                    id={idInput} 
                    type={type}
                    rows={rows}
                    value={inputValue}
                    onBlur={onBlurInput}
                    onChange={onChangeInput}
                    required={true}
                />
            </div>
        );
    }
}

export default InputField;