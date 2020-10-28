
String.prototype.isPalindrome = function() {
   let string = this.toLowerCase().replace(/[^а-я]/g,"");
    const len = Math.floor(string.length / 2);
 for (let i = 0; i < len; i++)
   if (string[i] !== string[string.length - i - 1])
     return false;
 return true ;
}



function getAverageMark(marks) {

   let average = 0;
   for( i = 0; i < marks.length; i++) {
       average += marks[i];
   }
   let roundAverage =  Math.round(average / marks.length);
   return roundAverage
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}
