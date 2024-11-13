//To pick up buttons
function Solve(val) {
    var v = document.getElementById('res');
    v.value += val;
 }
//To empty field with AC
 function Clear()
 {
    res.value = "";
 }

/*Does the actual counting
Function Result = equal button
eval: evaluates a string value and returns the value as a string or numbers, basically function.
Does the job here, but I read it is not very good for security actually...
try/catch: statement for handling expections, in this case picking up sentiments 
calculator doesn't understand  */
 function Result() {
    try 
   {
    res.value = eval(res.value);
    }
    catch(error)
  {
    res.value = "Error"
  }
}

  function percent() {
    var i = document.getElementById('res').value;
    document.getElementById('res').value = i / 100;
  }
  
