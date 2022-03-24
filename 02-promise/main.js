const p = new Promise((resolve, reject) => {
    setTimeout(
        () => {
            resolve('foo');
        }, 300
    );
});

const arr = ['xyz']

p.then((msg) => {
    arr.push(msg);
    return arr;
}).then((arr) => {
    arr.push('abc');
    return arr;
}).then((arr) => {
    console.log(arr);
});
