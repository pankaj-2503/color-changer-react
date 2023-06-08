import React from 'react'
import colorNames from 'colornames'

const Input = ({colorValue,setColorValue,setHexValue,isDarkText,setDarkText}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
        <label>Add Color Name:</label>
        <input
            type='text'
            autoFocus
            placeholder='Add Color Name'
            required
            value={colorValue}
            onChange={(e)=>{
                setColorValue(e.target.value)
                //command is : npm i colornames -S
                setHexValue(colorNames(e.target.value)) //install package for this to translate into hex value

                   }
                }
            />
        <button 
             type='button'
             onClick={()=>setDarkText(!isDarkText)}
         >
            Toggle Text Color
         </button>
    </form>
  )
}

export default Input
