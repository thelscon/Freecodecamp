/*             Подтвердить окончание
Проверьте, str заканчивается ли строка (первый аргумент, ) заданной целевой строкой (второй аргумент, target).
Эту задачу можно решить с помощью .endsWith()метода, представленного в ES2015. Но для целей этой задачи мы 
хотели бы, чтобы вы вместо этого использовали один из методов подстроки JavaScript. */

function confirmEnding(str, target) {
    let yesNo = false ;
    let numberChar = 1 ;

    do{
        yesNo = ( target [ target.length - numberChar ] === str [ str.length - numberChar++ ]  )
            ? true 
            : false ;
    }while( numberChar <= target.length && yesNo ) ;

    return yesNo;
}