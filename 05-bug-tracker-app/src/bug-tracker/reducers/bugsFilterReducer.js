function bugsFilterReducer(currentState = false, action){
    if (action.type === 'BUG_FILTER') 
        return action.applyFilter;
    return currentState;
}
export default bugsFilterReducer;