import React, {useState} from "react";

const Form =({calcular})=> {
    const [minimumInvestment, setMinimumInvestment] = useState('');
    const [payout, setPayout] = useState('');
    const [stepsN, setStepsN] = useState('');
    const [maximumInvestment] = useState('');
    const handleSubmit =(e) =>{
        e.preventDefault()
        calcular(minimumInvestment, payout, stepsN, maximumInvestment);
    }
    console.log(payout)
  return (
    <form onSubmit={handleSubmit}>
        <div className="input-block">
        <label>Investimento Mínimo:</label>
        <input type="text" placeholder="exemplo 10.00" onChange={e => setMinimumInvestment(e.target.value)}></input>
        <label>Rendimento:</label>
        <input type="text" placeholder=" % exemplo 70" onChange={e => setPayout(e.target.value)}></input>
        <label>Número de Passos: </label>
        <input type="text" placeholder=" exemplo 5" onChange={e => setStepsN(e.target.value)}></input>
        </div>
        <input  className="btn" type="submit" value ="calcular"></input>
    </form>
  );
}

export default Form