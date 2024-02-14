let  array = [1,3,56,7,6,4,20]

let busca_binaria = (array,left, right, valor)=>{
  let mid = Math.floor((left + right) / 2);
  if(array[mid] === valor){
    return mid;
  }else if(array[mid] < valor){
    return busca_binaria(array, mid + 1, right, valor);
  }else{
     busca_binaria(array, left, mid - 1, valor);
    console.log("Não achou")
  }


}

console.log(busca_binaria(array, 4, array.length - 1, 20));