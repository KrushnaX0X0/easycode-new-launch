import React from 'react'

const AppInput = ({inputValue,placeholder,value,onChange}) => {
    return (
        <div className="flex flex-col mt-3">
            <label className="text-sm font-medium text-white mb-1" htmlFor="mobile">{inputValue}</label>
            <input
                id="mobile"
                placeholder={placeholder}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 text-white"
                 value={value}
                 onChange={onChange}
            />
        </div>
    )
}

export default AppInput