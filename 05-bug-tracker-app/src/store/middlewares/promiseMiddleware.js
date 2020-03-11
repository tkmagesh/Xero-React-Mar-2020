const promiseMiddleware = (store) => (next) => (action) => {
    console.log('promise middleware');
    console.log('in promise middleware, next -> ', next);
    if (action instanceof Promise) {
        action
            .then(actionObj => next(actionObj))
    } else {
        next(action);
    }
}

export default promiseMiddleware;