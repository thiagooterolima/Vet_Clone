import React from "react";
import { useState } from "react";
import "./style.css";
import Cirurgias from "./cirurgias"


function Tela() {

  const [numCirurgias, setNumCirurgias] = useState(0);
  const [cirurgias, setCirurgias] = useState(new Array(3).fill(''));
  const [opcoesSelecionadas, setOpcoesSelecionadas] = useState(new Array(3).fill(''));

  const handleCirurgiaInputChange = (e) => {
    
    const num = Math.min(parseInt(e.target.value, 10), 3);
    if (!isNaN(num) && num >= 0) {
      setNumCirurgias(num);
      setCirurgias(new Array(num).fill(''));
      setOpcoesSelecionadas(new Array(num).fill(''));
    } else {
      setNumCirurgias(0);
      setCirurgias(new Array(3).fill(''));
      setOpcoesSelecionadas(new Array(3).fill(''));
    }
    
  };

  const handleCirurgiaChange = (index, e) => {
    const newCirurgias = [...cirurgias];
    newCirurgias[index] = e.target.value;
    setCirurgias(newCirurgias);

    const newOpcoesSelecionadas = [...opcoesSelecionadas];
    newOpcoesSelecionadas[index] = e.target.value;
    setOpcoesSelecionadas(newOpcoesSelecionadas);
  };


  const cirurgiaDropdowns = Array.from({ length: numCirurgias }, (_, index) => (
    <div className="cirurgia-dropdown" key={index}>
      <label className="fonteContainer3">{`Cirurgião ${index + 1}`}</label>
      <select
        className="select-dropdown"
        value={cirurgias[index]}
        onChange={(e) => handleCirurgiaChange(index, e)}
      >
        <option value="">Selecione o Cirurgião</option>
        <option value="Maria" disabled={opcoesSelecionadas.includes("Maria")}>Maria</option>
        <option value="Paulo" disabled={opcoesSelecionadas.includes("Paulo")}>Paulo</option>
        <option value="João" disabled={opcoesSelecionadas.includes("João")}>João</option>
      </select>
    </div>
  ));

  const options = [
    { value: '', text: 'Selecione o sexo', disabled: true },
    { value: 'sexoM', text: 'Macho' },
    { value: 'sexoF', text: 'Femea' },
  ];

  const optionsRes = [
    { value: '', text: 'Selecione o sexo', disabled: true },
    { value: 'sexoM', text: 'Homen' },
    { value: 'sexoF', text: 'Mulher' },
  ];


  const optionsV = [
    { value: '', text: 'Selecione o Veterinario', disabled: true },
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

  const selectStyleRes = {
    fontSize: '16px',
    float: 'left',
    marginLeft: '105px',
    marginTop: '7px',
    width: '303px',
  };



  
  return (
    <body className="backgroundImagem">

      <header>

      <div className="container1">

        <div><h2 className="paciente">INDENTIFICAÇÃO PACIENTE</h2></div>
        <section>

        
        <div className="DadosDoAnimal">
         <label className="fonte">Nome Do Animal:</label>
          <input className="letra" type="text" placeholder="Digite o nome do animal" />
        </div>

       
        <div className="DadosDoAnimal">
          <label className="fonte">Espécie:</label>
          <input className="letra" type="text" placeholder="Digite a espécie do animal" />
        </div>

       
        <div className="DadosDoAnimal">
          <label className="fonte">Raça:</label>  
          <input className="letra" type="text"  placeholder="Digite a raça do animal" />
        </div>

       
        <div className="DadosDoAnimal">
          <label className="fonte">Data de nascimento:</label>
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


        {/*}
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
          */}

        

        </section>      

        </div> {/*aqui finaliZa o container1 */}




        <div className="container2">
        <div><h2 className="paciente">INDENTIFICAÇÃO RESPONSÁVEL</h2></div>
        <section>

        
        <div className="DadosDoAnimal">
         <label className="fonteContainer2">Nome do responsável:</label>
          <input className="letra" type="text" placeholder="Digite o nome do responsavel" />
        </div>

       
        <div className="DadosDoAnimal">
          <label className="fonteContainer2">Nacionalidade:</label>
          <input className="letra" type="text" placeholder="Digite a naciolidade do responsavel" />
        </div>

        <div className="DadosDoAnimal">
          <label className="fonteContainer2">CPF Do Responsavel:</label>
          <input className="letra" type="text" placeholder="Digite o CPF do responsavel" />
        </div>

        <div className="DadosDoAnimal">
          <label className="fonteContainer2">Telefone Para Contado:</label>
          <input className="letra" type="text" placeholder="Digite o Telefone do responsavel" />
        </div>

        <div className="DadosDoAnimal">
          <label className="fonteContainer2">CEP:</label>
          <input className="letra" type="text" placeholder="Digite o CEP da Cidade do responsavel" />
        </div>

        <div className="DadosDoAnimal">
          <label className="fonteContainer2">Endereço:</label>
          <input className="letra" type="text" placeholder="Digite o Endereço do responsavel" />
        </div>

        <div className="DadosDoAnimal">
          <label className="fonteContainer2">Cidade:</label>
          <input className="letra" type="text" placeholder="Digite a Cidade do responsavel" />
        </div>

       {/*
        <div className="DadosDoAnimal">
          <label className="fonteContainer2">Idade:</label>  
          <input className="letra" type="number" min="0" placeholder="Digite a idade do animal" />
        </div>
        */}

       {/*
        <div className="DadosDoAnimal">
          <label className="fonteContainer2">Data da Cirurgia:</label>
          <input className="data" type = "date" onChange={e=>setData(e.target.value)}/>
        </div>
      */}


        
        <div className="dropbox">
         <label className="fonte2">Sexo:</label>
         <select value={selected} onChange={handleChange} style={selectStyleRes}>
          {optionsRes.map(option => (
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

{/*
        
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


          */}

        </section>      

        </div> {/*aqui finaliza o container2 */}

         



      </header>

      <main>
            <div className="containerCirurgia">
          
          

              <div className="container3">
          <div><h2 className="local">IDENTIFICAÇÃO MÉDICO VETERINÁRIO / ESTABELECIMENTO </h2></div>

          <section>

           <div className="DadosDoAnimal">
             <label className="fonteContainer3">Nome do Estabelecimento:</label>
             <input className="letra1" type="text" placeholder="Digite o Estalecimento" />
           </div>

           <div className="DadosDoAnimal">
             <label className="fonteContainer3">Data da Cirurgia:</label>
             <input className="data1" type = "date" onChange={e=>setData(e.target.value)}/>
           </div>

           <div className="DadosDoAnimal">
            <label className="fonteContainer3">Cirurgião/ Cirurgiões:</label>
            <input className="letra1" type="number" min="0" max={3}  placeholder="Numero de Cirurgião" onChange={handleCirurgiaInputChange} />
           </div>

           <div className="dropdown-container">{cirurgiaDropdowns}</div>

          </section>


          
         
          </div>   
      
          

            </div>

           
            <Cirurgias/>

      </main>
  


    </body>

  



  )
}


export default Tela;