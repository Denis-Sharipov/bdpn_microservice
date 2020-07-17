var pretend = {
    f1: function (role) {
    if (role === "2") {
        console.log("Роль подтверждена.")
        return true;
    } else {
        console.log("Роль не подтверждена.")
    }
}
};

module.exports = pretend;