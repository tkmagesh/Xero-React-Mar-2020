const loggerMiddleware = store => next => action => {
    console.group(action.type);
    console.log(action);
    console.group('BEFORE DISPATCH');
    console.log(store.getState());
    console.groupEnd();
    next(action);
    console.group('AFTER DISPATCH');
    console.log(store.getState());
    console.groupEnd();
    console.groupEnd();
};

export default loggerMiddleware;