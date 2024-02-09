function filterNames(names) {
    let filteredNames = names.filter(name => name.startsWith("A"));
    console.log(filteredNames);
}

let nameList = ["Ana", "Carlos", "Edvaldo", "Victor"];

filterNames(nameList);
