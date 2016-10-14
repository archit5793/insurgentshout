function myFunction()
{
var myarray = new Array();
myarray[0]="Don't judge each day by the harvest you reap but by the seeds that you plant. <br>By R.L Stevenson"; 
myarray[1]="It is during our darkest moments that we must focus to see the light. <br>By Aristotle Onassis";
myarray[2]="Try to be like the turtle,at ease in your own shell. <br>By Bill Copeland";
myarray[3]="Always do your best. What you plant now, you will harvest later. <br>By Og Mandino";
myarray[4]="Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. <br>By Thomas A. Edison";
myarray[5]="If you're going through hell, keep going. <br>By Winston Churchill";
myarray[6]="Expect problems and eat them for breakfast. <br>By Alfred A. Montapert";
myarray[7]="You are never too old to set another goal or to dream a new dream. <br>By C.S Lewis";
myarray[8]="God always gives His best to those who leave the choice with him. <br>By Jim Elliot";
myarray[9]="A creative man is motivated by the desire to achieve, not by the desire to beat others. <br>By Ayn Rand";
myarray[10]="You have to learn the rules of the game. And then you have to play better than anyone else. <br>By Albert Einstein";
var ch=Math.floor((Math.random() * 10) + 1);
document.getElementById("ideatochange").innerHTML=myarray[ch];
}