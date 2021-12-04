
//  let table=document.querySelector('.table')
// let form=document.querySelector('form')
// form.addEventListener("submit", e => {
//     //    if(inputval.Value==ele.Country){
//     console.log('k');
//     let x=document.createElement('h1')
//     x.innerHTML='lkjlj'
//     table.appendChild(x)
  
//     // let sdata=createElement('div');
//     // sdata.innerHTML=` Total Case:`
//     // search.appendChild(sdata)
// // }
// });

let table=document.querySelector('table')
let inputval=document.querySelector('.input')
let url='https://api.covid19api.com/summary';
let form=document.querySelector('form')
let time=document.querySelector('.time')
let search=document.querySelector('.search')
let sbox=document.querySelector('.sdata')
fetch(url).then(res=>res.json()).then(data=>{
    // console.log(data.Countries);
    display(data.Countries);
  
    let d=data.Countries;
   
})
function display(val){
val.forEach(ele => {
    // console.log(ele);
   let row= document.createElement('tr');
   let country=document.createElement('td');
   let total=document.createElement('td');
   let newcase=document.createElement('td');
   let newdeath=document.createElement('td');
   let newrec=document.createElement('td');
   ele.Date=ele.Date.split('.');
   ele.Date=ele.Date[0].split('T');
   time.innerHTML=`last update on &ensp;${ ele.Date[0]} ${ele.Date[1]} IST` ;
  
//    console.log(ele.Country);
   form.addEventListener("submit", e => {
      e.preventDefault();
    //    console.log(inputval.value);
       if(inputval.value.toLowerCase()==String(ele.Country).toLowerCase()){
    // console.log('kk');
    let sdata=document.createElement('div');
    sbox.innerHTML=` ${ele.Country}
                     <br> Total Case: ${ele.TotalConfirmed}
                    <br> New Case: ${ele.NewConfirmed}
                    <br> New Deaths ${ele.TotalDeaths}
                    <br> New Recovered ${ele.TotalRecovered}
                    `
    
}
});

ele.Country=ele.Country.split(' ')
// if(ele.Country.length>2){
   let ctr='';
   ele.Country.forEach(element => {
      ctr+=`${element} <br>`;
     
   }); country.innerHTML=ctr;
// }
// else
   // country.innerHTML=ele.Country[0];
   total.innerHTML=ele.TotalConfirmed;
   newcase.innerHTML=ele.NewConfirmed
   newdeath.innerHTML=ele.TotalDeaths;
   newrec.innerHTML=ele.TotalRecovered
  

   table.appendChild(row);
   row.appendChild(country)
   row.appendChild(total)
   row.appendChild(newcase)
   row.appendChild(newdeath)
   row.appendChild(newrec)
});
}

