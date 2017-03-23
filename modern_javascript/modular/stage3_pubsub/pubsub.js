/*
    假如有兩個以上的module，裡面的function互相影響，程式碼會變成非常混亂
    A改a值，BC受影響更動，B更動後導致b值變動，C二度受影響更動，C更動後導致c值變動，D受到影響...etc

    PubSub提供一個介面
    Pub方：提供a值，b值，c值的變動訊息
    Sub方：去讀取這些變動訊息做相應的操作
*/

var people = (function(){

    var people_array = [];

    //cacheDom
    var $el = $('#peopleModule'); // $開頭為jquery物件
    var $button = $el.find('button');
    var $input = $el.find('input');
    var $ul = $el.find('ul');
    var template = $el.find('#people-template').html(); // 不是jquery物件

    //bindEvents
    $button.on('click', addPerson);
    $ul.delegate('i.del', 'click', deletePerson);

    _render(); // 底線開頭為private function

    function _render() {
        $ul.html(Mustache.render(template, {people: people_array}));
        events.emit('peopleChanged', people_array.length); // 觸發事件
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

var stats = (function(){
    var people_number = 0;

    //cacheDom
    var $stats = $('#statsModule');
    var template = $('#stats-template').html();

    //bindEvents
    events.on('peopleChanged', setPeople); // 綁定事件

    render();

    function render() {
        $stats.html(Mustache.render(template, {people: people_number}));
    }

    function setPeople(newPeople) {
        people_number = newPeople;
        render();
    }

    function destroy() {
        $stats.remove();
        events.off('peopleChanged'); //解除綁定事件
    }

    return {
        destroy: destroy
    };
})();
