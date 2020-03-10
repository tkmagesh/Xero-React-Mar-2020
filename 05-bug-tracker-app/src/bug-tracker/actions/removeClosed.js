export function removeClosed(bugs) {
    const bugsToRemove = bugs.filter(bug => bug.isClosed);
    const action = { type: 'REMOVE_BUGS', bugsToRemove };
    return action;
}