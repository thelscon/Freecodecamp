//              Перевернуть строку
// Переверните предоставленную строку.
// Возможно, вам придется превратить строку в массив, прежде чем вы сможете ее изменить.
// Ваш результат должен быть строкой.

// первый способ
function reverseString(str) {
    str = [ ...str ].reverse ().join ( '' ) ;    
    return str;
}

//второй способ
function reverseString2(str) {
    str = str.split ( '' ).reverse ().join ( '' ) ;    
    return str;
}
  
reverseString("hello");
reverseString2("hello");