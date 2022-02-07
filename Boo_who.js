/*             Бу, кто
Проверьте, классифицируется ли значение как логический примитив. Возврат trueили false.
Булевы примитивы trueи false. */

function booWho(bool) {
    return ( typeof bool === 'boolean' ) ? true : false ;
}
booWho(null);