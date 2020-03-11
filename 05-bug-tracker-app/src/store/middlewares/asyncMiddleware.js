const asyncMiddleware = store => next => action => {
    console.log('async middleware');
    if (typeof action === 'function') {
        return action(store.dispatch)
    }
    return next(action);
}

export default asyncMiddleware;