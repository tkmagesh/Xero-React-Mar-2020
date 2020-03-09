var StateManager = (function(){
    var _currentState = undefined,
        _callbacks = [],
        _reducer = undefined,
        _init_action = { type : '@@INIT/ACTION' };

    function getState(){
        return _currentState;
    }

    function subscribe(callback){
        if (typeof callback === 'function')
            _callbacks.push(callback);
    }

    function emitChange(){
        _callbacks.forEach(callback => callback());
    }

    function dispatch(action){
        var newState = _reducer(_currentState, action);
        if (newState === _currentState) return;
        _currentState = newState;
        emitChange();
    }

    function createStore(reducer){
        _reducer = reducer;
        _currentState = _reducer(_currentState, _init_action);
        var store = { getState, subscribe, dispatch };
        return store;
    }

    return { createStore };
})();