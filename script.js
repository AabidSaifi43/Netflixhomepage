document.addEventListener('DOMContentLoaded', function () {
    const questionItems = document.querySelectorAll('.question-item');
    let currentAnswer = null;

    questionItems.forEach((item) => {
        const answer = item.querySelector('.faq-answer');

        item.addEventListener('click', () => {
            if (currentAnswer !== null && currentAnswer !== answer) {
                currentAnswer.classList.remove('active');
                currentAnswer.classList.add('faq-answer-leave');
            }

            if (answer.classList.contains('active')) {
                answer.classList.remove('active');
                answer.classList.add('faq-answer-leave');
            } else {
                answer.classList.remove('faq-answer-leave');
                answer.classList.add('faq-answer-enter');
                answer.classList.add('active');
                currentAnswer = answer;
            }
        });
    });
});
