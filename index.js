const questions = [
  {
    ques: "which of following language is backend language?",
    option1: "HTML",
    option2: "CSS",
    option3: "PHP",
    option4: "JavaScript",
    ans: "c",
  },
  {
    ques: "which of following is server side scripting language?",
    option1: "HTML",
    option2: "CSS",
    option3: "PHP",
    option4: "JavaScript",
    ans: "c",
  },
  {
    ques: "which of following language is widely used for web development?",
    option1: "JAVA",
    option2: "C",
    option3: "C++",
    option4: "JavaScript",
    ans: "d",
  },
];
var index = 0;
let count = 0;
let count1 = 0;
var length = questions.length;
const quesE1 = document.querySelector(".header");
const optionsE1 = document.querySelectorAll(".option");
const boxE = document.querySelector(".box");
function loadques() {
  if (index == length) {
    return endquiz();
  }
  reset();
  quesE1.innerHTML = `${index + 1}) ${questions[index].ques}`;
  // console.log(quesE1.innerHTML);
  boxE.style.backgroundColor = randomColor();
  console.log((boxE.style.border = "thick solid " + randomColor()));

  // row.style.backgroundColor = "green";

  optionsE1[0].nextElementSibling.innerText = questions[index].option1;
  optionsE1[1].nextElementSibling.innerHTML = questions[index].option2;
  optionsE1[2].nextElementSibling.innerHTML = questions[index].option3;
  optionsE1[3].nextElementSibling.innerHTML = questions[index].option4;
}

const btnE1 = document.querySelector(".btn");

btnE1.addEventListener("click", getAns);

function checkAns() {
  btnE1.style.backgroundColor = randomColor();
  let a;
  optionsE1.forEach(function (input) {
    if (input.checked) {
      // console.log(input.value);

      a = input.value;
    }
  });
  return a;
}

function getAns() {
  const data = questions[index];
  const ans1 = checkAns();

  if (ans1 === data.ans) {
    count++;

    console.log(count);
  } else {
    count1++;
    // console.log(count1);
  }
  index++;
  loadques();
  return;
}
loadques();
function endquiz() {
  boxE.innerHTML = `<h1>
  Thankyou for playing the quiz</h1><h1> Score is: ${count}/${length}</h1>`;
}

function reset() {
  optionsE1.forEach(function (input) {
    input.checked = false;
  });
}

function randomColor() {
  var a = 0;
  var color = [
    "rgb(183, 245, 61)",
    "rgb(230, 80, 248)",
    "rgb(58, 249, 107)",
    "rgb(249, 36, 133)",
    "rgb(255, 100, 107)",
  ];

  // for (var i = 0; i < color.length; i++) {
  //   a = color[i];
  //   console.log(a);
  //   return a;
  // }
  // if (i > color.length) {
  //   i = 0;
  // }

  var random = color[Math.floor(Math.random() * color.length)];
  console.log(random);
  return random;
}
const row = document.querySelectorAll(".row");
row.forEach(function (r) {
  r.addEventListener("mouseenter", function () {
    r.style.backgroundColor = "white";
  });
});
row.forEach(function (r) {
  r.addEventListener("mouseleave", function () {
    r.style.backgroundColor = "";
  });
});
