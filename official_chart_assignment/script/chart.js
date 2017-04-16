//create function and variable for the chartContainer(canvas) this is where the chart will display on the webpage

window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",
    {      
        title:{
            text: "Annual Sales"//chart title
        },
//
axisX:{      
            valueFormatString: "MMM-YY" ,//specifiying the date format I want which is two digit month and four digit year.  Setting the interval type as month and 1 so that I do not generate multiple dates within same month.
            intervalType: "month",
            interval: 1,
            labelAngle: -50
        },
        axisY: {
          valueFormatString: "#,###"   //"#,###"//setting the format 
      },
      //color and style for the amounts on the y axis, also where you display the currency symbol if needed my chart uses £
        toolTip: {
            shared: true,
            content: "<span style='\"'color: {color};'\"'><strong>{name}</strong></span> <span style='\"'color: dimgrey;'\"'>£{y}</span> "
        },
        legend: {
            fontSize: 13
        },


        data: [
        {        
            type: "splineArea", //the type of chart - this can be changed and the chart will reflect the changes and display different chart type
            showInLegend: true,
            name: "Labour Sold",//label
            color: "rgba(54,158,173,.6)",//color
            //datapoints the first month is January which is zero
            dataPoints: [
            {x: new Date(2016, 0), y: 4070},//net figures for each month
            {x: new Date(2016, 1), y: 5804},
            {x: new Date(2016, 2), y: 4183},
            {x: new Date(2016, 3), y: 4600},
            {x: new Date(2016, 4), y: 4211},
            {x: new Date(2016, 5), y: 4128},
            {x: new Date(2016, 6), y: 7354},
            {x: new Date(2016, 7), y: 7072},
            {x: new Date(2016, 8), y: 8651},
            {x: new Date(2016, 9), y: 5375},
            {x: new Date(2016, 10),  y: 5444},
            {x: new Date(2016, 11),  y: 9011}

            ]
        },
        {        
            type: "splineArea", 
            showInLegend: true,
            name: "Mot",   //label     
            color: "rgba(134,180,2,.7)",//color
            //datapoints the first month is January which is zero
            dataPoints: [
            {x: new Date(2016, 0), y: 4848},//net figures for each month
            {x: new Date(2016, 1), y: 3495},
            {x: new Date(2016, 2), y: 3755},
            {x: new Date(2016, 3), y: 3952},
            {x: new Date(2016, 4), y: 3494},
            {x: new Date(2016, 5), y: 3048},
            {x: new Date(2016, 6), y: 3499},
            {x: new Date(2016, 7), y: 3397},
            {x: new Date(2016, 8), y: 4945},
            {x: new Date(2016, 9), y: 5050},
            {x: new Date(2016, 10),  y: 3587},
            {x: new Date(2016, 11),  y: 2249}

            ]
        },
        {        
            type: "splineArea", 
            showInLegend: true,
            name: "Parts Sales",//label
            color: "rgba(194,70,66,.6)",   //color 
            //datapoints the first month is January which is zero    
            dataPoints: [
            {x: new Date(2016, 0), y: 4372},//net figuresfor each month
            {x: new Date(2016, 1), y: 3304},
            {x: new Date(2016, 2), y: 2443},
            {x: new Date(2016, 3), y: 3456},
            {x: new Date(2016, 4), y: 2898},
            {x: new Date(2016, 5), y: 3195},
            {x: new Date(2016, 6), y: 5709},
            {x: new Date(2016, 7), y: 4310},
            {x: new Date(2016, 8), y: 8101},
            {x: new Date(2016, 9), y: 4486},
            {x: new Date(2016, 10),  y: 3915},
            {x: new Date(2016, 11),  y: 5273}


            ]
        },
        {        
            type: "splineArea", 
            showInLegend: true,
            color: "rgba(127,96,132,.6)",  //color  
            //datapoints the first month is January which is zero    
            name: "Fixed Price",//label
            dataPoints: [
            {x: new Date(2016, 0), y: 132},//net figures for each month
            {x: new Date(2016, 1), y: 182},
            {x: new Date(2016, 2), y: 35},
            {x: new Date(2016, 3), y: 141},
            {x: new Date(2016, 4), y: 42},
            {x: new Date(2016, 5), y: 63},
            {x: new Date(2016, 6), y: 97},
            {x: new Date(2016, 7), y: 70},
            {x: new Date(2016, 8), y: 88},
            {x: new Date(2016, 9), y: 35},
            {x: new Date(2016, 10),  y: 65},
            {x: new Date(2016, 11),  y: 49}

            ]
        }      

        ]
    });

chart.render();//call the function to render the chart and display on the webpage
}