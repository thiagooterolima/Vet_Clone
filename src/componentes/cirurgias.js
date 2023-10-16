import React, { useState } from 'react';
import "./style.css";


function ExpansiveButton({ onOptionSelect, buttonText, selectedOptions, options }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOptionChange = (option) => {
    onOptionSelect(buttonText + ' ' + option);
  };

  return (
    <div style={{ display: 'inline-block', margin: '3px'}}>
      <button
        style={{
          fontSize: '16px', // Tamanho da fonte
          padding: '10px 10px', // Espaçamento interno
          backgroundColor: isExpanded ? 'GhostWhite' : 'GhostWhite', // Cor de fundo
          color: 'black', // Cor do texto
          border: 'none', // Remover borda
          cursor: 'pointer', // Cursor ao passar o mouse
          width:'23vh',
          height:'70px'
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
                fontSize: '14px', // Tamanho da fonte para as opções
                cursor: 'pointer',
                margin: '8px 0',
                display: 'block',
                backgroundColor: selectedOptions.includes(buttonText + ' ' + option) ? 'Lime' : 'GhostWhite',
                border: 'none',
                width:'100%',
                height:'30px',
                
                
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

  const Tegu= ['NODULECTOMIA','RECONSTRUTIVAS','ENXERTO'];
  const OlhoAnex=['PALPEBRAIS','CONJUNTIVAIS','ENUCLEAÇÃO','3 GLANDULA PÁLPEBRA','PROPTOSE'];
  const Orelha =['ABLAÇÃO DO CANAL AUDITIVO','OTOHEMATOMA',' PINECTOMIA ']
  const Cav_Ab=['CELIOTOMIA EXPLORATÓRIA','HÉRNIA UMBILICAL','HÉRNIA ABDOMINAL','HÉRNIA INGUINAL','HÉRNIA ESCROTAL','ABDOMINOCENTESE ']


 
  return (
    <div className='containerCir'>

    <div className="mineContainerCirurgia"><h2 className="cirurgia"> CIRURGIAS</h2></div>

      <div>

        <div className='grupo1' >

        <ExpansiveButton 
          onOptionSelect={handleOptionSelect}
          buttonText="SIS.TEGUMENTAR"
          selectedOptions={selectedOptions}
          options={Tegu}
        />

        <ExpansiveButton 
          onOptionSelect={handleOptionSelect}
          buttonText="OLHO E ANEXOS"
          selectedOptions={selectedOptions}
          options={OlhoAnex}
        />

        <ExpansiveButton 
          onOptionSelect={handleOptionSelect}
          buttonText="ORELHA"
          selectedOptions={selectedOptions}
          options={Orelha}
        />

        <ExpansiveButton 
          onOptionSelect={handleOptionSelect}
          buttonText="CAVIDADE ABDOMINAL "
          selectedOptions={selectedOptions}
          options={Cav_Ab}
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