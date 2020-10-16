function myFunction(a,b)
  {
    console.log("this is a sum function")
    return a+b;   // The function returns the product of p1 and p2
  }

function header_test()
{
  var out_str = "";
  for (i = 1; i<7; i++)
  {
    string_int = i.toString()
    out_str += "<h"+ string_int + "> Header size: " + string_int + "</h" + string_int + ">\n";

  }
  return out_str
}  

function main()
{
  var sum = myFunction(4,2);
  var my_headers = header_test()
  console.log(my_headers)
  document.write(my_headers)
  
}

main()