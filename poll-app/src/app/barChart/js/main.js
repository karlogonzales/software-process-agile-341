const BUTTON = document.getElementById("button1");
var name = "questionN";
var test = ["sodium", "plutonium", "potassium"];
var data = [30, 40, 50];

//Abstract value given for testing reason. The real fucntion gets the variable from the server
//function job is to retreave the data to be displayed on the bar chart
//function getValues(name, test, data)

function getValues(a = "questionN", b = ["sodium", "plutonium", "potassium"], c = [30, 40, 50])
{
    var x = a;
    var z = b; 
    var y = c;

    var a1 = ['A', 'B'];
    var a2 = ['A', 'B', 'C'];
    var a3 = ['A', 'B', 'C', 'D'];
    var a4 = ['A', 'B', 'C', 'D', 'E'];
    switch(z.length){
        case 2:
        {
            z = a1;
            break; 
        }
        case 3:
        {
            z = a2;z
            break; 
        }
        case 4:
        {
            z = a3;
            break; 
        }
        case 5:
        {
            z = a4;
            break; 
        }
        default:
        {
            alert("Problem with the graph creation, aborting");
        }
    }

    return V = [x, z, y]; 
};

//Generating bar chart using graph.js
function G(name, test, data)
{
    var V = getValues(name, test, data);
    const CHART = document.getElementById("lineChart");
    console.log(CHART);
    let lineChart = new Chart(CHART, {
        type: 'bar',
        data : {
        labels: V[1],
        datasets: [
            {
                label: V[0],
                backgroundColor: [
                    'rgba(72, 67, 219, 0.2)',
                    'rgba(234, 237, 49, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(72, 67, 219, 1)',
                    'rgba(234, 237, 49, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
                data: V[2],
            }
        ]
    },
        options: {
            responsive: true,
            maintainAspectRatio:  true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }      
            }


    });

    alert("yo");

};
