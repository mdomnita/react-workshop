let USERS = [
    {id: 0, name: 'Ionelule', age: 27, email: 'ionelcelchel@hotmail.com'},
    {id: 1, name:'Anca', age: 26, email: 'anca_abi@gmail.com'}
];

const ONE_SECOND = 1000;

const mockApi = {
    fetchUsers: () => resolveAfter1Second({type: "fetchUsers"}),
    fetchUserById: (id) => resolveAfter1Second({type: "fetchUserById", id}),
    addUser: (user) => resolveAfter1Second({type: "addUser", user}),
    updateUser: (user) => resolveAfter1Second({type: "updateUser", user}),
    deleteUser: (id) => resolveAfter1Second({type: "deleteUser", id})
};

const resolveAfter1Second = (action) => {
    switch (action.type) {
        case "fetchUsers":
            return new Promise(resolve => {
                setTimeout(() => {resolve(USERS)}, ONE_SECOND)
            });
        case "fetchUserById":
            return new Promise(resolve => {
                setTimeout(() => {resolve(USERS.find((user) => user.id === action.id))}, ONE_SECOND)
            });
        case "addUser":
            return new Promise(resolve => {
                setTimeout(() => {
                    USERS.push({...action.user, id:generateId()});
                    resolve("SUCCESS")}, ONE_SECOND)
            });
        case "updateUser":
            return new Promise(resolve => {
                USERS = USERS.map((user)=> user.id === action.user.id ? action.user : user);
                setTimeout(() => {resolve("SUCCESS")}, ONE_SECOND)
            });
        case "deleteUser":
            return new Promise(resolve => {
                USERS = USERS.filter((user) => user.id !== action.id);
                setTimeout(() => {resolve("SUCCESS")}, ONE_SECOND)
            });
        default:
            console.log("Well, why 'd you call me then?")
    }
};

const generateId = () => {
    return USERS.length
};

export default mockApi
