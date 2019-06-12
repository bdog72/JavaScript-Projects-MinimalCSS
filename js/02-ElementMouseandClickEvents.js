// //
// //
// const container = document.querySelector('.container');
// const startGame = document.querySelector('.startGame');
// const scoreArea = document.querySelector('.score');

// let player = {
//   score: 0
// };

// startGame.addEventListener('click', function() {
//   startGame.style.display = 'none';
//   let ranTime = Math.random() * 2000 + 1000;
//   setTimeout(makeItem, ranTime);
// });

// function makeItem() {
//   let boundary = container.getBoundingClientRect();
//   // console.log(boundary);
//   let div = document.createElement('div');
//   div.style.position = 'absolute';
//   div.style.left = Math.random() * boundary.width + 'px';
//   div.style.top = Math.random() * boundary.height + 'px';
//   div.style.width = Math.random() * 10 + 40 + 'px';
//   div.style.height = Math.random() * 10 + 40 + 'px';
//   div.style.borderRadius = '10%';
//   div.style.cursor = 'pointer';
//   div.style.backgroundColor =
//     '#' +
//     Math.random()
//       .toString(16)
//       .substr(-6);
//   // let bozo = (div.style.backgroundColor =
//   //   '#' +
//   //   Math.random()
//   //     .toString(16)
//   //     .substr(-6));
//   // console.log(bozo);
//   div.style.border = '1px solid black';
//   div.startTiem = Date.now();
//   container.appendChild(div);
//   console.log(div);
// }

const container = document.querySelector('.container');
const startGame = document.querySelector('.startGame');
const scoreArea = document.querySelector('.score');
let player = {
  score: 0
};
startGame.addEventListener('click', function() {
  startGame.style.display = 'none';
  let ranTime = Math.random() * 2000 + 1000;
  setTimeout(makeItem, ranTime);
});

function makeItem() {
  let boundary = container.getBoundingClientRect();
  console.log(boundary);
  let div = document.createElement('div');
  div.style.position = 'absolute';
  div.style.left = Math.random() * boundary.width + 'px';
  div.style.top = Math.random() * boundary.height + 'px';
  div.style.width = Math.random() * 10 + 40 + 'px';
  div.style.height = Math.random() * 10 + 40 + 'px';
  div.style.borderRadius = '10%';
  div.style.cursor = 'pointer';
  div.style.backgroundColor =
    '#' +
    Math.random()
      .toString(16)
      .substr(-6);
  div.style.border = '1px solid black';
  div.startTime = Date.now();
  container.appendChild(div);
  console.log(div);
}
