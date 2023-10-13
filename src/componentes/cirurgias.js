import React, { useState } from 'react';
import "./style.css";


function ExpansiveButton({ onOptionSelect, buttonText, selectedOptions, options }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOptionChange = (option) => {
    onOptionSelect(buttonText + ' ' + option);
  };

  return (
    <div style={{ display: 'inline-block', margin: '5px'}}>
      <button
        style={{
          fontSize: '23px', // Tamanho da fonte
          padding: '10px 10px', // Espaçamento interno
          backgroundColor: isExpanded ? '#708090' : '#708090', // Cor de fundo
          color: 'black', // Cor do texto
          border: 'none', // Remover borda
          cursor: 'pointer', // Cursor ao passar o mouse
          width:'15vh',
        }}
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        {buttonText}
      </button>
      {isExpanded && (
        <div style={{ marginTop: '10px' }}>
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionChange(option)}
              disabled={selectedOptions.includes(buttonText + ' ' + option)}
              style={{
                fontSize: '18px', // Tamanho da fonte para as opções
                cursor: 'pointer',
                margin: '5px 0',
                display: 'block',
                backgroundColor: selectedOptions.includes(buttonText + ' ' + option) ? '#ddd' : '#708090',
                border: 'none',
                width:'100%',
                
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function SelectedOptionsList({ selectedOptions, onRemoveOption }) {
  return (
    <div className='list'>
      <h2>OPÇÕES SELECIONADAS:</h2>
      
      <ul>
        {selectedOptions.map((option, index) => (
          <li key={index}>
            {option} <button onClick={() => onRemoveOption(option)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Cirurgias() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionSelect = (option) => {
    setSelectedOptions([...selectedOptions, option]);
  };

  const handleRemoveOption = (option) => {
    const updatedOptions = selectedOptions.filter((item) => item !== option);
    setSelectedOptions(updatedOptions);
  };

  const cabecaOptions = ['Opção 1', 'Opção 2', 'Opção 3'];
 
  return (
    <div className='containerCir'>

    <div className="mineContainerCirurgia"><h2 className="cirurgia"> CIRURGIAS</h2></div>

      <div>

        <div className='grupo1' >

        <ExpansiveButton 
          onOptionSelect={handleOptionSelect}
          buttonText="Cabeça"
          selectedOptions={selectedOptions}
          options={cabecaOptions}
        />

<ExpansiveButton 
          onOptionSelect={handleOptionSelect}
          buttonText="Cabeça"
          selectedOptions={selectedOptions}
          options={cabecaOptions}
        />

<ExpansiveButton 
          onOptionSelect={handleOptionSelect}
          buttonText="Cabeça"
          selectedOptions={selectedOptions}
          options={cabecaOptions}
        />

<ExpansiveButton 
          onOptionSelect={handleOptionSelect}
          buttonText="Cabeça"
          selectedOptions={selectedOptions}
          options={cabecaOptions}
        />

<ExpansiveButton 
          onOptionSelect={handleOptionSelect}
          buttonText="Cabeça"
          selectedOptions={selectedOptions}
          options={cabecaOptions}
        />


        

        </div>

         

      </div>

      <div className='list'>
        <SelectedOptionsList selectedOptions={selectedOptions} onRemoveOption={handleRemoveOption} />

        </div>
      
      <div className='limpar'>
        <button className='tamanho' onClick={() => setSelectedOptions([])} >Limpar Lista</button>
      </div>

    </div>
  );
}

export default Cirurgias;