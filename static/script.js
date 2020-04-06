const BASE_URL = "http://numbersapi.com";

async function request1() {
  let request = await axios.get(`${BASE_URL}/0?json`);
  $("body").append(`<br /> ${request.data.text}`);
}

async function request2() {
  let nums = [1, 2, 3];
  let request = await axios.get(`${BASE_URL}/${nums[0]},${nums[1]},${nums[2]}`);
  for (num of nums) {
    $("body").append(`<br /> ${request.data[num]}`);
  }
}

async function request3() {
  let facts = await Promise.all([
    axios.get(`${BASE_URL}/4`),
    axios.get(`${BASE_URL}/4`),
    axios.get(`${BASE_URL}/4`),
  ])
    .then((data) => data.map((d) => d.data))
    .catch(function (request) {
      console.log("ERROR!");
    });
  $("body").append(`<br /> The first fact about 4 is ${facts[0]}`);
  $("body").append(`<br /> The second fact about 4 is ${facts[1]}`);
  $("body").append(`<br /> The third fact about 4 is ${facts[2]}`);
}

async function request4(){
  let card = await axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
  
}

$(document).ready(async function () {
  await request1();
  await request2();
  await request3();
});
