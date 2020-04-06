const BASE_URL = "http://numbersapi.com";

async function request1() {
  let request = await axios.get(`${BASE_URL}/7`);
  console.log(request);
}

async function request2() {
  let fact = await Promise.all([
    $.getJSON(`${BASE_URL}/1`),
    $.getJSON(`${BASE_URL}/2`),
    $.getJSON(`${BASE_URL}/3`),
  ]).catch(function (request) {
    console.log("ERROR");
  });
  console.log(`The first fact is ${fact[0]}`);
  // console.log(`The second fact is ${fact[1]}`);
  // console.log(`The third fact is ${fact[2]}`);
  // console.log(fact[0].data);
}

$(document).ready(function () {
  request1();
  request2();
});
