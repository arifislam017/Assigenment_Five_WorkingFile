
document.getElementById("donate_Money_button")
.addEventListener("click", function(event){
    event.preventDefault();
   

const input_money = document.getElementById("input_money").value;



if(!isNaN(parseFloat(input_money))){
    const account = parseFloat(document.getElementById("wallet_account").innerText);
    const subtraction = account - input_money;
    if(subtraction >= 0){
        const default_money = parseFloat(document.getElementById("default_money").innerText);
        const money_add = parseFloat(input_money);
        const money_default = parseFloat(default_money);
        const total_money = money_add + money_default;

        document.getElementById("default_money").innerText = total_money;
        document.getElementById("wallet_account").innerText = subtraction;

        const divHtml = document.createElement("divHtml");
        divHtml.classList.add('bg-white','border-1', 'p-2','card')
        divHtml.innerHTML = `<p class = "font-bold"> You: ${input_money} 
        Donated For Flood at Feni, Bangladesh</p> 
        <p> ${new Date().toLocaleString('en-us', {dateStyle:'full',timeStyle:'full'})} </p>
        `;
        
        document.getElementById("transactions_container").appendChild(divHtml);

        alert("Congregational Donate Has Successful");
        
    } else{
        alert("Please Enter Valid input");
    }
    
    }
    else if(typeof input_money === "string"){
        alert("Please Enter Valid input");
 }

});

