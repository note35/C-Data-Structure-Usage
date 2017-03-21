// 為了滿足更多需求，寫出更乾淨的程式碼，衍伸出了最熱門的promises寫法

$.get(url).then(function(callback){
    ...
    return $.get(url2).then(callback);
}).then(function(callback){
    ...
}, errorHandler);

function handleError(xhr, status, error) {
    ...
}

// 只要中間有任何一個get失敗，就會直接執行最後一個errorHandler函式



// 此外也能處理並發完成的狀況

var condition1 = $.get(url)
var condition2 = $.get(url2)

$.when(condition1, condition2).then(function(callback, callback2){
    ...
}, handlerError);

// 到此，已經算是很完美個解決了所有可能的問題
