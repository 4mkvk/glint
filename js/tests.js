let testsBlock = $("#testsBlock");
let users = JSON.parse(localStorage.getItem("users"))
console.log(users)

let tests = JSON.parse(localStorage.getItem("testsArray"))
console.log(tests)
for(let i = 0; i < tests.length; i++){
    let testCreator = null;
    for(let j=0;j<users.length;j++){
        if(users[j]['userId'] === tests[i]['userId']){
            testCreator = users[j].userName
        }
    }
    testsBlock.append(`
    <div class="testCard">
        <div class="testCardImageBlock">
            <img src="./img/test-card.png" alt="" class="testCardImage">
        </div>
            <div class="testCardContent">
                <div class="testCardTitleBlock">
                    <span class="testCardTitle">${tests[i].testName}</span>
                    <span class="testCardSpan">10 вопросов</span>
                </div>
                <div class="testCardDownBlock">
                    <button class="testCardTakeTest" onclick="takeTheTest()">Пройти</button>
                    <span class="testCardSpan">От ${testCreator}</span>
                </div>
        </div>
    </div>
    `)
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