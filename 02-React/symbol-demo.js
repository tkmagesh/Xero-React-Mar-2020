var spinner = {
    counter : 0,
    up : function(){
        return ++this.counter;
    },
    down : function(){
        return --this.counter;
    }
}


var spinner = (function(){
    var counter = 0;
    return {
        up : function(){
            return ++counter;
        },
        down : function(){
            return --counter;
        }
    }
})();

function spinnerFactory(){
    var counter = 0;
    return {
        up : function(){
            return ++counter;
        },
        down : function(){
            return --counter;
        }
    }
}

function Spinner(){
    this.counter = 0;
}
Spinner.prototype.up = function(){
    return ++this.counter;
};
Spinner.prototype.down = function(){
    return --this.counter;
}

var Spinner = (function(){
    var counterSymbol = Symbol();
    function Spinner(){
        this[counterSymbol] = 0;
    }
    Spinner.prototype.up = function(){
        return ++this[counterSymbol];
    };
    Spinner.prototype.down = function(){
        return --this[counterSymbol];
    }
    return Spinner;
})();