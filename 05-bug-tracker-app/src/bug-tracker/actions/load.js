import axios from 'axios';

function getLocalBugs(){
    var bugs = [
        {id : 1, name : 'Sample bug - 1', isClosed : false, createdAt : new Date()},
        { id: 2, name: 'Sample bug - 2', isClosed: true, createdAt: new Date() },
    ];
    return bugs;
}

function getServerBugs(){
    axios
        .get('http://localhost:3030/bugs')
        .then(response => response.data)
        .then(bugs => console.table(bugs));
}
export function load(){
    const bugs = getLocalBugs();
    const action = { type : 'LOAD_BUGS', bugs : bugs }
    return action;
}