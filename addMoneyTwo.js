document.getElementById("card_TwoButton")
.addEventListener("click",function(event){
    event.preventDefault();
    
    const addMoneyTwo  = getIputFieldValueById("inputValue_Two");
  
    if(!isNaN(parseFloat(addMoneyTwo))){
        const account = parseFloat(document.getElementById("wallet_account").innerText);
        const subtraction = account - addMoneyTwo;
        if(subtraction >= 0){
            const default_money = parseFloat(document.getElementById("default_money_two").innerText);
            const money_add = parseFloat(addMoneyTwo);
            const money_default = parseFloat(default_money);
            const total_money = money_add + money_default;
            document.getElementById("default_money_two").innerText = total_money;
            document.getElementById("wallet_account").innerText = subtraction;

            const divHtml = document.createElement("divHtml");
            divHtml.classList.add('bg-white','border-1', 'p-2','card')
            divHtml.innerHTML = `<p class = "font-bold"> You: ${addMoneyTwo} 
           Donate For Flood at Noakhali, Bangladesh</p> 
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


document.getElementById("buttonThree")
.addEventListener("click",function(event){
    event.preventDefault();
    
    const addMoneyTwo  = getIputFieldValueById("inputValue_three");
  
    if(!isNaN(parseFloat(addMoneyTwo))){
        const account = parseFloat(document.getElementById("wallet_account").innerText);
        const subtraction = account - addMoneyTwo;
        if(subtraction >= 0){
            const default_money = parseFloat(document.getElementById("default_money_Three").innerText);
            const money_add = parseFloat(addMoneyTwo);
            const money_default = parseFloat(default_money);
            const total_money = money_add + money_default;
            document.getElementById("default_money_Three").innerText = total_money;
            document.getElementById("wallet_account").innerText = subtraction;

            // add transactions
            const divHtml = document.createElement("divHtml");
            divHtml.classList.add('bg-white','border-1', 'p-2','card')
            divHtml.innerHTML = `<p class = "font-bold"> You: ${addMoneyTwo} 
            Aid For Injured in the Quota Movement, Bangladesh</p> 
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