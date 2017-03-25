/**
 * Created by molu_ on 2017/3/16.
 */


/*let [head,...end]=[1,2,3,4,5];

console.log(head);
console.log(end);*/


function add([x,y]) {

    return x+y;
}

console.log(add([3,4]));


for(let code of "adbd"){

    console.log(code);
}


/*console.log("dddddd");
for(let i=0;i<10;i++){
    console.log(i);
}*/

//第一种场景，内层变量可能会覆盖外层变量。
/*

var tmp = "gavin";

function f() {
    console.log(tmp);
    if (true) {
        var tmp = 'hello world';
    }
}

//f(); // undefined
//第二种场景，用来计数的循环变量泄露为全局变量。

/!*
var s = 'hello';

for (var i = 0; i < s.length; i++) {
    console.log(s[i]);
}
*!/

//console.log(i); // 5

function f1() {
    let n = 5;
    if (true) {
        let n = 10;
    }
    console.log(n); // 5
}
f1();
*/




