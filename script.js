window.onload = () => {
     let rightAnswers = document.getElementsByClassName("right-answer")
     let wrongAnswers = document.getElementsByClassName("wrong-answer")
        for (const rightAnswer of rightAnswers) {
            rightAnswer.onclick = rightAnswerClick
        }
        for (const wrongAnswer of wrongAnswers) {
            wrongAnswer.onclick = wrongAnswerClick
        }
        console.log(rightAnswers);
     }

 let rightAnswerClick = (event) => {
     event.target.classList.add("green")
 }

let wrongAnswerClick = (event) => {
       event.target.classList.add("red")
     }
