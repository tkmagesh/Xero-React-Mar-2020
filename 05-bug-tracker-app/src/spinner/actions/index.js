const spinnerActionCreators = {
    up(delta) {
        const action = { type: 'UP', delta: delta };
        return action;
    },
    down(delta) {
        const action = { type: 'DOWN', delta: delta };
        return action;
    },
    doubleUp() {
        const action = { type: 'DOUBLE_UP' };
        return action;
    },
    doubleDown() {
        const action = { type: 'DOUBLE_DOWN' };
        return action;
    }
}
export default spinnerActionCreators;