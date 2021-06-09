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
  
  scales:{
    xAxes:[
      {
        type:"time",
        time:{
          unit:'hour'
        },
        display: true,
    distribution:"linear",
  }
    ],
    // yAxes:[
    //   {
    //     ticks:{
    //       beginAtZero:true,
    //     }
    //   }
    // ],

    
  }
}
