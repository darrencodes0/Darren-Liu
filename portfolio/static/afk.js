const ms = 30000;
const events = ['mousemove','click','keypress','scroll'];
let timeout;

function timer(){
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    let confirmation = confirm(`You've been afk for ${ms/1000} seconds. Would you like to continue?`);
      if(confirmation){
        timer();
      } else{
        console.log("Close the window, I can't close it myself lol");
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