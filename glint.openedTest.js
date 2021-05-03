let testsArray = JSON.parse(localStorage.getItem("testsArray"));
let loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
let currentTestId = JSON.parse(localStorage.getItem('currentTestId'))
let currentTest = null;
for (i = 0; i < testsArray.length; i++) {
    if (testsArray[i].currentTestId === currentTestId) {
        currentTest = testsArray[i]
    }
}
console.log(currentTest)
console.log(testsArray);

let testName = $("#title");
for (let i = 0; i < 1; i++) {
    testName.append(`
   ${currentTest['testName']} 
`);
}

let questionsBlock = $("#questionsBlock");
for (let i = 0; i < 1; i++) {

    questionsBlock.append(`
   <div class = "first_questions_block">
   
   <div class = "question_block">
    <p class = "question_info" >${currentTest['questions'][0]['questionTitle']}</p>
    <div class = "answers_block">  
    <label class = "label">
    <input type="radio"  class = "answer" value = "0">
    <span name = "elem0" class = "radio_style" ></span>
    <span class = "answer_info" >${currentTest['questions'][0]['questionAnswers'][0]}</span>
    </label>

    <br><br>
    <label class = "label">
    <input type="radio"  class = "answer"" value = "1">
    <span name = "elem0" class = "radio_style" ></span>
    <span class = "answer_info" >${currentTest['questions'][0]['questionAnswers'][1]}</span>
    </label>
    </div>
    </div>


    <div class = "question_block">
    <p class = "question_info" >${currentTest['questions'][1]['questionTitle']}</p>
    <div class = "answers_block">  
    <label>
    <input type="radio"  class = "answer" >
    <span name = "elem1" class = "radio_style" ></span>
    <span class = "answer_info" >${currentTest['questions'][1]['questionAnswers'][0]}</span>
    </label>
    <br><br>
    <label>
    <input type="radio"  class = "answer" name = "elem1">
    <span name = "elem1" class = "radio_style" ></span>
    <span class = "answer_info" >${currentTest['questions'][1]['questionAnswers'][1]}</span>
    </label>
    </div>
    </div>

    
    <div class = "question_block">
    <p class = "question_info" >${currentTest['questions'][2]['questionTitle']}</p>
    <div class = "answers_block">  
    <label>
    <input type="radio"   class = "answer" >
    <span name = "elem2" class = "radio_style" ></span>
    <span class = "answer_info" >${currentTest['questions'][2]['questionAnswers'][0]}</span>
    </label>
    <br><br>
    <label>
    <input type="radio"  class = "answer" >
    <span name = "elem2" class = "radio_style" ></span>
    <span class = "answer_info" >${currentTest['questions'][2]['questionAnswers'][1]}</span>
    </label>
    </div>
    </div>

    <div class = "question_block">
    <p class = "question_info" >${currentTest['questions'][3]['questionTitle']}</p>
    <div class = "answers_block">  
    <label>
    <input type="radio"   class = "answer">
    <span  name = "elem3" class = "radio_style" ></span>
    <span class = "answer_info" >${currentTest['questions'][3]['questionAnswers'][0]}</span>
    </label>
    <br><br>
    <label>
    <input type="radio"  class = "answer" >
    <span name = "elem3" class = "radio_style" ></span>
    <span class = "answer_info" >${currentTest['questions'][3]['questionAnswers'][1]}</span>
    </label>
    </div>
    </div>

    <div class = "question_block">
    <p class = "question_info" >${currentTest['questions'][4]['questionTitle']}</p>
    <div class = "answers_block">  
    <label>
    <input type="radio"  class = "answer" >
    <span name = "elem4" class = "radio_style" ></span>
    <span class = "answer_info" >${currentTest['questions'][4]['questionAnswers'][0]}</span>
    </label>
    <br><br>
    <label>
    <input type="radio"  class = "answer" >
    <span name = "elem4" class = "radio_style" ></span>
    <span class = "answer_info" >${currentTest['questions'][4]['questionAnswers'][1]}</span>
    </label>
    </div>
    </div>  
   </div>
    

    <div class = "second_questions_block">
    <div class = "question_block">
    <p class = "question_info" >${currentTest['questions'][5]['questionTitle']}</p>
    <div class = "answers_block">  
    <label>
    <input type="radio"  class = "answer" >
    <span name = "elem5" class = "radio_style" ></span>
    <span class = "answer_info" >${currentTest['questions'][5]['questionAnswers'][0]}</span>
    </label>
    <br><br>
    <label>
    <input type="radio"  class = "answer" >
    <span name = "elem5" class = "radio_style" ></span>
    <span class = "answer_info" >${currentTest['questions'][5]['questionAnswers'][1]}</span>
    </label>
    </div>
    </div>


    <div class = "question_block">
    <p class = "question_info" >${currentTest['questions'][6]['questionTitle']}</p>
    <div class = "answers_block">  
    <label>
    <input type="radio"   class = "answer" >
    <span name = "elem6" class = "radio_style" ></span>
    <span class = "answer_info" >${currentTest['questions'][6]['questionAnswers'][0]}</span>
    </label>
    <br><br>
    <label>
    <input type="radio"  class = "answer" >
    <span name = "elem6" class = "radio_style" ></span>
    <span class = "answer_info" >${currentTest['questions'][6]['questionAnswers'][1]}</span>
    </label>
    </div>
    </div>

    <div class = "question_block">
    <p class = "question_info" >${currentTest['questions'][7]['questionTitle']}</p>
    <div class = "answers_block">  
    <label>
    <input type="radio"  class = "answer" >
    <span name = "elem7" class = "radio_style" ></span>
    <span class = "answer_info" >${currentTest['questions'][7]['questionAnswers'][0]}</span>
    </label>
    <br><br>
    <label>
    <input type="radio"  class = "answer" >
    <span name = "elem7" class = "radio_style" ></span>
    <span class = "answer_info" >${currentTest['questions'][7]['questionAnswers'][1]}</span>
    </label>
    </div>
    </div>

    
    <div class = "question_block">
    <p class = "question_info" >${currentTest['questions'][8]['questionTitle']}</p>
    <div class = "answers_block">  
    <label>
    <input type="radio"  class = "answer" >
    <span name = "elem8" class = "radio_style" ></span>
    <span class = "answer_info" >${currentTest['questions'][8]['questionAnswers'][0]}</span>
    </label>
    <br><br>
    <label>
    <input type="radio"  class = "answer" >
    <span  name = "elem8" class = "radio_style" ></span>
    <span class = "answer_info" >${currentTest['questions'][8]['questionAnswers'][1]}</span>
    </label>
    </div>
    </div>

    <div class = "question_block">
    <p class = "question_info" >${currentTest['questions'][9]['questionTitle']}</p>
    <div class = "answers_block">  
    <label>
    <input type="radio"  class = "answer"  val = "0">
    <span name = "elem9" class = "radio_style" ></span>
    <span class = "answer_info" >${currentTest['questions'][9]['questionAnswers'][0]}</span>
    </label>
    <br><br>
    <label>
    <input type="radio" class = "answer"  val = "1">
    <span name = "elem9" class = "radio_style" ></span>
    <span class = "answer_info" >${currentTest['questions'][9]['questionAnswers'][1]}</span>
    </label>
    </div>
    </div>

    </div>
    `);

}
let radio_style1 = document.getElementsByClassName("radio_style")[0];
let radio_style2 = document.getElementsByClassName("radio_style")[1];

