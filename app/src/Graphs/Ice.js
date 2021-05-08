import React, {useState, useEffect} from 'react';
import {Line} from 'react-chartjs-2';

export default function Ice() {

    const [chartData,setChartData] =useState({});

  
 
     
    useEffect(()=>{

        let date =[];
        let area =[]
        fetch('https://global-warming.org/api/arctic-api').then((res)=>res.json()).then((data)=>{
           
           for (const dataObj of data.result){
               date.push(parseInt(dataObj.year))
               area.push(parseInt(dataObj.extent))
           }

           setChartData({
            labels: date,
            datasets:[
                {
                    label:"Polar Ice Extent (Million square Km) Vs Time (Years)",
                    data:area,
                    //backgroundColor:'rgb(75,192,192)',
                    borderColor:'rgb(51,153,255)',
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
