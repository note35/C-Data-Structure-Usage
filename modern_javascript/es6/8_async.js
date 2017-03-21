////////
// async
////////

// async 就是 generator 函式，回傳是一個promise
async function() {
    var foo = await $.get(url);
}
