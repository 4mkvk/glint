let testsBlock = $("#testsBlock");
function drawCard(testName, testCategory) {
    testsBlock.append(`
<div class="testCard">
    <div class="testCardImageBlock">
        <img src="./img/test-card.png" alt="" class="testCardImage">
    </div>
    <div class="testCardContent">
        <div class="testCardTitleBlock">
            <span class="testCardTitle">${testName}</span>
            <span class="testCardSpan">10 вопросов</span>
        </div>
        <div class="testCardDownBlock">
            <button class="testCardTakeTest" onclick="takeTheTest()">Пройти</button>
            <span class="testCardSpan">${testCategory}</span>
        </div>
    </div>
</div>
`)
}

let tests = [
    {
        testName: "Logics",
        testCategory: "Mathematics",
        userId: 3,
        questions: [
            {
                questionTitle: 2 + 2,
                questionAnswers: [4, 5],
                correctAnswersIndex: 1
            }, 
            {
                questionTitle: 2 + 1,
                questionAnswers: [6, 3],
                correctAnswersIndex: 2
            },
            {
                questionTitle: 2 + 3,
                questionAnswers: [6, 5],
                correctAnswersIndex: 2
            },
            {
                questionTitle: 2 + 4,
                questionAnswers: [6, 5],
                correctAnswersIndex: 1
            },
            {
                questionTitle: 2 + 5,
                questionAnswers: [6, 7],
                correctAnswersIndex: 2
            },
            {
                questionTitle: 2 + 6,
                questionAnswers: [8, 5],
                correctAnswersIndex: 1
            },
            {
                questionTitle: 3 + 3,
                questionAnswers: [6, 5],
                correctAnswersIndex: 1
            },
            {
                questionTitle: 3 + 4,
                questionAnswers: [7, 5],
                correctAnswersIndex: 1
            },
            {
                questionTitle: 3 + 5,
                questionAnswers: [6, 8],
                correctAnswersIndex: 2
            },
            {
                questionTitle: 3 + 6,
                questionAnswers: [9, 5],
                correctAnswersIndex: 1
            },
        ],
    },
    {
        testName: "Films",
        testCategory: "History",
        userId: 3,
        questions: [
            {
                questionTitle: 2 + 2,
                questionAnswers: [4, 5],
                correctAnswersIndex: 1
            }, 
            {
                questionTitle: 2 + 1,
                questionAnswers: [6, 3],
                correctAnswersIndex: 2
            },
            {
                questionTitle: 2 + 3,
                questionAnswers: [6, 5],
                correctAnswersIndex: 2
            },
            {
                questionTitle: 2 + 4,
                questionAnswers: [6, 5],
                correctAnswersIndex: 1
            },
            {
                questionTitle: 2 + 5,
                questionAnswers: [6, 7],
                correctAnswersIndex: 2
            },
            {
                questionTitle: 2 + 6,
                questionAnswers: [8, 5],
                correctAnswersIndex: 1
            },
            {
                questionTitle: 3 + 3,
                questionAnswers: [6, 5],
                correctAnswersIndex: 1
            },
            {
                questionTitle: 3 + 4,
                questionAnswers: [7, 5],
                correctAnswersIndex: 1
            },
            {
                questionTitle: 3 + 5,
                questionAnswers: [6, 8],
                correctAnswersIndex: 2
            },
            {
                questionTitle: 3 + 6,
                questionAnswers: [9, 5],
                correctAnswersIndex: 1
            },
        ],
    },
    {
        testName: "Happiness",
        testCategory: "Psychology",
        userId: 3,
        questions: [
            {
                questionTitle: 2 + 2,
                questionAnswers: [4, 5],
                correctAnswersIndex: 1
            }, 
            {
                questionTitle: 2 + 1,
                questionAnswers: [6, 3],
                correctAnswersIndex: 2
            },
            {
                questionTitle: 2 + 3,
                questionAnswers: [6, 5],
                correctAnswersIndex: 2
            },
            {
                questionTitle: 2 + 4,
                questionAnswers: [6, 5],
                correctAnswersIndex: 1
            },
            {
                questionTitle: 2 + 5,
                questionAnswers: [6, 7],
                correctAnswersIndex: 2
            },
            {
                questionTitle: 2 + 6,
                questionAnswers: [8, 5],
                correctAnswersIndex: 1
            },
            {
                questionTitle: 3 + 3,
                questionAnswers: [6, 5],
                correctAnswersIndex: 1
            },
            {
                questionTitle: 3 + 4,
                questionAnswers: [7, 5],
                correctAnswersIndex: 1
            },
            {
                questionTitle: 3 + 5,
                questionAnswers: [6, 8],
                correctAnswersIndex: 2
            },
            {
                questionTitle: 3 + 6,
                questionAnswers: [9, 5],
                correctAnswersIndex: 1
            },
        ],
    },
    {
        testName: "Analysis",
        testCategory: "Mathematics",
        userId: 3,
        questions: [
            {
                questionTitle: 2 + 2,
                questionAnswers: [4, 5],
                correctAnswersIndex: 1
            }, 
            {
                questionTitle: 2 + 1,
                questionAnswers: [6, 3],
                correctAnswersIndex: 2
            },
            {
                questionTitle: 2 + 3,
                questionAnswers: [6, 5],
                correctAnswersIndex: 2
            },
            {
                questionTitle: 2 + 4,
                questionAnswers: [6, 5],
                correctAnswersIndex: 1
            },
            {
                questionTitle: 2 + 5,
                questionAnswers: [6, 7],
                correctAnswersIndex: 2
            },
            {
                questionTitle: 2 + 6,
                questionAnswers: [8, 5],
                correctAnswersIndex: 1
            },
            {
                questionTitle: 3 + 3,
                questionAnswers: [6, 5],
                correctAnswersIndex: 1
            },
            {
                questionTitle: 3 + 4,
                questionAnswers: [7, 5],
                correctAnswersIndex: 1
            },
            {
                questionTitle: 3 + 5,
                questionAnswers: [6, 8],
                correctAnswersIndex: 2
            },
            {
                questionTitle: 3 + 6,
                questionAnswers: [9, 5],
                correctAnswersIndex: 1
            },
        ],
    },
    {
        testName: "Russia",
        testCategory: "History",
        userId: 3,
        questions: [
            {
                questionTitle: 2 + 2,
                questionAnswers: [4, 5],
                correctAnswersIndex: 1
            }, 
            {
                questionTitle: 2 + 1,
                questionAnswers: [6, 3],
                correctAnswersIndex: 2
            },
            {
                questionTitle: 2 + 3,
                questionAnswers: [6, 5],
                correctAnswersIndex: 2
            },
            {
                questionTitle: 2 + 4,
                questionAnswers: [6, 5],
                correctAnswersIndex: 1
            },
            {
                questionTitle: 2 + 5,
                questionAnswers: [6, 7],
                correctAnswersIndex: 2
            },
            {
                questionTitle: 2 + 6,
                questionAnswers: [8, 5],
                correctAnswersIndex: 1
            },
            {
                questionTitle: 3 + 3,
                questionAnswers: [6, 5],
                correctAnswersIndex: 1
            },
            {
                questionTitle: 3 + 4,
                questionAnswers: [7, 5],
                correctAnswersIndex: 1
            },
            {
                questionTitle: 3 + 5,
                questionAnswers: [6, 8],
                correctAnswersIndex: 2
            },
            {
                questionTitle: 3 + 6,
                questionAnswers: [9, 5],
                correctAnswersIndex: 1
            },
        ],
    },
    {
        testName: "Health",
        testCategory: "Psychology",
        userId: 3,
        questions: [
            {
                questionTitle: 2 + 2,
                questionAnswers: [4, 5],
                correctAnswersIndex: 1
            }, 
            {
                questionTitle: 2 + 1,
                questionAnswers: [6, 3],
                correctAnswersIndex: 2
            },
            {
                questionTitle: 2 + 3,
                questionAnswers: [6, 5],
                correctAnswersIndex: 2
            },
            {
                questionTitle: 2 + 4,
                questionAnswers: [6, 5],
                correctAnswersIndex: 1
            },
            {
                questionTitle: 2 + 5,
                questionAnswers: [6, 7],
                correctAnswersIndex: 2
            },
            {
                questionTitle: 2 + 6,
                questionAnswers: [8, 5],
                correctAnswersIndex: 1
            },
            {
                questionTitle: 3 + 3,
                questionAnswers: [6, 5],
                correctAnswersIndex: 1
            },
            {
                questionTitle: 3 + 4,
                questionAnswers: [7, 5],
                correctAnswersIndex: 1
            },
            {
                questionTitle: 3 + 5,
                questionAnswers: [6, 8],
                correctAnswersIndex: 2
            },
            {
                questionTitle: 3 + 6,
                questionAnswers: [9, 5],
                correctAnswersIndex: 1
            },
        ],
    },
    {
        testName: "World",
        testCategory: "Other",
        userId: 3,
        questions: [
            {
                questionTitle: 2 + 2,
                questionAnswers: [4, 5],
                correctAnswersIndex: 1
            }, 
            {
                questionTitle: 2 + 1,
                questionAnswers: [6, 3],
                correctAnswersIndex: 2
            },
            {
                questionTitle: 2 + 3,
                questionAnswers: [6, 5],
                correctAnswersIndex: 2
            },
            {
                questionTitle: 2 + 4,
                questionAnswers: [6, 5],
                correctAnswersIndex: 1
            },
            {
                questionTitle: 2 + 5,
                questionAnswers: [6, 7],
                correctAnswersIndex: 2
            },
            {
                questionTitle: 2 + 6,
                questionAnswers: [8, 5],
                correctAnswersIndex: 1
            },
            {
                questionTitle: 3 + 3,
                questionAnswers: [6, 5],
                correctAnswersIndex: 1
            },
            {
                questionTitle: 3 + 4,
                questionAnswers: [7, 5],
                correctAnswersIndex: 1
            },
            {
                questionTitle: 3 + 5,
                questionAnswers: [6, 8],
                correctAnswersIndex: 2
            },
            {
                questionTitle: 3 + 6,
                questionAnswers: [9, 5],
                correctAnswersIndex: 1
            },
        ],
    },
]

for(let i = 0; i < tests.length; i++){
    drawCard(tests[i].testName, tests[i].testCategory);
}

function changesCategory () {
    $("#testsBlock").empty();
    let category = $("#category").val();
    for (let i = 0; i < tests.length; i++) {
        if(category ===tests[i].testCategory){
            drawCard(tests[i].testName, tests[i].testCategory)
        }
    }
}

function takeTheTest() {
    location.href = ""
}