const promiseMiddleware = (store) => (next) => (action) => {
    if (action instanceof Promise) {
        action
            .then(actionObj => next(actionObj))
    } else {
        next(action);
    }
}

export default promiseMiddleware;