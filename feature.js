

document.getElementById("show_history")
.addEventListener("click", function(){
    console.log("You are doing great")
    showAddMoneyById("transactionsForm");
});


document.getElementById("donation_btn")
.addEventListener("click", function(){
    console.log("You are lucky")
    showAddMoneyById("full_page");
});


const btnId = document.getElementById("donation_btn");
const historyId = document.getElementById("show_history");
const allCard  = document.getElementById("full_page");

historyId.addEventListener("click", function(){
    allCard.classList.add('hidden');
    historyId.classList.add("bg-green-500");
    btnId.classList.remove("bg-green-500");
});

btnId.addEventListener("click", function(){
    allCard.classList.remove("hidden");
    historyId.classList.remove('bg-green-500');
    btnId.classList.add("bg-green-500");
});


