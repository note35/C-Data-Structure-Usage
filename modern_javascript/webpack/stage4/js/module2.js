//module 2
//假如在這邊用jquery，code會在module loader那邊被reduce，確保順序正確但code size不會變大
var _ = require('lodash');
var people = [
    {
        "gender": "male"
    },{
        "gender": "female"
    }
]

var femaleCount = _.filter(people, {gender: "female"}).length;
alert(femaleCount);
