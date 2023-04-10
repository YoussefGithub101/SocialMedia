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

var imgSrc=["imgs/1.jpg","imgs/2.jpg","imgs/3.jpg","imgs/4.jpg","imgs/5.jpg","imgs/6.jpg","imgs/7.jpg","imgs/8.jpg","imgs/9.jpg","imgs/10.jpg"];
var imgIds=["img1","img2","img3","img4"];

var i=0;
var image1;
var image2;

let haveIt = [];


if (!localStorage.win) {
    localStorage.setItem("win", Number(0));
  }
 
function win1(){
    
            
    let conf=confirm("Win. Play again?");
    if(conf==true){
        location.reload()
    }else{
        window.close()
    }

}
document.getElementById("h2").innerText=Number(localStorage.win);

function winCount(){
    localStorage.win = Number(localStorage.win) + 1;
    document.getElementById("h2").innerText=Number(localStorage.win);
    setTimeout(win1, 250);
}


function clearCount(){
    localStorage.win = Number(0);
    location.reload();
}


function generateUniqueRandom(maxNr) {
    //Generate random number
    let random = (Math.random() * maxNr).toFixed();

    //Coerce to number by boxing
    random = Number(random);

    if(!haveIt.includes(random)) {
        haveIt.push(random);
        return random;
    }else {
        if(haveIt.length < maxNr+1) {
          //Recursively generate number
         return  generateUniqueRandom(maxNr);
        } else {
          console.log('No more numbers available.')
          return false;
        }
    }
}




function generateRandom(min, max, exclude) {
    let random;
    while (!random) {
      const x = Math.floor(Math.random() * (max - min + 1)) + min;
      if (exclude.indexOf(x) === -1) random = x;
    }
    return random;
  }

  var random1= Math.floor(Math.random() * 10);
  var random2= generateRandom(0, 9, [random1]);
  var random3= generateRandom(0, 9, [random1,random2]);
  
  console.log(random1);
  console.log(random2);
  console.log(random3);




document.getElementById("find").src=imgSrc[random1];



var num1=generateUniqueRandom(3);
// console.log(num1);
//document.getElementById(imgIds[num1]).src="imgs/1.jpg";
document.getElementById(imgIds[num1]).src=imgSrc[random1];
// document.getElementById(imgIds[num1]).alt="1";
var num2=generateUniqueRandom(3);
// console.log(num2);
//document.getElementById(imgIds[num2]).src="imgs/1.jpg";
document.getElementById(imgIds[num2]).src=imgSrc[random1];
// document.getElementById(imgIds[num2]).alt="1";
var num3=generateUniqueRandom(3);
// console.log(num3);
//document.getElementById(imgIds[num3]).src="imgs/2.jpg";
document.getElementById(imgIds[num3]).src=imgSrc[random2];
// document.getElementById(imgIds[num3]).alt="2";
var num4=generateUniqueRandom(3);
// console.log(num4);
//document.getElementById(imgIds[num4]).src="imgs/3.jpg";
document.getElementById(imgIds[num4]).src=imgSrc[random3];
// document.getElementById(imgIds[num4]).alt="3";

console.log('Unique random numbers:' ,haveIt);

function showImage(myReferenceDiv){
 
var prev = myReferenceDiv.previousElementSibling;
myReferenceDiv.setAttribute("hidden", "hidden");
prev.removeAttribute("hidden");

console.log(i);
if(i==0){
   image1 =prev.src;
   
   i++;
}else if(i==1){
    var image2 =prev.src;
   
   i++;
   match();
}


function match(){
  
    if(image1==image2){
        winCount();
        
        
        
       }else{
        setTimeout(() => {
            let conf=confirm("Lost. Play again?");
            if(conf==true){
                location.reload()
            }else{
                window.close()
            }
        }, 250);
           
       }
       
}
}
var welcomeuserName=localStorage.getItem("firstname");
document.getElementById("wuser").innerText=welcomeuserName;