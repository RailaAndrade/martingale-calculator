import React, {useState} from "react";

const Form2 =({calcular})=> {
    const [minimumInvestment, setMinimumInvestment] = useState('');
    const [payout, setPayout] = useState('');
    const [stepsN] = useState('');
    const [maximumInvestment, setMaximumInvestment] = useState('');
    const handleSubmit =(e) =>{
        e.preventDefault()
        calcular(minimumInvestment, payout, stepsN, maximumInvestment);
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className="input-block">
        <label>Investimento Mínimo:</label>
        <input type="text" placeholder="exemplo 10.00" onChange={e => setMinimumInvestment(e.target.value)}></input>
        <label>Rendimento:</label>
        <input type="text" placeholder=" % exemplo 70" onChange={e => setPayout(e.target.value)}></input>
        <label>Investimento Máximo:</label>
        <input type="text" placeholder=" exemplo 1000.00"onChange={e => setMaximumInvestment(e.target.value)}></input>
        </div>
        <input  className="btn" type="submit" value ="calcular"></input>
    </form>
  );
}

export default Form2