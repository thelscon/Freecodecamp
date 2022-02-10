/*             Найти и уничтожить
Вам будет предоставлен начальный массив (первый аргумент в destroyerфункции), за которым следуют один или несколько 
аргументов. Удалите все элементы из исходного массива, которые имеют то же значение, что и эти аргументы.
Примечание. Вы должны использовать arguments объект. */

function destroyer(arr) {
    const fullArray = arguments[0] ;
    for ( let key = 1 ; key <= arguments.length ; ++key ) {
        let flag = null ;
        do {
            flag = fullArray.findIndex ( value => value === arguments[key] ) ;
            if ( flag >= 0 ) {
                fullArray.splice ( flag , 1 ) ;
            }
            else {
                flag = null ;
            }
        } while ( flag !== null ) ;
    }
    return fullArray;
  }
  
  console.log ( destroyer([1, 2, 3, 1, 2, 3], 1, 2) ) ;