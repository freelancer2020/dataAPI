const getUsersName = (names, name, fn) => {
    let client = new Set();
    let arr =[];
    let users = new Set();
    let accounts = new Set();

    names.map(obj => {
        users.add(obj['CAL EID']);
        accounts.add(obj['CAL Account Name'])
    });

    for (let i = 0; i < names.length; i++) {
        if (names[i]['CAL EID'] === name) {
            client.add(names[i]['CAL Account Name'])
        }
    }
    for (let i of client) arr.push(i.replace(/["']/g, ""));
    return fn(arr);

}

module.exports = getUsersName;


