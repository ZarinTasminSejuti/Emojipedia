
import Details from './Details';


var numbers =[3,5,6,7,8,33]; 


const newNumbers = numbers.map(a => a * 2);     //Arrow Function

console.log(newNumbers);


const newNumbers1 = numbers.filter(function(b){
    return b > 10;
});

console.log(newNumbers1);

const newNumbers2 = numbers.reduce(function(c, d){
    return c + d;
});

console.log(newNumbers2);


//function emojiEntry(){
 //   return (
 //   emojiEntry.meaning.substring(0, 50)
//);
 //   }
//const newEmoji = Details.map(emojiEntry);

const newEmoji = Details.map(function(emojiEntry){
    return emojiEntry.meaning.substring(0, 50)
});

console.log(newEmoji);



export default Map;