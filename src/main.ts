function a() {
  console.log('a');

  b()
}
function b() {
  for (let index = 0; index < 10000; index++) {
    console.log('long task');
  }
  console.log('b');
}
setTimeout(function test3() {
  console.log(9999);
}, 1000);
setTimeout(function test() {
  setTimeout(function test2() {
    a()
  });
}, 1000);



function c() {
  console.log('c');
  return new Promise(function promise(resolve) {
    setTimeout(() => {
      console.log('promise');
      resolve(null)
    }, 9000);
  })
}
setTimeout(async function test4() {
  await c()
  const h1 = document.createElement("h1")
  h1.innerHTML = "world"
  document.body.appendChild(h1)
}, 2000);