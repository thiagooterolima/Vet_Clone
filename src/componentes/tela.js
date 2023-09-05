import React from "react";
import { useState } from "react";
import "./estilos.css";



function Tela() {
    const options =[
        {value: '', text: 'Escolha o Sexo', disabled: true},
        {value:'sexoM' ,text: 'Masculino'},
        {value:'sexoF' ,text: 'Feminino'},
      ];
    
      const optionsV =[
        {value: '', text: 'Escolha o Veterinario', disabled: true},
        {value:'V1' ,text: 'Joao'},
        {value:'V2' ,text: 'Marcia'},
        {value:'V3' ,text: 'Pedro'},  
      ];
    
    
    
      const [selected, setSelected] = useState('');
    
      const handleChange  = event => {
        console.log('Label ', event.target.selectedOptions[0].label);
        console.log(event.target.value);
    
        setSelected(event.target.value);
      };
    
      const [selectedV, setSelectedV] = useState('');
    
      const handleChangeV  = event => {
        console.log('Label ', event.target.selectedOptions[0].label);
        console.log(event.target.value);
    
        setSelectedV(event.target.value);
      };
    
    
    
      const selectStyle = {
        fontSize: '16px',
        float : 'left',
        marginLeft:'12px',
        marginTop:'12px',
        width: '180px', 
    
    
      };
    
      const optionStyle = {
        fontSize: '16px', 
      };  

      return (
        <div className="App">
        <header className="App-header">
  
        <h className="App-coluna">
          <h className="App-letra">
            Paciente
          </h>
            <input className="App-container"
             type="text" placeholder = "Nome Do Animal" />
  
            <input className="App-container"
             type="text" placeholder = "Nome Do Proprietario" />
  
            <input className="App-container"
             type="number" min = "0" placeholder = "Idade" />
           
          <select value={selected} onChange={handleChange} style={selectStyle}>
            {options.map(option => (
             <option
               disabled={option.disabled}
               key={option.value}
               value={option.value}
               style={optionStyle}
  
             >
            {option.text}
            </option>
          ))}
        </select>
        

        
        <select value={selectedV} onChange={handleChangeV} style={selectStyle}>
            {optionsV.map(option => (
             <option
               disabled={option.disabled}
               key={option.value}
               value={option.value}
               style={optionStyle}
  
             >
            {option.text}
            </option>
          ))}
        </select>
                   
  
  
  
  
        </h>
         
        </header>
      </div>
      )
}


export default Tela;