let radio_style3 = document.getElementsByClassName("radio_style")[2];
let radio_style4 = document.getElementsByClassName("radio_style")[3];

let radio_style5 = document.getElementsByClassName("radio_style")[4];
let radio_style6 = document.getElementsByClassName("radio_style")[5];

let radio_style7 = document.getElementsByClassName("radio_style")[6];
let radio_style8 = document.getElementsByClassName("radio_style")[7];

let radio_style9 = document.getElementsByClassName("radio_style")[8];
let radio_style10 = document.getElementsByClassName("radio_style")[9];

let radio_style11 = document.getElementsByClassName("radio_style")[10];
let radio_style12 = document.getElementsByClassName("radio_style")[11];

let radio_style13 = document.getElementsByClassName("radio_style")[12];
let radio_style14 = document.getElementsByClassName("radio_style")[13];

let radio_style15 = document.getElementsByClassName("radio_style")[14];
let radio_style16 = document.getElementsByClassName("radio_style")[15];

let radio_style17 = document.getElementsByClassName("radio_style")[16];
let radio_style18 = document.getElementsByClassName("radio_style")[17];

let radio_style19 = document.getElementsByClassName("radio_style")[18];
let radio_style20 = document.getElementsByClassName("radio_style")[19];



let sendBtn = document.getElementById("sendBtn");
sendBtn.addEventListener("click", function () {
    let questions = currentTest['questions'];
    // for (f = 0; f < questions.length; f++) {
    //     let correctAnswersIndex0 = questions[f]['correctAnswersIndex'];
    //     correctAnswersIndex = correctAnswersIndex0;
    //     console.log(correctAnswersIndex);

        

    // }

    for (let i = 0; i < questions.length; i++) {
        let correctAnswerIndex = questions[i].correctAnswersIndex;

        let answers = document.getElementsByName(`elem${i}`);
        console.log(answers);

        if(correctAnswerIndex === 0){
            console.log("correct answer index 0");
            answers[0].style.border = "0.4vh solid #FF4500";
            answers[1].style.border = "0.4vh solid #98FB98";
        }else{
            console.log("correct answer index 1");
            answers[1].style.border = "0.4vh solid #FF4500";
            answers[0].style.border = "0.4vh solid #98FB98";
        }

        // for (let k = 0; k < currentTest['questions'].length; k++) {
            
        //     let correctAnswersIndex = currentTest.questions[k].correctAnswerIndex;
            
        //     if (0 === correctAnswersIndex && 1 != correctAnswersIndex) {
                
        //         console.log("correct answer: " + 0);
        //         radio_style1.style.border = "0.4vh solid #98FB98";
        //         radio_style2.style.border = "0.4vh solid #FF4500";
        //     } else if (1 === correctAnswersIndex && 0 != correctAnswersIndex) {
        //         console.log("correct answer: " + 1);
        //         radio_style2.style.border = "0.4vh solid #98FB98";
        //         radio_style1.style.border = "0.4vh solid #FF4500";
        //     }
        // }
    }


    let answer1 = document.getElementsByName("elem0");
    let answer2 = document.getElementsByName("elem1");
    let answer3 = document.getElementsByClassName("answer")[2];
    let answer4 = document.getElementsByClassName("answer")[3];
    let answer5 = document.getElementsByName("elem0");
    let answer6 = document.getElementsByName("elem0");


    /* 
        let radio_answer1 = 0;
        let radio_answer2 = 1;
    
        if (radio_answer1 === correctAnswersIndex && radio_answer2 != correctAnswersIndex) {
            radio_style1.style.border = "0.4vh solid #98FB98";
            radio_style2.style.border = "0.4vh solid #FF4500";
    
            radio_style3.style.border = "0.4vh solid #98FB98";
            radio_style4.style.border = "0.4vh solid #FF4500";
    
        } if (radio_answer2 === correctAnswersIndex && radio_answer1 != correctAnswersIndex) {
            radio_style2.style.border = "0.4vh solid #98FB98";
            radio_style1.style.border = "0.4vh solid #FF4500";
    
            radio_style4.style.border = "0.4vh solid #98FB98";
            radio_style3.style.border = "0.4vh solid #FF4500";
        } */
});






