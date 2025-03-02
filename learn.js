 function Rock(){
 let b;
 const a = Math.random(0,1);
 if(a>0 && a<=0.33){
    b = "rock";
    alert("tie");
 } else if(a>0.33 && a<=0.66){
    b = "Paper";
    alert("loss");
 } else if(a>0.66 && a<1){
    b = "Scissors";
    alert("win");
 } else{
    b = "Invalid";
 }
 console.log(b);
}

function Paper(){
   let b;
   const a = Math.random(0,1);
   if(a>0 && a<=0.33){
      b = "rock";
      alert("win");
   } else if(a>0.33 && a<=0.66){
      b = "Paper";
      alert("tie");
   } else if(a>0.66 && a<1){
      b = "Scissors";
      alert("loss");
   } else{
      b = "Invalid";
   }
   console.log(b);
  }
  
  
  function Scissors(){
   let b;
   const a = Math.random(0,1);
   if(a>0 && a<=0.33){
      b = "rock";
      alert("loss");
   } else if(a>0.33 && a<=0.66){
      b = "Paper";
      alert("win");
   } else if(a>0.66 && a<1){
      b = "Scissors";
      alert("tie");
   } else{
      b = "Invalid";
   }
   console.log(b);
  }
  
  
    


