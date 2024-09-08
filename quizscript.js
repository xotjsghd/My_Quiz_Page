document.getElementById("submit-btn").addEventListener("click", function() {
    let score = 0;
    const totalQuestions = 3;
    
    // 정답 설정
    const answers = {
        q1: 'd', 
        q2: 'c', 
        q3: '삼도류'  
    };

    // 사용자가 선택한 답안 수집
    const userAnswers = {
        q1: document.querySelector('input[name="q1"]:checked'),
        q2: document.querySelector('input[name="q2"]:checked'),
        q3: document.querySelector('input[name="q3"]').value.trim()
    };

    // 첫 번째 질문 채점
    if (userAnswers.q1 && userAnswers.q1.value === answers.q1) {
        score++;
        userAnswers.q1.parentElement.classList.add("correct");
    } else {
        if (userAnswers.q1) userAnswers.q1.parentElement.classList.add("wrong");
    }

    // 두 번째 질문 채점
    if (userAnswers.q2 && userAnswers.q2.value === answers.q2) {
        score++;
        userAnswers.q2.parentElement.classList.add("correct");
    } else {
        if (userAnswers.q2) userAnswers.q2.parentElement.classList.add("wrong");
    }

    // 세 번째 질문 채점 (단답형)
    if (userAnswers.q3 === answers.q3) {
        score++;
        document.querySelector('input[name="q3"]').classList.add("correct");
    } else {
        document.querySelector('input[name="q3"]').classList.add("wrong");
    }

    // 팝업창으로 점수 표시
    alert("Your score is " + score + " out of " + totalQuestions);
});
