var people = [];
var template = $('#people-template').html();

$('#peopleModule').find('button').on('click', function() {
    people.push($('#peopleModule').find('input').val());
    var data = {
        people: people,
    };
    // Mustache模板：避免在javascript裡面寫html
    $('#peopleModule').find('ul').html(Mustache.render(template, data));
});

$('#peopleModule').find('ul').delegate('i.del', 'click', function(e) {
    var $remove = $(e.target).closest('li');
    var i = $('#peopleModule').find('li').index($remove);

    $remove.remove();

    people.splice(i, 1);
});

/*
    這個程式碼是麵條式代碼的代表，也是初學者常常犯的錯
    存在了下面的問題：
        1. 全域變數：可能導致被蓋掉誤用
        2. 浪費資源：重複搜尋一樣的東西
        3. 難以維護：沒有任何模組化
        4. 難以維護：架構混亂
        5. 可能造成記憶體溢出
*/
