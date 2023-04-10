var pri;
var ht=new XMLHttpRequest()
ht.open("GET","https://dummyjson.com/products",true)
ht.send()
ht.onreadystatechange=function()
{
  if(this.readyState==4 && this.status==200)
  {
   var dataafterconvertt=JSON.parse(this.responseText).products
   
   
      var carr=''
      for(var j=0;j<dataafterconvertt.length-2;j++)
      {
         carr+=`
         <div class="col-5 gy-4 text-center">
          
         <img src="${dataafterconvertt[j].thumbnail}" class="w-100 h-50  rounded-5 p-4">
         <h3>${dataafterconvertt[j].title}</h3>
         <p>${dataafterconvertt[j].brand}</p>
         <p>${dataafterconvertt[j].category}</p>
         <p>${dataafterconvertt[j].price}</p>
         <button class=" btn btn-info px-5" onclick="d(this)" id="buy">Buy</button>
          
      
       </div>
        </div>
         `
      }

      document.getElementById("ho").innerHTML=carr
    }
      
  }      
function d()
{

  var address=prompt("Enter your address")
  var phone=prompt("Enter your number")

  var t=confirm("Confirm process")
 if(t==true)
 {
  alert("You will receive the orders within 5 days in"+" "+ address)
  alert("Thank you")
 }
 else
 {
  alert("We hope that you will see the rest of the products, perhaps you will like something else")
 }

}



$("#io").click(function()
{
  var o=$("#navside").offset().left
  if(o==-50)
  {
    $("#navside").css({
      "left":"1px",
      "transition":"all 0.5s"
    })
  }
  else
  {
    $("#navside").css({
      "left":"-50px",
      "transition":"all 0.5s"
    })
  }
})
$("#po").click(function()
{
  var po=document.getElementById("po")

  if(po.getAttribute("class")=="fa-solid fa-toggle-off")
  {
    po.setAttribute("class","fa-solid fa-toggle-on")
  }
  else
  {
    po.setAttribute("class","fa-solid fa-toggle-off")
  }
  $("body").toggleClass("colorbettween")
  $("#io").toggleClass("colorbettweenn")


})

var welcomeuserName=localStorage.getItem("firstname");
document.getElementById("wuser").innerText=welcomeuserName;