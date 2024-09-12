function hideElementById(hideElementId){
    const element = document.getElementById(hideElementId);
    element.classList.add('hidden');
}

function showElementById(showElementId){
    const showElement = document.getElementById(showElementId);
    showElement.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');

}

/* function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');

} */


function getARandomAlphabet(){
    // get or create an alphabet array
    //const alphabetArray = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y , z];
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    //console.log(alphabets);

    // get random index between 0-25

 /* Math.random() given value  0 to 1 number.
 So alphabet 0 to 25 fraction index.so we can multiply 25 for get all the number */
    const randomNumber = Math.random()*25;
    const  index = Math.round(randomNumber);  // to remove math.round() fraction index to int function
    // console.log(index);  
    
    const alphabet = alphabets[index]; 
    //console.log(index,alphabet); 
    return alphabet;

}