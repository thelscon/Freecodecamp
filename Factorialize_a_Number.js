//              Факториализировать число
// Возвращает факториал предоставленного целого числа.
// Если целое число представлено буквой n, факториал представляет собой произведение всех положительных целых чисел, меньших или
// равных n.
// Факториалы часто представляются в сокращенной записи n!
// Например:5! = 1 * 2 * 3 * 4 * 5 = 120
// В функцию будут переданы только целые числа, большие или равные нулю.

// первый способ
function factorialize(num) {

    if ( num > 0 ) {
        let factorial = num ;
        for ( let i = 1 ; i < factorial ; ++i ) {
            num *= i ;
        }
    }
    else {
        num = 1 ;
    }
    
    return num;
}  

factorialize(5);


/* //второй способ
function factorialize(num) {

    if ( num > 0 ) {
        let factorial = num ;
        num *= factorialize ( num - 1 ) ;
    }
    else {
        num = 1 ;
    }
    
    return num;
}
  
factorialize(5); */