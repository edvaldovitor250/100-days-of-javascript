async function getDate(){
  let response = await fetch('https://api.adviceslip.com/advice');
  let result = await response.json();

  console.log(result);
}

getDate();
