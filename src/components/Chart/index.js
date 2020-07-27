import React from "react";
import { Line} from 'react-chartjs-2';


const Chart =(props)=> {

    
    var aux=[];
    for ( var i=0; i<props.steps.length; i++){

        aux[i]=props.steps[i].toFixed(2)
    }
    
  
    const data = {

    
        labels: Array.from({length: props.steps.length}, (v, k) => k),

        datasets: [
          { label: '',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(245,222,179)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(245,222,179)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(245,222,179)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data:aux
          }
   
        ],
       
        
      };
      const options ={

    
            legend: {
                display:false
            }
        
      }
      
    return (

        <div>
       
        <Line data={data} options={options}/>
      </div>
    );


}

export default Chart