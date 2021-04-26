let cart = JSON.parse(localStorage.getItem("local"));
console.log(local);
let testBlock = $("#test");

for(let i = 0; i< local.length; i++){
    cartBlock.append(`
    <p> Title: ${local[i]['title']}</p>
    <p> Description: ${local[i]['description']}</p>
    <p> QuestionsArray: ${local[i]['questionsArray']}</p>
    <hr>
    `)
};