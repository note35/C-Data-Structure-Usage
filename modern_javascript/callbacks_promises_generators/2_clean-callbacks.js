//為了解決callbacks多重巢狀迴圈問題，可以改成下面這個寫法

$.ajax({
    type: "GET",
    url: "...",
    success: successHandler1,
    error: errorHandler
})

function successHandler1(callback){
    ...
    $.ajax({
        type: "GET",
        url: "...",
        success: successHandler2,
        error: errorHandler
    })
}

function errorHandler(xhr, status, error) {
    ...
}

//如此一來就很乾淨了
//然後這麼寫仍然不夠滿意，也不能夠處理同時完成一個以上的get後才執行下個get的問題
