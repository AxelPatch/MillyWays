
//Displays the welcom msg on the page
function displaywelcome() {
    document.write("<h2>Welcome to MillyWays Casino!</h2>")
}
//Displays how to play the game
function howotoplay(){
    document.write("Relaod this page to roll your dice for a chance to win!");
}
//Intiates the game by rolling the dice
function play(){
    //Creats the first die
   let die1 = Math.ceil(Math.random() * 6);
    //Creates the second Die
   let die2 = Math.ceil(Math.random() * 6);
   let sum = die1 + die2
   //Displays the first die
   document.write("Die 1 =" + die1)
   document.write("<br><br>")
   //Displays the second Die
   document.write("Die 2 =" + die2)
   document.write("<br><br>")
   //Sets lose conditions and displays the lose msg
   if (sum == 7 || sum == 11) {
    document.write("You Lost, Better luck next Universe!")
    document.write("<br><br>")
   }
   //Sets the win condition and displays the win msg
  else if (die1 == die2 && die1 % 2 == 0) {
    document.write("Nice Rolling! Enjoy the winnings!")
    document.write("<br><br>")
  }
  else {
    document.write("Roll again!")
    document.write("<br><br>")
  }


}