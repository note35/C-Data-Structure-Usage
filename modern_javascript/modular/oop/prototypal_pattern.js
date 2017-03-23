// 一般物件的寫法
var person = {
    species: "human",
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

//繼承父物件，建立子物件
var musician = Object.create(person);
musician.playInstrument = function() {
    console.log("I can play " + this.instrument);
}

var will = Object.create(musician);
will.name = "will";
will.instrument = "piano";

will.sayName();
will.shoutName();
will.playInstrument();
will.saySpecies();


// 可以直接改父物件，子物件會跟著被影響
person.species = "fish";
will.saySpecies();
