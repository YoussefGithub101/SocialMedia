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



var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
  
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
   
}

let count1=2;
var add_skills = document.getElementById("add_skillss");
var isFunction1 = true;
$(document).ready(function(){

  $("#Add_Skill1").click(
 
    function (){
      if(isFunction1){
        count1++;
        console.log("works")
      var new_skill=` <div class="date" id="skill${count1}">
      <div>
      <label for="skill">Skill ${count1}</label><br>
      <input type="text" name="skill" class="Name">
      </div>
      </div>`
      
        $("#add_skillss").append(new_skill)
    
      }else {
        
        count1++;
        var new_skill= document.createElement("div")
      /*  new_skill.setAttribute("class","date")*/
        new_skill.setAttribute("id",`re_skill${count1}`) 
        new_skill.innerHTML=`
        
        <label for="skill">Skill ${count1}</label><br>
        <input type="text" name="skill" class="Name">
        `
/*         var parent =document.getElementById(`skill${count1-1}`)
        console.log(`skill${count1-1}`)
        console.log(parent) */
        
        $(`#skill${count1-1}`).append(new_skill)
        
      }
      isFunction1 = !isFunction1;
    
  } );
      $("#Delete_Skill").click(function(){
        if(isFunction1){
          $(`#re_skill${count1}`).remove();
          count1--
        
        }else{
          $(`#skill${count1}`).remove();
          count1--
       
        }
        isFunction1 = !isFunction1;
      })
      var count2=0;
      $("#addEmployment").click(function(){
        count2++;
        var new_Employment=document.createElement("div");
        new_Employment.setAttribute("id",`Employment${count2}`);
        new_Employment.innerHTML=`<hr>`+document.getElementById("Employment_copy").innerHTML;
        /* console.log(document.getElementById("Employment").innerHTML) */
       /*  new_Employment.setAttribute("id", `Employment${count}`); */
        $("#Employment").append(new_Employment);
        console.log("works"+count2)
      })
      $("#removeEmployment").click(function(){
        $(`#Employment${count2}`).remove();
        count2--;
      })




      let count3=0;
      $("#addEducation").click(function(){
        count3++;
        var new_Education=document.createElement("div");
        new_Education.setAttribute("id",`Education${count3}`);
        new_Education.innerHTML=`<hr>`+document.getElementById("Education_copy").innerHTML;
        /* $(`#Education${count}`).append(`<hr>`); */
        $(`#Education`).append(new_Education);
        
      })
      $("#removeEducation").click(function(){
        $(`#Education${count3}`).remove();
        count3--;
      })
      
      var count_Language=0;
      $("#AddLanguage").click(function(){
        count_Language++
          var Language1=document.createElement("div");
          Language1.setAttribute("id",`Language${count_Language}`)
          Language1.setAttribute("class","date")
          Language1.innerHTML= document.getElementById("Language").innerHTML;
          $("#Language_parent").append(Language1);
      })

      $("#removeLanguage").click(function(){
        $(`#Language${count_Language}`).remove();
        count_Language--;
      })


    })
 

var questions =['Add your name', 'Personal Details', 'Wanted Job Title', 'Add your Professional Summary', 'Add your Employment History', 'Education','Add your Expertise','Add Language','Chose template'];
var textChange = document.getElementById("title")
textChange.innerHTML= questions [0];
document.getElementById("progress").setAttribute("max",`${questions.length-1}`)
document.getElementById("previous").setAttribute("class","disable")
function next(){
        
        document.getElementById("previous").setAttribute("class","back")
        textChange.innerHTML=questions[questions.indexOf(textChange.innerHTML)+1];
        /* document.getElementById("progress").  */
        
        var prog =questions.indexOf(textChange.innerHTML);
        console.log(prog);
        document.getElementById("progress").value=prog;
        if(questions.indexOf(textChange.innerHTML)==8){
        document.getElementById("Continue").setAttribute("class","disable")
     
          }
          
 
}
function previous(){
        document.getElementById("Continue").setAttribute("class","Continue")
        textChange.innerHTML=questions[questions.indexOf(textChange.innerHTML)-1];
        console.log(questions.indexOf(textChange.innerHTML));
        var prog =questions.indexOf(textChange.innerHTML);
        document.getElementById("progress").value=prog;
        if(questions.indexOf(textChange.innerHTML)==0)
        document.getElementById("previous").setAttribute("class","disable")
        
}
 
function template1(){
  document.getElementById("template2").style.borderColor="black";
  var form = document.getElementById("form");
  form.setAttribute("action","template 1/CV.html");
  document.getElementById("template1").style.borderColor="#00ACEE";
}
function template2(){
  document.getElementById("template1").style.borderColor="black";
  var form = document.getElementById("form");
  form.setAttribute("action","template 2/assignment.html");
  document.getElementById("template2").style.borderColor="#00ACEE";
}
document.getElementById("template1").addEventListener("click",template1)
document.getElementById("template2").addEventListener("click",template2)
