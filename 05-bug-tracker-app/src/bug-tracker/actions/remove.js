export function remove(bugToRemove) {
    const action = { type: 'REMOVE_BUG', bugToRemove };
    return action;
}