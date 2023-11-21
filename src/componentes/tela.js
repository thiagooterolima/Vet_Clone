import React from "react";
import { useState,useRef } from "react";
import "./style.css";
import Cirurgias from "./cirurgias"
import jsPDF from "jspdf";


function Tela() {

  const [NomeAnimal, setNomeAnimal] = useState("");
  const [Especie, setEspeci] = useState("");
  const [Raca, setRaca] = useState("");

  const [NomedoResponsavel, setNomeResposanvel] = useState("");
  const [Nacionalidade, setNacionalidade] = useState("");
  const [CPF, setCPF] = useState("");
  const [Telefone, setTelefone] = useState("");
  const [CEP, setCEP] = useState("");
  const [Endereco, setEndereco] = useState("");
  const [Cidade, setCidade] = useState("");

  const [Estabelecimento, setEstabelecimento] = useState("");
  
  const pdfRef = useRef();

  const [selectedCirurgias, setSelectedCirurgias] = useState([]);
  let currentPage = 1;

  const handleGeneratePDF = () => {
  const pdf = new jsPDF();
   
    pdf.text(60,10,"DADOS DO PACIENTE" )
    pdf.text(20, 30, `Nome do Animal: ${NomeAnimal}`);
    pdf.text(20, 40, `Espécie: ${Especie}`);
    pdf.text(20, 50, `Raça: ${Raca}`);
    pdf.text(20, 60, `Data de Nascimento: ${date}`);
    pdf.text(20, 70, `Sexo do Animal: ${selected}`);


    pdf.text(60,100,"DADOS DO RESPONSAVEL")
    pdf.text(20, 120, `Nome do Responsável: ${NomedoResponsavel}`);
    pdf.text(20, 130, `Nacionalidade: ${Nacionalidade}`);
    pdf.text(20, 140, `CPF: ${CPF}`);
    pdf.text(20, 150, `Telefone para Contato: ${Telefone}`);
    pdf.text(20, 160, `CEP: ${CEP}`);
    pdf.text(20, 170, `Endereço: ${Endereco}`);
    pdf.text(20, 180, `Cidade: ${Cidade}`);
    pdf.text(20, 190, `Sexo do Responsável: ${selectedRes}`);


    pdf.text(60,210,"DADOS DO ESTABELECIMENTO")
    pdf.text(20, 230, `Nome do Estabelecimento: ${Estabelecimento}`);
    pdf.text(20, 240, `Data da Cirurgia: ${date}`);
    pdf.text(20, 250, `Numero De Cirurgiao: ${numCirurgias}`);
    pdf.text(20, 260, `Cirurgião / Cirurgiões: ${cirurgias}`);

    
    pdf.addPage();
    currentPage++;

    pdf.text(60, 20, "CIRURGIAS SELECIONADAS");
    pdf.text(67,210,"Assinatura Responsavel")
    pdf.text(60,220,"________________________")

    let startY = 40;

    selectedCirurgias.forEach((cirurgia, index) => {
      pdf.text(20, startY + index * 10, cirurgia);
    });

    
   

     

     const fileName = prompt("Digite o nome que O arquivo Sera salvo:") || "formulario";
     pdf.save(`${fileName}.pdf`);

     setSelectedCirurgias([]);

  };

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
    { value: 'Macho', text: 'Macho' },
    { value: 'Femea', text: 'Femea' },
  ];

  const optionsRes = [
    { value: '', text: 'Selecione o sexo', disabled: true },
    { value: 'Homen', text: 'Homen' },
    { value: 'Mulher', text: 'Mulher' },
  ];

