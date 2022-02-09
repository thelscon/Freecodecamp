/*             Суммируйте все числа в диапазоне
Мы передадим вам массив из двух чисел. Верните сумму этих двух чисел плюс сумму всех чисел между ними. Наименьшее число не 
всегда будет первым.
Например, sumAll([4,1])должно возвращаться , 10 потому что сумма всех чисел от 1 до 4 (оба включительно) равна 10. */

//второй способ
function sumAll(arr) {

    const newArray = [] ;    
    let key = arr[0] ;

    do {
        if ( key === arr[1] ) {
            newArray.push ( key ) ;
            if ( newArray.length >=2 ) {
                break ;
            }
        }
        else {
            if ( key < arr[1] ) {
                newArray.push ( key++ ) ;
            }
            else {
                newArray.push ( key-- ) ;
            }
        }

    } while ( true ) ;

    return newArray.reduce ( ( x , y ) => x + y ) ;

}
  
console.log ( sumAll([10, 11]) );

/* //первый способ
function sumAll(arr) {
    if ( arr[0] === arr[1] ) {
        return arr.reduce ( ( x , y ) => x + y ) ;
    }
    else {
        const minValue = ( arr [0] < arr [1] ) ? arr.shift () : arr.pop () ;
        const maxValue = arr [0] ;
        let sum = 0 ;

        for ( let key = minValue ; key <= maxValue ; ++key ) {
            sum += key ;
        }
        return sum ;
    }
}
  
console.log ( sumAll([1, 4]) ); */