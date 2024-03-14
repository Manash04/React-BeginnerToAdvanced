const axios = require('axios');

// function main() {
//     fetch("http://sum-server.100xdevs.com/todos")
//     .then(async (response) => {
//         const json = await response.json();
//         console.log(json.todos.lenght);
//     })
// }


async function main(){
    const response=await axios.get("http://sum-server.100xdevs.com/todos");
    console.log(response.data.todos.length);
}

main();
