async function addApi(api){
  let response = await fetch(api)
  let result = await response.json()
  console.log(result)

}

addApi()