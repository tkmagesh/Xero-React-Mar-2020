function spinnerReducer(currentState = 0, action) {
    if (action.type === 'UP') return currentState + action.delta;
    if (action.type === 'DOUBLE_UP') return currentState * 2;
    if (action.type === 'DOWN') return currentState - action.delta;
    if (action.type === 'DOUBLE_DOWN') return currentState / 2;
    return currentState;
}

export default spinnerReducer;