import React from "react";
import ColorPicker from "./components/ColorPicker";
import Counter from "./components/Counter/Counter";
import Dropdown from "./components/Dropdown/Dropdown";


const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const App = () => (
    <>
        <h1>Сотояние компонента</h1>
    <Counter initialValue={10} />

        
        <Dropdown />

        
        <ColorPicker options={ colorPickerOptions}/>
        </>
)

export default App;
