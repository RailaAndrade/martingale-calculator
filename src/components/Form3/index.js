import React, {useState} from "react";

const Form3 =({calcular})=> {
    const [minimumInvestment, setMinimumInvestment] = useState('');
    const [payout, setPayout] = useState('');
    const [stepsN, setStepsN] = useState('');
    const [maximumInvestment, setMaximumInvestment] = useState('');
    const handleSubmit =(e) =>{
        e.preventDefault()
        calcular(minimumInvestment, payout, stepsN, maximumInvestment);
    }
    console.log(payout)
  return (
    <form onSubmit={handleSubmit}>
        <div className="input-block">
       
        <label>Rendimento:</label>
        <input type="text" placeholder=" % exemplo 70" onChange={e => setPayout(e.target.value)}></input>
        <label>Número de Passos: </label>
        <input type="text" placeholder=" exemplo 5" onChange={e => setStepsN(e.target.value)}></input>
        <label>Investimento Máximo:</label>
        <input type="text" placeholder=" exemplo 1000.00"onChange={e => setMaximumInvestment(e.target.value)}></input>
        </div>
        <input  className="btn" type="submit" value ="calcular"></input>
    </form>
  );
}

export default Form3