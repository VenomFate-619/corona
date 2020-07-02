console.log("fetch");
let btn1=document.getElementById("btn")
var list = document.getElementById("stu");//ul
var wra=document.getElementsByClassName("wrapper")[0];

// function getdata()
// {
//     console.log("get started")
//     url="textfile.txt"
//     fetch(url).then((response)=>
//     {
//         console.log("inside first then")
//         return response.text()
//     }).then((data)=>
//     {
//         console.log("inside second then")
//         console.log(data);
//     })
// }
var loader=document.querySelector(".loader")
// window.addEventListener("load", ()=> loader.classList.toggle("disapper"))

var select1=document.getElementById("s1");
function createtitle(q)
{
    const option=q.title;
    if(typeof option != "undefined")
    {
        // let str=`<option>${option}</option>`
        // select1.appendChild(str)
        let str=document.createElement("option")
        str.innerHTML=option
        select1.appendChild(str)

    }

}
function manipulate(data)
{
    // console.log(data.countryitems[0][6])
    for(each in data.countryitems[0])
    {
        let q=data.countryitems[0][each]
       // console.log(q.title)
       createtitle(q);

       select1.addEventListener("change",(e)=>
       {
              
           if(e.target.value == q.title)
           {
               console.log(e.target.value)
               let total_cases=q.total_cases;
               let total_recovered=q.total_recovered
               let total_unresolved=q.total_unresolved
               let total_deaths=q.total_deaths
               let total_active_cases=q.total_active_cases;
               let source=q.source;
            //    let p=document.getElementsByTagName("p")[0];
            //    p.innerText=total_cases;
            let count=` <p>Source: <a href="${source}" target="_blank">${source}</a></p>
            <div class="card-columns">
            <div class="card bg-primary text-light">
               <div class="card-body">
                  <h5 class="card-title">Case</h5>
                  <p class="card-text ">${total_cases}</p>
               </div>
            </div>
   
               <div class="card bg-success text-light">
                  <div class="card-body">
                     <h5 class="card-title">Recovered</h5>
                     <p class="card-text">${total_recovered}</p>
                  </div>
               </div>
            
    
               <div class="card bg-danger text-light">
                  <div class="card-body">
                     <h5 class="card-title">Death</h5>
                     <p class="card-text">${total_deaths}</p>
                  </div>
               </div>
            
   
               <div class="card bg-dark text-light">
                  <div class="card-body ">
                     <h5 class="card-title">Active Case</h5>
                     <p class="card-text">${total_active_cases}</p>
                  </div>
               </div>
            
         </div>`
         wra.innerHTML=count;

           }
            
       }
       )
    }
   
}
function getdata()
{
    console.log("get started")
    url="https://api.thevirustracker.com/free-api?countryTotals=ALL"
    fetch(url).then((response)=>
    {
        console.log("inside first then")
        return response.json()
    }).then((data)=>
    {
        loader.style.display="none"
        console.log("inside second then")
        manipulate(data);
    }).catch( ()=> {
      // loader.style.display="none" 
      alert("error occur")})
}

console.log("function called")
getdata()
console.log("after function called")
