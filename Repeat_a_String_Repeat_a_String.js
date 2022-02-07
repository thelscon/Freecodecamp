/*             Повторить строку Повторить строку
Повторить заданную строку str(первый аргумент) несколько num раз (второй аргумент). Возвращает пустую строку, если num не является 
положительным числом. Для целей этой задачи не используйте встроенный .repeat()метод. */

function repeatStringNumTimes(str, num) {
    let returnStr = '' ;
  
      for( let item = 1 ; item <= num ; ++item ) {
          returnStr += str ;
      }
  
      return returnStr ;
  }
  
  repeatStringNumTimes("abc", 3);