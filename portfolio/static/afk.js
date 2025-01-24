/*
const ms = 30000;
const events = ['mousemove','click','keypress','scroll'];
let timeout;

const timer = () =>{
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    let confirmation = confirm(`You've been afk for ${ms/1000} seconds. Would you like to continue?`);
      if(confirmation){
        timer();
      } else{
        console.log("Close the window please.");
        window.close();
      }
  }, ms);
}

events.forEach( event => {
document.addEventListener(event, () => {
  timer();
  });
});

timer();
*/