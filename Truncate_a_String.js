//             Обрезать строку
// Обрезать строку (первый аргумент), если она длиннее заданной максимальной длины строки (второй аргумент). Вернуть усеченную 
// строку с ...окончанием.

function truncateString(str, num) {
    if( str.length > num ) {
        str = str.substr( 0, num ) + '...' ;
    }
    return str ;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);