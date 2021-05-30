// to return the value in history
function gethistory()
{
    return document.getElementById("history-value").innerHTML;
}

// to assign the history as given input
function showHistory(num)
{
    document.getElementById("history-value").innerHTML = num;
}

// retrieving the value from output

function getOutput()
{
    return document.getElementById("output-value").innerHTML;
}

//retrieving the value from 
function showOutput(num)
{
    document.getElementById("output-value").innerHTML =num;
}
/*
function add(numOne, numTwo)
{
    numOne = parseInt(numOne);
    numTwo = parseInt(numTwo);
    return numone + numtwo;
}
*/
var operator = document.getElementsByClassName("operator");
for( var i =0; i < operator.length; i++)
{   
    operator[i].addEventListener
    ('click',function()
    {    
        if(this.id == "clear")
        {
            showOutput("");
            showHistory("");
        }
        
        else
        {
            var output = getOutput();
            var history = gethistory();
            if (output != "")
            {
               
                history =  output + this.id;
                showOutput(history)
                if(this.id == "=")
                {
                    
                    showHistory(history);
                    showOutput("");
                    history = history.substring(0, history.length -1);           
                    var result = eval(history);
                    showOutput((result));
                }
                else
                {                    
                    showHistory(history);
                }
            }
        }
    });
}

var number = document.getElementsByClassName("number");


for( var i =0; i < 12; i++)
{
    number[i].addEventListener
    ('click',function()
    {
        var output = getOutput();
        if(output != NaN)
        {
            output = output + this.id;
            showOutput(output);
        }
    }
    );
    
}

