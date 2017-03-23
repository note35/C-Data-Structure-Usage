var people = (function(){

    people_array = [];

    //cacheDom
    $el = $('#peopleModule'); // $開頭為jquery物件
    $button = $el.find('button');
    $input = $el.find('input');
    $ul = $el.find('ul');
    template = $el.find('#people-template').html(); // 不是jquery物件

    //bindEvents
    $button.on('click', addPerson);
    $ul.delegate('i.del', 'click', deletePerson);

    _render(); // 底線開頭為private function

    function _render() {
        $ul.html(Mustache.render(template, {people: people_array}));
    }
    function addPerson(value) { // 提供介面給外部呼叫
        var name = (typeof value === "string") ? value : $input.val();
        people_array.push(name);
        _render();
        $input.val('');
    }
    function deletePerson(e) { // 提供介面給外部呼叫
        var i;
        if (typeof e === "number") {
            i = e;
        } else {
            var $remove = $(e.target).closest('li');
            i = $ul.find('li').index($remove);
        }

        people_array.splice(i, 1);
        _render();
    }

    return {
        addPerson: addPerson,
        deletePerson: deletePerson
    }
})();

/*
透過這樣的設計，外部只能夠操作return值所提供的函式
*/
