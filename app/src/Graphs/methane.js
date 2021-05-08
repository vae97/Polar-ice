import React, {useState, useEffect} from 'react';
import {Line} from 'react-chartjs-2';

export default function Methane() {

    const [chartData,setChartData] =useState({});

  
 
     
    useEffect(()=>{

        let date =[];
        let emmition =[]
        fetch('https://global-warming.org/api/methane-api').then((res)=>res.json()).then((data)=>{
           
           for (const dataObj of data.methane){
               date.push(parseInt(dataObj.date))
               emmition.push(parseInt(dataObj.average))
           }

           setChartData({
            labels: date,
            datasets:[
                {
                    label:"Methane in Atmosphere (ppm) Vs Time (Years)",
                    data:emmition,
                    //backgroundColor:'rgb(75,192,192)',
                    borderColor:'rgb(0,51,0)',
                    borderWidth: 2,
                    tension: 0.2
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

