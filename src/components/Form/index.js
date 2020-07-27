import React, {useState}from "react";

const Form =({calcular})=> {
    const [minimumInvestment, setMinimumInvestment] = useState('');
    const [payout, setPayout] = useState('');
    const [stepsN, setStepsN] = useState('');
    const [maximumInvestment] = useState('');
    const [enteredText, setEnteredText] = useState(''); 
    const handleSubmit =(e) =>{
        e.preventDefault()
        calcular(minimumInvestment, payout, stepsN, maximumInvestment);

    
    }
  
    const [error,setError] = useState();


    function handleStepsN(stepsN,name){
      setEnteredText(stepsN)
      if (isNaN(stepsN)) {
        setError(`${name} campo deve ser numérico `);
      }else{
        setError("")
      }
     
      if (stepsN>30){
        //alert("numero de passos excedido")
        
        setError(`O número de passos deve ser menor que 30 `);
        setEnteredText("");
       return null;
      
      }else{

        setStepsN(stepsN);
      }
     
    }
    console.log(payout)
  return (
    <form onSubmit={handleSubmit}>
        <div className="input-block">
        <label>Investimento Mínimo:</label>
        <input type="text" placeholder="exemplo 10.00" onChange={e => setMinimumInvestment(e.target.value)}></input>
        <label>Rendimento:</label>
        <input type="text" placeholder=" % exemplo 70" onChange={e => setPayout(e.target.value,)}></input>
        <label>Número de Passos: </label>
     
        <input name="passos" value={enteredText} type="text" placeholder=" exemplo 5" onChange={e => handleStepsN(e.target.value, e.target.name)} ></input>
        <span >{error!==""? error:""}</span>
         
        </div>
        <br/>
        <input  className="btn" type="submit" value ="calcular"></input>
        
    </form>


  );
}

export default Form