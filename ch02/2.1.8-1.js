function findAndSaveUser(Users) {
    Users.findOne({})
    .then((User) => {
        User.name = 'zero';
        return User.save();
    })
    .then((user) => {
        return Users.findOne({gender: 'm'})
    })
    .then((user) => {
        console.log(user);
    })
    .catch(err => {
        console.error(err);
    });
}
findAndSaveUser(require('./Users.js'));