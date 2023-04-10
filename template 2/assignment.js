



const  URL1 = location.search;
const searchParams = new URLSearchParams(URL1);

var name1 =document.getElementById("name");

var First_Name =searchParams.get("First_Name")
var Last_Name = searchParams.get("Last_Name")
name1.innerHTML=First_Name+" "+Last_Name


var job= searchParams.get("Wanted_Job");
document.getElementById("job").innerHTML=job;
 

var Phone= searchParams.get("Phone");
document.getElementById("Phone").innerHTML=Phone

var Email= searchParams.get("Email");
document.getElementById("Email").innerHTML=Email

var address= searchParams.get("address");
document.getElementById("address").innerHTML=address;

var Summary= searchParams.get("Summary");
document.getElementById("Summary").innerHTML=Summary;


var Company_name= searchParams.getAll("Company_name");
var Job_Position= searchParams.getAll("Job_Position");
var Start= searchParams.getAll("Start");
var End= searchParams.getAll("End");
var job_Desciption= searchParams.getAll("job_Desciption");




let combinedArray = [
    {
    "Company_name":Company_name,
    "Job_Position":Job_Position,
    "Start":Start,
    "End":End,
    "job_Desciption":job_Desciption,
}
]
 console.log(combinedArray)
  
    var Experience=document.getElementById("Experience")

 for(var i=0; i < combinedArray[0].Company_name.length;i++){
             
            var div1 = document.createElement("div")
            div1.setAttribute("class","job")
                div1.innerHTML =
                    `
                    <h2>${combinedArray[0].Company_name[i]}</h2>
                    <h3>${combinedArray[0].Job_Position[i]}</h3>
                    <h4>(${combinedArray[0].Start[i]})  </span><span>(${combinedArray[0].End[i]})</h4>
                    <p>${combinedArray[0].job_Desciption[i]}</p>
                    `

                    Experience.appendChild(div1)
                    
}

///////////////////////////////////////////////////////////////////////////
var School= searchParams.getAll("School");
var Degree= searchParams.getAll("Degree");
var Start_Edu= searchParams.getAll("Start_Edu");
var End_Edu= searchParams.getAll("End_Edu");
var Desciption_Edu= searchParams.getAll("Desciption_Edu");


let combined_Education = [
    {
    "School":School,
    "Degree":Degree,
    "Start_Edu":Start_Edu,
    "End_Edu":End_Edu,
    "Desciption_Edu":Desciption_Edu,
}
]
var Education=document.getElementById("Education")

for(var i=0; i < combined_Education[0].School.length;i++){
             
    var Education_div = document.createElement("div")
    Education_div.setAttribute("class","contant")
    Education_div.innerHTML =
            `
            <div style=" line-height: 10px;">
                 <b>${combined_Education[0].Start_Edu[i]}- <span>${combined_Education[0].End_Edu[i]}</span></b>
                 <p>${combined_Education[0].School[i]}</p>
                 <b>${combined_Education[0].Degree[i]}</b>
                   
                </div>
                <div>${combined_Education[0].Desciption_Edu[i]}</p>

                </div>
            `
            
        Education.appendChild(Education_div)
           
}


var skill= searchParams.getAll("skill");
var skills = document.getElementById("skills") 
console.log(skill.length)
for (var i=0; i < skill.length; i++){
    var skilles =document.createElement("li");
    skilles.innerHTML=skill[i];
    skills.appendChild(skilles);

}  



var Language= searchParams.getAll("Language");
var option= searchParams.getAll("option");

var combined_Language=[{
    "Language":Language,
    "option":option
}]
var Language = document.getElementById("Language");
for(var i=0; i <combined_Language[0].Language.length;i++){
    var Language1 = document.createElement("div")
    Language1.setAttribute("class","contant")
    Language1.innerHTML=`
    <b>${combined_Language[0].Language[i]}</b>
    <p>${combined_Language[0].option[i]}</p>`
    Language.appendChild(Language1)
}

 