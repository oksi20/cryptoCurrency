// import {Chart} from "chart.js";
// import { useEffect, useRef } from "react";
// import { chartOption } from "./chartOptions";



// // Chart.register(Tooltip, CategoryScale, LinearScale, Title);

// const HistoryCoin=({coinData})=>{
//   const chartRef=useRef();
// const {day, week, year}=coinData;

//   useEffect(()=>{
//     if (chartRef && chartRef.current){
    
//       require(['chartjs'], function(Chart) {
//         require(['moment'], function() {
//             require(['chartjs-adapter-moment'], function() {
//                 new Chart(ctx, {
//                     type:"line",
//                      data:{
//                          datasets:[
//                          {
//                            label:"coins",
//                            data:day,
//                            borderColor:"red",
//                             pointRadius:0,
//                             // backgroundColor:'transperant'
                  
//                         },
//                       ],
//                       },
//                          options:{...chartOption},
//                       })
                  
//                     });
//             });
//         });
//     }});


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
//   return(
// <div>
//   <canvas ref={chartRef} id="myChart" width={250} height={250}></canvas>
// </div>
//   )
//   }
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


// export default HistoryCoin;
