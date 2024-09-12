/* function play(){
    //step-1: hide the home screen to hide the screen add the hidden to the home section
    const homeSection = document.getElementById('home-screen'); 
    //console.log(homeSection.classList);
    homeSection.classList.add('hidden');

    // show the play ground

    const playGround = document.getElementById('play-ground');
    //console.log(playGround.classList);
    playGround.classList.remove('hidden');
} */


    function continueGame(){
        //step -1:  generate a random alphabet
        const getAlphabet = getARandomAlphabet();
        console.log('your random alphabet',getAlphabet);

    //    set random  generate Alphabet to the scree (show it) 
        const currentAlphabet = document.getElementById('current-alphabet');
        currentAlphabet.innerText = getAlphabet;

        // set background color
        setBackgroundColorById(getAlphabet);

          // remove background color
        //removeBackgroundColorById(getAlphabet)


    }

    function paly(){
        hideElementById('home-screen');
        showElementById('play-ground');
        continueGame();
    }

    