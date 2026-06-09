let screen=document.querySelector("#screen");
let btn=document.querySelector("#btn");
let URL = "https://dummyjson.com/quotes"; 
async function generator(){
    try{
    let data= await fetch(URL);//first promise
    let d= await data.json();//second promise
    let idx=Math.floor(Math.random()*d.quotes.length);
    console.log(d.quotes[idx].quote);
    screen.innerText=d.quotes[idx].quote+"  -"+d.quotes[idx].author;
    }
    catch(error){
        console.log(error);
        screen.innerText="Some error occurred!!";
    }
}
btn.addEventListener("click",generator);