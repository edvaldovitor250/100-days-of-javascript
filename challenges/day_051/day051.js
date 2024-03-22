async function addApi() {
  let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  let data = await response.json();
  console.log(data);
  return data;
}

addApi();
