import {Chart} from "chart.js";
import { useEffect, useRef } from "react";

const Bar=({workData, workName})=>{
  const chartRef=useRef();

  useEffect(()=>{
    if (chartRef && chartRef.current){
                new Chart(chartRef.current, {
                    type:"bar",
                     data:{
                       labels:Object.keys(workData),
                         datasets:[
                         {
                           label:workName,
                           data:Object.values(workData),
                           borderColor:"green",
                           backgroundColor:"green",
                            pointRadius:0,
                            // fill:false
                           
                        },
                      ],
                      },
                        //  options:{...chartOption},
                      })
            };
        });

  return(
<div className="col">
  <canvas ref={chartRef} id="myChart" width={100} height={100}></canvas>
</div>
  )
  }

export default Bar;

