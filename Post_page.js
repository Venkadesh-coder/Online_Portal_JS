var myArr=[];
  function mypost() 
{
	var myTextarea = document.getElementById("myTextarea").value;
	myArr.push(myTextarea);
	var pval="";
	for(i=0;i<myArr.length;i++)
	  {
	    pval=pval+myArr[i]+"<br/>";
	  }
    document.getElementById("demo").innerHTML = pval;
    var myTextarea = document.getElementById("myTextarea").value="";
}
