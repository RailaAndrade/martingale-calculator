import React, {useState} from "react";
import Form from '../../components/Form/index.js'
import Form2 from '../../components/Form2/index.js'
import Form3 from '../../components/Form3/index.js'
import './styles.css'
import Chart from '../../components/Chart/index.js'


function martingale(a,b,c){
 if (c>30){
   return;
 }
  var steps= [];
  steps[0]=a;
  var i =1;
  b=(b/100)*a
  
  while (i < c+1) {
  
   

   
    steps[i] = (a *(b+a))/ (b)
    b=a+b;
    a=steps[i];

    i++;
  }



  return steps


}
// entradas- investimento inicial e investimento maximo retorno - passos 
function martingale2(a,b,c){
 
  var steps= [];
  steps[0]=a;
  var i =1;
  b=(b/100)*a
  
  while (a<c) {
    if((a *(b+a))/ (b)>c){
      break;
    }
    
    steps[i] = (a *(b+a))/ (b)
   
    b=a+b;
    a=steps[i];

    i++;
  }

  return  steps


}
// entradas - passos e investimento final  retorno- investimento inicial
function martingale3(b,c,d){
 
  var steps= [];
  steps.fill(0,[ 0[ c+1]])
  steps[c+1]=d;
  var i = c;
  b=(b/100)
  
  while (i>=0 ) {

    steps[i] = (d*b)/(1+b)
    /*b=a+b;*/
    d=steps[i];
  
    if(d<0.1){
      steps[0]=-1;
    
      break;  
    }

    i--;
  }

  return  steps;


}


function Wrapper() {
  var [steps, setSteps] = useState([]);
 
  var [showAnswer, setShowAnswer] = useState(false);
 
  const [addMode] = useState(["Retornar passos", "Retornar passos até o investimento final", "Retornar investimento inicial"])
  const Add = addMode.map(Add => Add)

  const [modeID, setmodeID] = useState(0);
  var [ok, setOk] = useState("");

  


  function calcular(minimumInvestment,payout,stepsN,maximumInvestment){
   
 
    if(maximumInvestment===""){
      
      setSteps(martingale(parseFloat(minimumInvestment),parseFloat(payout),parseInt(stepsN)));
      setShowAnswer(true);
    }else if (minimumInvestment===""){
     
      setShowAnswer(false);
      
      var aux= martingale3(parseFloat(payout),parseInt(stepsN),parseFloat(maximumInvestment))
      setSteps(aux);
       
  

      
      if (aux[0]===-1){
         setOk("os número de passos foi excedido para o valor máximo de investimento ")
         setShowAnswer(false);
         
      }else{
        setOk("")
         setShowAnswer(true);
      }

    
      
  
    }else if(stepsN ===""){
     
      setSteps(martingale2(parseFloat(minimumInvestment),parseFloat(payout),parseFloat(maximumInvestment)));
      setShowAnswer(true);
    }


  }
function dividirTexto (steps){
  var result= steps.map((item,key)=> ( 
    <li key={key}> {item.toFixed(2)}</li>
    
  ))
    
  return result 
}

  return (

 
    <div className="Wrapper">
  
      <div className="content-area">
      
        <div className="heading">
          <h1> Calculadora  Martingale</h1>
        </div>
        <div className="row">
          <div className="card ">
          
            <div className="select" name="slct" id="slct">
         
              < select
                value={modeID}
                onChange={(e)=> {setmodeID(Number(e.target.value)); setSteps([]);setShowAnswer(false)}}
                className="browser-default custom-select" >
                  <option  value={0}disabled>selecione o modo</option>
                {
                   
                Add.map((mode, key) => <option key={key+1}value={key+1}>{mode}</option>)
                }
              </select >

            </div>

            {modeID === 1? <Form calcular={calcular} />:modeID===2?<Form2 calcular={calcular}/>:modeID===3?<Form3 calcular={calcular} ok={ok}/>:""}
           
                
          </div>
              
          {showAnswer===true?<div className={"card1 column-1 answer-passes-open"}>
        
            {showAnswer===true && (modeID === 1? <div className="answer">passos</div>: modeID === 2?
            <div className="answer">quantidade de passos: <div className="answer-box">{steps.length}</div><br/></div>:
             modeID === 3 && steps[0]!== -1?
             <div className="answer">O investimento inicial deve ser:
              <div className="answer-box">{
                
                steps[0]!== -1? 
              steps[0].toFixed(2):""}
              </div>
              <br/> Passos <br/><br/>

             </div>:null)}
              <div className="answer-passes-open">


                {showAnswer===true && steps[0]!== -1 &&
            
                  <ol className="list-numbered">
                 
                    {dividirTexto(steps)}
                    

                  </ol>


                }

              </div>
         


          </div>:null}

          {showAnswer===true && steps[0]!==-1 ?<div className="card column-2 mychart" id="myChart">
 
            {showAnswer===true? <Chart steps={steps}/>:null}
            <div className="canvas-holder">


            </div>


          </div>:null}
        </div>
      </div>




    </div>
  );
  }
  export default Wrapper