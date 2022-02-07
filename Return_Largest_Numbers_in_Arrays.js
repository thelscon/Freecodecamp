/*             Возврат наибольших чисел в массивах
Возвращает массив, состоящий из наибольшего числа из каждого предоставленного подмассива. Для простоты предоставленный массив 
будет содержать ровно 4 подмассива.
Помните, что вы можете перебирать массив с помощью простого цикла for и обращаться к каждому члену с помощью синтаксиса массива
arr[i]. */

//первый способ
function largestOfFour(arr) {
    const maxValueArray = [] ;
    arr.forEach ( value => {
        maxValueArray.push ( value.reduce ( ( x , y ) => ( x > y ) ? x : y ) ) ;
    } )
    return maxValueArray;
}
  
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) ;

/* // второй способ
function largestOfFour(arr) {
    const maxValueArray = arr.map( value =>
        value.reduce( ( x , y ) => ( x > y ) ? x : y ));
    return maxValueArray;
}  
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) ; */