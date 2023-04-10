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

var sec=13;
var difNum=0;
var AreaObjArr=[];
function startCount(){
myInterval=setInterval(myTimer, 1000);
}
function myTimer() {
    sec--;
    if(sec < 0){
        
        clearInterval(myInterval);
        let conf=confirm("Lost. Play again?");
            if(conf==true){
                location.reload()
            }else{
                window.close()
            }
        
    }else{
        document.getElementById("h2").innerText =sec;
    }
}

function increaseCount(){
        difNum++;
        document.getElementById("difCount").innerText=difNum;
    if(difNum==5){
        
        document.getElementById("audio2").play();
        clearInterval(myInterval);
        setTimeout(win1,500);
    }
        
}

function win1(){
    
        
        
        let conf=confirm("Win. Play again?");
        if(conf==true){
            location.reload()
        }else{
            window.close()
        }
       
}
// function win1(){
//     if(difNum==5){
//         document.getElementById("audio1").play();
//         clearInterval(myInterval);
//         let conf=confirm("Win. Play again?");
//         if(conf==true){
//             location.reload()
//         }else{
//             window.close()
//         }
//        }
// }

function clickedArea(areaObj){
    let objId= areaObj.id;
    if(!AreaObjArr.includes(objId)){
        
        
        AreaObjArr.push(objId);
        increaseCount();
        if(difNum!=5){
            document.getElementById("audio1").play();
        }
        
    }else{
        alert("This difference has been chosen before");
    }

}



var welcomeuserName=localStorage.getItem("firstname");
document.getElementById("wuser").innerText=welcomeuserName;