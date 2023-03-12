// window.onload = () => {
//     let rightAnswer = document.getElementsByClassName("right-answer")
//     let wrongAnswer = document.getElementsByClassName("wrong-answer")
//     for (let answer of rightAnswer) {
//         answer.onclick = rightAnswerClick   
//     }
//     // console.log(rightAnswer)

//     // console.log(wrongAnswer)
    
//     for (let answer of wrongAnswer) {
//         answer.onclick = wrongAnswerClick
//     }
// }

// let rightAnswerClick = (event) => {
//     event.target.classList.add("green")
// }

// let wrongAnswerClick = (event) => {
//     event.target.classList.add("red")
// }

//AHMADS CODE SHARE
window.onload = () => {
    let questions = document.getElementsByClassName("question-box")

    for (const question of questions) {
        let rightAnswers = question.getElementsByClassName("right-answer")
        let wrongAnswers = question.getElementsByClassName("wrong-answer")
        console.log(wrongAnswers)
        let answered = false;

        for (const rightAnswer of rightAnswers) {
            rightAnswer.onclick = (event) => {
                if (!answered) {
                    event.target.classList.add("green")
                    answered = true;
                }
            };
        }

        for (const wrongAnswer of wrongAnswers) {
            wrongAnswer.onclick = (event) => {
                if (!answered) {
                    event.target.classList.add("red")
                    answered = true;
                }
            };
        }
    }
};

// JUSTINS CODE SHARE
// body {
//     align-items: center;
//     border-left: 200px solid #235cc5;
//     border-right: 200px solid #235cc5;
//     display: flex;
//     flex-direction: column;
//     font-family: 'Londrina Solid', sans-serif;
//     margin: 0;
//     min-height: 800px;
// }

// h1, h2 {
//     color: #235cc5;
//     font-family: 'Titan One', serif;
// }

// p {
//     margin-block-start: 0;
//     margin-block-end: 0;
// }

// h1 {
//     font-size: 3em;
//     margin-bottom: -20px;
// }

// ul, li {
//     display: block;
//     list-style: none;
//     padding-inline-start: 0;
// }

// .question-box {
//     align-items: center;
//     background-color: #235cc5;
//     border-radius: 16px;
//     color: #fff;
//     display: flex;
//     flex-direction: column;
//     font-size: 1.7em;
//     margin-bottom: 16px;
//     padding: 20px 60px 20px 60px;
//     width: 70%;
// }

// .answers-box {
//     display: grid;
//     grid-template-columns: 50% 50%;
//     grid-template-rows: 50% 50%;
//     width: 100%;
// }

// .binary {
//     grid-template-rows: 100%;
// }

// .answers-box > li {
//     border: 2px solid #fff;
//     border-radius: 16px;
//     text-align: center;
//     margin: 6px;
//     padding: 6px;
//     transition: transform .15s;
// }

// .answers-box :hover {
//     cursor: pointer;
//     color: black;
// }

// .green {
//     background-color: #0b0;
// }

// .red {
//     background-color: #e23;
// }