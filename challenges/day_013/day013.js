function ordenar(string, string1) {
  let array = [1, 2, 5, 4, 3, 5, 6];

  let test = array.push(string1)


  array.sort((a, b) => a - b);

  console.log(array);
}

ordenar("1234567890",0);
