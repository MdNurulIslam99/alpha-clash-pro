function hideElementById(hideElementId){
    const element = document.getElementById(hideElementId);
    element.classList.add('hidden');
}

function showElementById(showElementId){
    const showElement = document.getElementById(showElementId);
    showElement.classList.remove('hidden');
}