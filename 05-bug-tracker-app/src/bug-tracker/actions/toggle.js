export function toggle(bugToToggle){
    const toggledBug = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
    const action = { type: 'REPLACE_BUG', bugToReplace: toggledBug }
    return action;
}