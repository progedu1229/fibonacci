'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
function fib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    //メモにデータがない場合は計算する。
    //配列にも追加しておくことで、次回参照されたときに計算しなくて済む
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}
for (let i = 0; i <= 100; i++) {
    console.log(i + "のフィボナッチ数列は" + fib(i) + "です");
}