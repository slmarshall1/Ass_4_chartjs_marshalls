window.onload = function () {
        var chart = new CanvasJS.Chart("chartContainer",
        {
            title:{
                text: "Annual Turnover"
            },
                        animationEnabled: true,
            theme: "theme3",//accessing the css properties of the chart-change colours and display
            data: [
            {        
                type: "doughnut",//chart type
                indexLabelFontFamily: "Garamond",   //font type    
                indexLabelFontSize: 20,//font size
                startAngle:0,//straight text
                indexLabelFontColor: "dimgrey",   //colour    
                indexLabelLineColor: "darkgrey", //colour
                toolTipContent: "{y} %",                    

                dataPoints: [
                {  y: 41.67, indexLabel: "Labour {y}%" },//percentageLabel, axis labels and sales percentages
                {  y: 27.02, indexLabel: "Mots {y}%" },
                {  y: 30.68, indexLabel: "Parts Sales {y}%" },
                {  y: 0.63,  indexLabel: "Fixed Price {y}%"}
                
                ]
            }
            ]
        });

        chart.render();
    }//function that displays the chart