import React, { useState } from 'react';
import "./style.css";


function ExpansiveButton({ onOptionSelect, buttonText, selectedOptions, options }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOptionChange = (option) => {
    onOptionSelect(option);
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
              disabled={selectedOptions.includes(option)}
              style={{
                fontSize: '14px', // Tamanho da fonte para as opções
                cursor: 'pointer',
                margin: '8px 0',
                display: 'block',
                backgroundColor: selectedOptions.includes(option) ? 'Lime' : 'GhostWhite',
                border: 'none',
                width:'210px',
                height:'36px',
                
                
                
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

function Cirurgias({ onGeneratePDF}) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionSelect = (option) => {
    setSelectedOptions([...selectedOptions, option]);
    onGeneratePDF([...selectedOptions, option]);
  };

  const handleRemoveOption = (option) => {
    const updatedOptions = selectedOptions.filter((item) => item !== option);
    setSelectedOptions(updatedOptions);
    onGeneratePDF(updatedOptions);
  };

  const Tegu= ['NODULECTOMIA','RECONSTRUTIVAS','ENXERTO'];
  const OlhoAnex=['PALPEBRAIS','CONJUNTIVAIS','ENUCLEAÇÃO','3 GLANDULA PÁLPEBRA','PROPTOSE'];
  const Orelha =['ABLAÇÃO DO CANAL AUDITIVO','OTOHEMATOMA',' PINECTOMIA ']
  const Cav_Ab=['CELIOTOMIA EXPLORATÓRIA','HÉRNIA UMBILICAL','HÉRNIA ABDOMINAL','HÉRNIA INGUINAL','HÉRNIA ESCROTAL','ABDOMINOCENTESE ']
  const Cav_oral=['BIÓPSIA','MAXILECTOMIA PARCIAL','MANDIBULECTOMIA PARCIAL','MANDIBULECTOMIA ROSTRAL','QUEILOPLASTIA','GLOSSECTOMIA','CORREÇÃO FISSURA PALATINA',
  'CORREÇÃO FISSURAS ORONASAIS','EXCISÃO DE TUMORES ORAIS','CORREÇÃO MUCOCELE SALIVAR','CORREÇÃO SIALOCELE','MARSUPIALIZAÇÃO DA RÂNULA']
  const Esofago=['ESOFAGECTOMIA PARCIAL','INTUSSUSCEPÇÃO GASTROESOFÁGICA']
  const Estomago=['GASTROJEJUNOSTOMIA','CORREÇÃO TORÇÃO VÔLVULO ´GASTRICA']
  const Intestino=['ETEROROMIA','ENTERECTOMIA','ENTEROPEXIA','PLICATURA INTESTINAL', 'COLOPEXIA','COLOSTOMIA', 'COLECTOMIA']
  const Par_reto_anus=['RESSECÇÃO RETAL','SACULECTOMIA ANAL','CORREÇÃO HÉRNIA PERINEAL', 'CORREÇÃO PROLAPSO RETAL']


 
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

{/** adicionei um codigo aqui em baixo. Ass Thiago Amim */} 
        <div className='grupo2'>
        
        <ExpansiveButton
        onOptionSelect={handleOptionSelect}
        buttonText="CAVIDADE ORAL"
        selectedOptions={selectedOptions}
        options={Cav_oral}
        />

        <ExpansiveButton
        onOptionSelect={handleOptionSelect}
        buttonText="ESÕFAGO"
        selectedOptions={selectedOptions}
        options={Esofago}
        />

        <ExpansiveButton
        onOptionSelect={handleOptionSelect}
        buttonText="ESTÔMAGO"
        selectedOptions={selectedOptions}
        options={Estomago}
        />

        <ExpansiveButton
        onOptionSelect={handleOptionSelect}
        buttonText="INTESTINO"
        selectedOptions={selectedOptions}
        options={Intestino}
        />

        

      </div> {/* fim do codigo do grupo 2 */ }

      <div className='grupo3'>

        <ExpansiveButton
        onOptionSelect={handleOptionSelect}
        buttonText="PERÍNEO,RETO E ÂNUS"
        selectedOptions={selectedOptions}
        options={Par_reto_anus}
        />

        
      </div> {/*o codigo que adicionei termina aqui */}
      
         

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