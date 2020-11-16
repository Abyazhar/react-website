import React from 'react'


const FormInput = ({handleChange,label,...otherProps}) => {
    return (
        <>
            <div className='formrow'>
                {label && (
                    <label>
                        {label}
                    </label>
                )}
                <input className='FormInput'onChange={handleChange} {...otherProps} required/>
            </div>
        </>
    )
}
    
export default FormInput
