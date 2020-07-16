import React, {useState} from "react";
import Form from '../../components/Form/index.js'
import Form2 from '../../components/Form2/index.js'
import Form3 from '../../components/Form3/index.js'
import './styles.css'

function martingale(a,b,c){
 
  var steps= [];
  steps[0]=a;
  var i =2;
  b=(b/100)*a
  
  while (i < c+1) {
    console.log("a",a)
    console.log("b",b)
   

   
    steps[i] = (a *(b+a))/ (b)
    b=a+b;
    a=steps[i];

    i++;
  }

  return  steps


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
  steps[c+1]=d;
  var i = c;
  b=(b/100)
  
  while (i>0) {
    console.log("d",d)
    //console.log("b",b)*/


    steps[i] = (d*b)/(1+b)
    /*b=a+b;*/
    d=steps[i];
    



    i--;
  }

  return  steps


}


function Wrapper() {
  const [steps, setSteps] = useState([]);
 
  const [showAnswer, setShowAnswer] = useState(false);
  const [addMode] = useState(["Retornar passos", "Retornar passos até o investimento final", "Retornar investimento inicial"])
  const Add = addMode.map(Add => Add)

  const [modeID, setmodeID] = useState(1);





  function calcular(minimumInvestment,payout,stepsN,maximumInvestment){
   
    setShowAnswer(true);
    if(maximumInvestment===""){
    
      return setSteps(martingale(parseFloat(minimumInvestment),parseFloat(payout),parseInt(stepsN)));
    }else if (minimumInvestment===""){
      return setSteps(martingale3(parseFloat(payout),parseInt(stepsN),parseFloat(maximumInvestment)))
  
    }else if(stepsN ===""){
      return setSteps(martingale2(parseFloat(minimumInvestment),parseFloat(payout),parseFloat(maximumInvestment)));
    }


  }



  return (

   
    <div className="Wrapper">

      <div className="content-area">
        <div className="heading">
          <h1> Calculadora  Martingale</h1>
        </div>
        <div className="cards">
          <div className="card ">
          
            <div className="select" name="slct" id="slct">
         
              < select
                value={modeID}
                onChange={(e)=> {setmodeID(Number(e.target.value)); setSteps([]);setShowAnswer(false)}}
                className="browser-default custom-select" >
                  <option  key={0} value={0}disabled>selecione o modo</option>
                {
                   
                Add.map((mode, key) => <option key={key+1}value={key+1}>{mode}</option>)
                }
              </select >

            </div>

            {modeID === 1? <Form calcular={calcular}/>:modeID===2?<Form2 calcular={calcular}/>:modeID===3?<Form3 calcular={calcular}/>:""}
            
        
          </div>

          <div className="card">
           
            {showAnswer===true && (modeID === 1? <div className="answer">passos</div>: modeID === 2?
            <div className="answer">quantidade de passos: <div className="answer-box">{steps.length}</div><br/></div>:
             modeID === 3?
             <div className="answer">O investimento inicial deve ser:
              <div className="answer-box">{
              steps[1].toFixed(2)}
              </div>
              <br/> Passos <br/><br/>

             </div>:"")}
              <div className="answer-passes">


                {showAnswer===true && 
            
                  <ol className="list-numbered">
                  
                    {steps.map(item => (
                      <li key={item.id}> {item.toFixed(2)}</li>
                    ))}
                  </ol>
                }
              </div>
         


          </div>
          <div className="card">
            <p>some information</p>


          </div>
        </div>
      </div>




    </div>
  );
  }
  export default Wrapper