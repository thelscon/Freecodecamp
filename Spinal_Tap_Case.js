/*             Случай спинномозговой пункции
Преобразование строки в спинной регистр. В спинном регистре все строчные слова соединены тире. */

//первый способ, без RegExp
function spinalCase(str) {

    while ( str.includes ( ' ' ) ) {
        str = str.replace ( ' ', '-' ) ;
    }
    while ( str.includes ( '_' ) ) {
        str = str.replace ( '_', '-' ) ;
    }    
    
    str = [ ...str ] ;
    str = str.map ( ( value , index ) => {
        if ( value >= 'A' && value <= 'Z' ) {
            if ( str[index - 1] && str[index - 1] !== '-' ) {
                return `-${value.toLowerCase ()}` ;
            }
            else {
                return value.toLowerCase () ;
            }            
        }
        else {
            return value ;
        }
    } ).join ( '' ) ;

    return str;
}
  
console.log ( spinalCase('This Is Spinal Tap') );