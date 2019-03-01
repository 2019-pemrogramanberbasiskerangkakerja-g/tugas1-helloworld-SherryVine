'use strict'

function Band(){}

Band.prototype.info = function(){
    return 'Nama Band: '+this.name
}

Band.prototype.add = function(name){
    this.name = name
}

module.exports = new Band()
