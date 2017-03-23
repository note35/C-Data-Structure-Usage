var people = {

    people: [],

    init: function() {
        this.cacheDom();
        this.bindEvents();
        this.render();
    },
    cacheDom: function() {
        this.$el = $('#peopleModule'); //jquery obj naming with this.$var
        this.$button = this.$el.find('button');
        this.$input = this.$el.find('input');
        this.$ul = this.$el.find('ul');
        this.template = this.$el.find('#people-template').html(); // not jquery obj
    },
    bindEvents: function() {
        this.$button.on('click', this.addPerson.bind(this));
        this.$ul.delegate('i.del', 'click', this.deletePerson.bind(this));
    },
    render: function() {
        var data = {
            people: this.people,
        };
        this.$ul.html(Mustache.render(this.template, data));

    },
    addPerson: function() {
        this.people.push(this.$input.val());
        this.render();
        this.$input.val('');
    },
    deletePerson: function(e) {
        var $remove = $(e.target).closest('li');
        var i = this.$ul.find('li').index($remove);

        this.people.splice(i, 1);
        this.render();
    }
};

people.init();

/*
模組化後，大幅度解決了麵條式代碼產生的問題。
但因為people是一個開放的物件，使用者可能對物件內的東西隨意的操作，導致整個javascript無法正確運作。
*/
