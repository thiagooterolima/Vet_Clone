import React from "react";
import { useState } from "react";
import "./style.css";



function Tela() {
  const options = [
    { value: '', text: 'Escolha o Sexo', disabled: true },
    { value: 'sexoM', text: 'Macho' },
    { value: 'sexoF', text: 'Femea' },
  ];

  const optionsV = [
    { value: '', text: 'Escolha o Veterinario', disabled: true },
    { value: 'V1', text: 'Joao' },
    { value: 'V2', text: 'Marcia' },
    { value: 'V3', text: 'Pedro' },
    { value: 'V4', text: 'Giovana Peregine'},
    { value: 'V5', text: 'Outro'},
  ];

 


  const [selected, setSelected] = useState('');

  const handleChange = event => {
    console.log('Label ', event.target.selectedOptions[0].label);
    console.log(event.target.value);

    setSelected(event.target.value);
  };

  const [selectedV, setSelectedV] = useState('');

  const handleChangeV = event => {
    console.log('Label ', event.target.selectedOptions[0].label);
    console.log(event.target.value);

    setSelectedV(event.target.value);
  };

  const[date,setData]=useState();

  const selectStyle = {
    fontSize: '16px',
    float: 'left',
    marginLeft: '24px',
    marginTop: '7px',
    width: '180px',

  };

  const optionStyle = {
    fontSize: '16px',
  };

  
  return (
    <body className="backgroundImagem">

      <header>

      <div className="container1">

        <div><h2 className="paciente">PACIENTE</h2></div>
        <section>

        
        <div className="DadosDoAnimal">
         <label className="fonte">Nome Do Animal:</label>
          <input className="letra" type="text" placeholder="Digite o nome do animal" />
        </div>

       
        <div className="DadosDoAnimal">
          <label className="fonte">Nome do Proprietario:</label>
          <input className="letra" type="text" placeholder="Digite o nome do proprietario" />
        </div>

       
        <div className="DadosDoAnimal">
          <label className="fonte">Idade:</label>  
          <input className="letra" type="number" min="0" placeholder="Digite a idade do animal" />
        </div>

       
        <div className="DadosDoAnimal">
          <label className="fonte">Data da Cirurgia:</label>
          <input className="data" type = "date" onChange={e=>setData(e.target.value)}/>
        </div>

        
        <div className="dropbox">
         <label className="fonte2">Sexo:</label>
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
        </div>


        
        <div className="dropbox"> 
         <label className="fonte2">Veterinario:</label>     
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
        </div>   


        

        </section>      

        </div> {/*aqui finalixa o container1 */}


        <div className="container2">
        <div><h2 className="paciente">PACIENTE</h2></div>
        <section>

        
        <div className="DadosDoAnimal">
         <label className="fonte">Nome Do Animal:</label>
          <input className="letra" type="text" placeholder="Digite o nome do animal" />
        </div>

       
        <div className="DadosDoAnimal">
          <label className="fonte">Nome do Proprietario:</label>
          <input className="letra" type="text" placeholder="Digite o nome do proprietario" />
        </div>

       
        <div className="DadosDoAnimal">
          <label className="fonte">Idade:</label>  
          <input className="letra" type="number" min="0" placeholder="Digite a idade do animal" />
        </div>

       
        <div className="DadosDoAnimal">
          <label className="fonte">Data da Cirurgia:</label>
          <input className="data" type = "date" onChange={e=>setData(e.target.value)}/>
        </div>

        
        <div className="dropbox">
         <label className="fonte2">Sexo:</label>
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
        </div>


        
        <div className="dropbox"> 
         <label className="fonte2">Veterinario:</label>     
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
        </div>   


        

        </section>      

        </div> {/*aqui finaliza o container2 */}

      </header>

      <main>
            <div className="containerCirurgia">

              <h2 className="cirurgia"> CIRURGIAS</h2>

            </div>

      </main>

      

    </body>

  



  )
}


export default Tela;