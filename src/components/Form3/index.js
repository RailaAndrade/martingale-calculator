import React, {useState, useEffect} from "react";

const Form3 =( props)=> {


  // Similar a componentDidMount e componentDidUpdate:
 

    const [minimumInvestment] = useState('');
    const [payout, setPayout] = useState('');
    const [stepsN, setStepsN] = useState('');
    const [maximumInvestment, setMaximumInvestment] = useState('');
    const [stepsValidation, setStepsValidation]=useState("");
    const handleSubmit =(e) =>{
        e.preventDefault()
        props.calcular(minimumInvestment, payout, stepsN, maximumInvestment);

    }

 
    useEffect(() => {
      //props.stepsOverflow();
      
      setStepsValidation(props.ok);
  
    },[stepsN,props.ok]);

    //const [enteredText, setEnteredText] = useState(''); 
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
        <span>{stepsValidation!==""?stepsValidation:""}</span>
       
        <input  className="btn" type="submit" value ="calcular"></input>

        
    </form>
  );
}

export default Form3