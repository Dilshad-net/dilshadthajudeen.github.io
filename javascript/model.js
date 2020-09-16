var modal = document.getElementById("myModal"); // Get the modal
const nextModal = document.querySelector('#nextModal');
const nxtModal = document.querySelector('#nxtModal');
const forthModel = document.querySelector('#fortModal');

const btn = document.querySelector('#btn');
const btnTwo = document.querySelector('#btnTwo');
const btnThree = document.querySelector('#btnThree');
const btnFour = document.querySelector('#btnFour');

var span = document.querySelector('.close');
var spanTwo = document.querySelector('.closeTwo');
var spanThree = document.querySelector('.closeThree');
var spanFour = document.querySelector('.closeFour');

btn.onclick = function() { // When the user clicks the button, open the modal 
    modal.style.display = "block";
}
span.onclick = function() { // When the user clicks on <span> (x), close the modal
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}  // When the user clicks anywhere outside of the modal, close it

// model -2 //
btnTwo.onclick = function(){
    nextModal.style.display = 'block';
}
spanTwo.onclick = function() {
    nextModal.style.display = 'none';
}
window.onclick = function(event) {
    if (event.target == nextModal) {
        nextModal.style.display = "none";
    }
}
// model -3 //
btnThree.onclick = function(){
    nxtModal.style.display = 'block';
}
spanThree.onclick = function(){
    nxtModal.style.display = 'none';
}
window.onclick = function(event) {
    if (event.target == nxtModel) {
        nxtModal.style.display = 'none';
    }
}
// model -4 //
btnFour.onclick = function(){
    forthModel.style.display = 'block';
}
spanFour.onclick = function(){
    forthModel.style.display = 'none';
}
window.onclick = function(event) {
    if (event.target == forthModel) {
        forthModel.style.display = 'none';
    }
}