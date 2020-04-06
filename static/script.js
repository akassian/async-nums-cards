const BASE_URL = "http://numbersapi.com";

async function request1() {
  let request = await axios.get(`${BASE_URL}/7`);
  console.log(request);
}

let data = [];
async function request2() {
  // let fact = await Promise.all([
  //   $.getJSON(`${BASE_URL}/1`),
  //   $.getJSON(`${BASE_URL}/2`),
  //   $.getJSON(`${BASE_URL}/3`),
  // ])
  //   .then(function (request) {
  //     console.log(`The first fact is ${fact[0]}`);
  //   })
  //   .catch(function (request) {
  //     console.log("ERROR");
  //   });

  for (let i = 1; i < 5; i++) {
    data.push(axios.get(`${BASE_URL}/${i}`));
  }

  Promise.all(data)
    .then(function (response) {
      // console.log(data);
      response.forEach((num) => console.log(num.data));
    })
    .catch((err) => console.log(err));

  // console.log(`The second fact is ${fact[1]}`);
  // console.log(`The third fact is ${fact[2]}`);
  // console.log(fact[0].data);
}

$(document).ready(async function () {
  // request1();
  await request2();
  // console.log(data);
});
