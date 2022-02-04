//              Найдите самое длинное слово в строке
// Возвращает длину самого длинного слова в предоставленном предложении. Ваш ответ должен быть числом.

// первый способ
function findLongestWordLength(str) {
    let tmp = str.split ( ' ' ) ;
    let maxLength = 0 ;
    tmp.forEach ( value => 
        maxLength = value.length > maxLength ? value.length : maxLength ) ;
    return maxLength;
}
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");

/* // второй способ
function findLongestWordLength(str) {
    let tmp = str.split ( ' ' ) ;
    let maxLength = 0 ;
    tmp.forEach ( value => {
        if ( value.length > maxLength ) {
            maxLength = value.length ;
            str = value ;
        }
    } ) ;
    return str.length;
}
  
findLongestWordLength("The quick brown fox jumped over the lazy dog"); */

/* //третий способ
function findLongestWordLength(str) {
    str = str.split ( ' ' ).reduce ( (x, y) => ( x.length > y.length ) ? x : y ) ;    
    return str.length;
}
  
findLongestWordLength("The quick brown fox jumped over the lazy dogasdasd") ; */