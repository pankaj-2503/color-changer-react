import Square from './Square'
import Input from './Input'
import {useState} from 'react'
function App() {
  const [colorValue,setColorValue]=useState('');
  const [hexValue,setHexValue]=useState('');
  const [isDarkText,setDarkText]=useState(true);


  return (
    <div className="App">
        <Square 
          colorValue={colorValue} 
          hexValue={hexValue}
          isDarkText={isDarkText}
          />
        <Input 
          colorValue={colorValue}
          setColorValue={setColorValue}
          setHexValue={setHexValue}
          isDarkText={isDarkText}
          setDarkText={setDarkText}
        />
    </div>
  );
}

export default App;
