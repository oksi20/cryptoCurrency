import {Chart} from "chart.js";
import { useEffect, useRef } from "react";
import { chartOption } from "./chartOptions";
import style from './history.module.css'



// Chart.register(Tooltip, CategoryScale, LinearScale, Title);

const HistoryCoin=({coinData})=>{
  const chartRef=useRef();
const {day, week, year}=coinData;

  useEffect(()=>{
    if (chartRef && chartRef.current){
                new Chart(chartRef.current, {
                    type:"line",
                     data:{
                         datasets:[
                         {
                           label:"coins",
                           data:day,
                           borderColor:"green",
                          //  backgroundColor:"green",
                            pointRadius:0,
                            // fill:false
                           
                        },
                      ],
                      },
                         options:{...chartOption},
                      })
            };
        });
    


//    const chartInst=new Chart(chartRef.current, {
//   type:"line",
//    data:{
//        datasets:[
//        {
//          label:"coins",
//          data:day,
//          borderColor:"red",
//           pointRadius:0,
//           // backgroundColor:'transperant'

//       },
//     ],
//     },
//        options:{...chartOption},
//     })

//     }
//  }, [])
  return(
<div className={style["canvas"]}>
  <canvas ref={chartRef} id="myChart" width={300} height={"300"}></canvas>
</div>
  )
  }
// return(
//   <Line data={{
//     datasets:[
//       {
//         label:"coins",
//         data:day,
//         borderColor:"red",
//         backgroundColor:"red",
//         pointRadius:0,

//       },
//     ],
// }} options={{...chartOption}} width={100} height={100} />
// )
// }


export default HistoryCoin;
