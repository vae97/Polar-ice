import React, {useState, useEffect} from 'react';
import {Line} from 'react-chartjs-2';

export default function Co() {

    const [chartData,setChartData] =useState({});

  
 
     
    useEffect(()=>{

        let date =[];
        let emmition =[]
        fetch('https://global-warming.org/api/co2-api').then((res)=>res.json()).then((data)=>{
           
           for (const dataObj of data.co2){
               date.push(parseInt(dataObj.year))
               emmition.push(parseInt(dataObj.cycle))
           }

           setChartData({
            labels: date,
            datasets:[
                {
                    label:"CO2 in Atmosphere Vs Time (Years)",
                    data:emmition,
                    //backgroundColor:'rgb(75,192,192)',
                    borderColor:'rgb(0,102,0)',
                    borderWidth: 2,
                    tension: 0.5
                }
            ]
        })        
        })
    },[])
  
  return (
    <div className="App">
        <Line data={chartData} options={{responsive:true, radius:0}}></Line>
    </div>
  );
}
