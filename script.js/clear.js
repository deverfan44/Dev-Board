
document.getElementById('clear-btn').addEventListener('click', function(event){
    const clearAll = document.getElementById('history-container');
    while (clearAll.hasChildNodes()){
        clearAll.removeChild(clearAll.firstChild);
    }
})