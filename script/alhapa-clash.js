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

    function paly(){
        hideElementById('home-screen');
        showElementById('play-ground');
    }

    