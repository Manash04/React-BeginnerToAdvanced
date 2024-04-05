// function main() {
//     fetch("https://sum-server.100xdevs.com/todos")
//     .then(async response=>{
//         const json = await response.json();
//         console.log(json);
//     })
// }
// main();

// async function main() {
// const response = await fetch("https://sum-server.100xdevs.com/todos");
// const json = await response.json();
// console.log(json.todos.lenght);
// }
// main();

const axios = require("axios");

async function main() {
  const response = await axios.post(" https://httpdump.app/dumps/68aecebc-b599-4810-90b5-449541a1b878",{
    username: "Manash Bandhu",
    password: "1234567"
  },{
    headers:{
        Authorization: "Bearer 123"
    },
  },
  );
  console.log(response.data);
}
main();
