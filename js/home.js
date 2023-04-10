
var dataa=document.getElementById("Data")
var io=document.getElementById("io")
var navside=document.getElementById("navside")
var htt=new XMLHttpRequest()


 htt.onreadystatechange=function()
 {
   if(this.readyState==4 && this.status==200)
   {
    var dataafterconvert=JSON.parse(this.responseText).posts
    
    
       var car=''
       for(var i=0;i<dataafterconvert.length;i++)
       {
             car+=`

             <div id="childd">

            
                     <div class="b">
                     <i class="fa-solid fa-user"></i>
                      </div>
                      <br>
          
                    <p>${dataafterconvert[i].body}</p>
                    <br>
                     
                    <div class="no">
                    <i class="fa-solid fa-thumbs-down"></i>
                   
                    <i class="fa-solid fa-thumbs-up" ></i>
                    
                    </div>
               
                    </div>
                    
             
             `
       }
          document.getElementById("Data").innerHTML=car
   }       

 }

 htt.open("GET","https://dummyjson.com/posts",true)
 htt.send()

 var po=document.getElementById("po");
$("#po").click(function()
{
  
 
  if(po.getAttribute("class")=="fa-solid fa-toggle-off")
  {
    poOnOff=true;
    po.setAttribute("class","fa-solid fa-toggle-on")
  }
  else
  {
    po.setAttribute("class","fa-solid fa-toggle-off")
  }
  $("body").toggleClass("colorbettween")
  $("#io").toggleClass("colorbettweenn")


})
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


var welcomeuserName=localStorage.getItem("firstname");
document.getElementById("wuser").innerText=welcomeuserName;