{/*
  const optionsV = [
    { value: '', text: 'Selecione o Veterinario', disabled: true },
    { value: 'V1', text: 'Joao' },
    { value: 'V2', text: 'Marcia' },
    { value: 'V3', text: 'Pedro' },
    { value: 'V4', text: 'Giovana Peregine'},
    { value: 'V5', text: 'Outro'},
  ];

*/}

 


  const [selected, setSelected] = useState('');

  const handleChange = event => {
    console.log('Label ', event.target.selectedOptions[0].label);
    console.log(event.target.value);

    setSelected(event.target.value);
  };

  const [selectedRes, setSelectedV] = useState('');

  const handleChangeRes = event => {
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
    width: '34%',
    
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
          <input className="letra" type="text" placeholder="Digite o nome do animal"
           value={NomeAnimal}
           onChange={(e) => setNomeAnimal(e.target.value)}
          
          />
        </div>

       
        <div className="DadosDoAnimal">
          <label className="fonte">Espécie:</label>
          <input className="letra" type="text" placeholder="Digite a espécie do animal"
           value={Especie}
           onChange={(e) => setEspeci(e.target.value)}
          />
        </div>

       
        <div className="DadosDoAnimal">
          <label className="fonte">Raça:</label>  
          <input className="letra" type="text"  placeholder="Digite a raça do animal"
           value={Raca}
           onChange={(e) => setRaca(e.target.value)}
          />
        </div>

       
        <div className="DadosDoAnimal">
          <label className="fonte">Data de nascimento:</label>
          <input className="data" type = "date"
          value={date}
          onChange={(e) => setData(e.target.value)}
          
          />
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
          <input className="letra" type="text" placeholder="Digite o nome do responsavel"
           value={NomedoResponsavel}
           onChange={(e) => setNomeResposanvel(e.target.value)}
          />
        </div>

       
        <div className="DadosDoAnimal">
          <label className="fonteContainer2">Nacionalidade:</label>
          <input className="letra" type="text" placeholder="Digite a naciolidade do responsavel"
           value={Nacionalidade}
           onChange={(e) => setNacionalidade(e.target.value)}

          />
        </div>

        <div className="DadosDoAnimal">
          <label className="fonteContainer2">CPF Do Responsavel:</label>
          <input className="letra" type="text" placeholder="Digite o CPF do responsavel"
           value={CPF}
           onChange={(e) => setCPF(e.target.value)}
          
          />
        </div>

        <div className="DadosDoAnimal">
          <label className="fonteContainer2">Telefone Para Contado:</label>
          <input className="letra" type="text" placeholder="Digite o Telefone do responsavel"
           value={Telefone}
           onChange={(e) => setTelefone(e.target.value)}
          />
        </div>

        <div className="DadosDoAnimal">
          <label className="fonteContainer2">CEP:</label>
          <input className="letra" type="text" placeholder="Digite o CEP da Cidade do responsavel"
           value={CEP}
           onChange={(e) => setCEP(e.target.value)}
          
          />
        </div>

        <div className="DadosDoAnimal">
          <label className="fonteContainer2">Endereço:</label>
          <input className="letra" type="text" placeholder="Digite o Endereço do responsavel"
           value={Endereco}
           onChange={(e) => setEndereco(e.target.value)}
          
          />
        </div>

        <div className="DadosDoAnimal">
          <label className="fonteContainer2">Cidade:</label>
          <input className="letra" type="text" placeholder="Digite a Cidade do responsavel"
           value={Cidade}
           onChange={(e) => setCidade(e.target.value)}
          
           />
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
         <select value={selectedRes} onChange={handleChangeRes} style={selectStyleRes}>
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
             <input className="letra1" type="text" placeholder="Digite o Estalecimento"
             value={Estabelecimento}
             onChange={(e) => setEstabelecimento(e.target.value)}
             
             
             />
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
                    
                  <div className="gerarPDF">

                  <button onClick={handleGeneratePDF}>Gerar PDF</button>
                      <div ref={pdfRef}></div>

                     
                    </div>  

           
            <Cirurgias onGeneratePDF={cirurgias => setSelectedCirurgias(cirurgias)} />

           

    


      </main>
  

    </body>

  



  )
}


export default Tela;