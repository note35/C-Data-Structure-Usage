//在javascript中，最初學的狀態使用ajax的情況下，會是這種寫法

$.ajax({
    type: "GET",
    url: "...",
    success: function(callback){
        ...
    },
    error: function(xhr, status, error){
        ...
    }
})

//接著如果要在成功get完後，才做第二次的get的話，要這樣寫

$.ajax({
    type: "GET",
    url: "...",
    success: function(callback){
        ...
        $.ajax({
            type: "GET",
            url: "...",
            success: function(callback){
                ...
            },
            error: function(xhr, status, error){
                ...
            }
        })
    },
    error: function(xhr, status, error){
        ...
    }
})

//這麼做的話，code會變成多重巢狀，難以維護。
