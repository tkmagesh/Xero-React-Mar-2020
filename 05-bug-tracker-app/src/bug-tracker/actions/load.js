import axios from 'axios';

function getLocalBugs(){
    var bugs = [
        {id : 1, name : 'Sample bug - 1', isClosed : false, createdAt : new Date()},
        { id: 2, name: 'Sample bug - 2', isClosed: true, createdAt: new Date() },
    ];
    return bugs;
}

function getServerBugs(){
    return axios
        .get('http://localhost:3030/bugs')
        .then(response => response.data)
        
}
export function load(){
    /* 
    const bugs = getLocalBugs();
    const action = { type: 'LOAD_BUGS', bugs: bugs }
    return action; 
    */

    /* return function(dispatch){
        const p = getServerBugs();
        p.then(function(bugs){
            const action = { type: 'LOAD_BUGS', bugs: bugs }
            dispatch(action); 
        });
    } */

    return async function (dispatch) {
        const bugs = await getServerBugs();
        const action = { type: 'LOAD_BUGS', bugs: bugs }
        dispatch(action);
    }
}