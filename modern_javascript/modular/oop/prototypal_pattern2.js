// 父物件搭配create的寫法
var person = {
    species: "human",
    create: function(values) {
        var instance = Object.create(this);
        Object.keys(values).forEach(function(key) {
            instance[key] = values[key];
        });
        return instance;
    },
    sayName: function() {
        console.log("my name is " + this.name);
    },
    shoutName: function() {
        console.log("my name is " + this.name + "!!!!!!!!");
    },
    saySpecies: function() {
        console.log("my species is " + this.species);
    }
}

// 子物件使用create的寫法
var musician = person.create({
    species: "musician",
    playInstrument: function() {
        console.log("I can play " + this.instrument);
    }
});

var will = musician.create({
    name: "will",
    instrument: "piano" 
})

will.sayName();
will.shoutName();
will.saySpecies();
will.playInstrument();
