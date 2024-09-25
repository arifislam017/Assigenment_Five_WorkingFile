function getIputFieldValueById (id){
    const inputValue = document.getElementById(id).value;
    return inputValue;
}


function showAddMoneyById(id){
    document.getElementById("transactionsForm").classList.add('hidden');
    document.getElementById("full_page").classList.add('hidden');
    document.getElementById("transactionsForm").classList.add('hidden');

    // Show By Using ID

    document.getElementById(id).classList.remove('hidden');
}

