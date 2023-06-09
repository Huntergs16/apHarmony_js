var answerButton = document.querySelector('#toggleAnswer')
var answer = document.querySelector('#answer')

answerButton.addEventListener('click', () => {
    nextAnswer = answer.innerHTML === "Yes" ? "No" : "Yes"
    answer.innerHTML = nextAnswer;
    console.log("switch clicked")
});