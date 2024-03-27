async function getApi(url) {
  return new Promise((resolve) => {
    setTimeout(async () => {
      let result = await fetch(url)
      let data = await result.json();
      console.log(data);
      resolve(data);
    }, 2000);
  });
}

getApi('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')