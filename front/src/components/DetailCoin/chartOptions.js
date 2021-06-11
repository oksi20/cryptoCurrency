import { findNonSerializableValue } from "@reduxjs/toolkit";

export const chartOption={
  
  lineHeightAnnotation:{
    always:true,
    hover:false,
    lineWeight:1.5,
  },
  animation:{
    duration:2000,
  },
  maintainAspectRation:false,
  responsive:true,
  
  legend: {
    labels: {
        fontColor: "white",
        // fontSize: 15
    }
},

  scales:{
    xAxes:[
      {
        type:"time",
        time:{
          // unit:'hour'
        },
        display: true,
    distribution:"linear",
  //   ticks: {
  //     fontColor: "white",
  //     stepSize: 1,
  //     beginAtZero: true
  // }
  },
  
    ],
    // yAxes:[
    //   {
    //     ticks:{
    //       fontColor: "white",
    //   // stepSize: 1,
    //   // beginAtZero: true
    //     }
    //   }
    // ],

    
  }
}
