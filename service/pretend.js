var pretend = {
    f1: function (role) {
    if (role === "2") {
        return true;
        console.log("Роль подтверждена.")
    } else {
        console.log("Роль не подтверждена.")
    }
}
};

module.exports = pretend;