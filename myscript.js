var uidV, firstnameV, midV, addressV, emailV, surnameV;

function readFom() {
    uidV = document.getElementById("uid").value;
    firstnameV = document.getElementById("firstname").value;
    midV = document.getElementById("mid").value;
    addressV = document.getElementById("address").value;
    emailV = document.getElementById("email").value;
    surnameV = document.getElementById("surname").value;
    Swal.fire("Data Read Succesfully!");
    console.log(uidV, firstnameV, addressV, midV);
}

document.getElementById("insert").onclick = function () {
    readFom();

    firebase
        .database()
        .ref("student/" + uidV)
        .set({
            uid: uidV,
            firstname: firstnameV,
            mid: midV,
            address: addressV,
            email: emailV,
            surname: surnameV
        });
    Swal.fire("Data Inserted Succesfully!");
    document.getElementById("uid").value = "";
    document.getElementById("firstname").value = "";
    document.getElementById("mid").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
    document.getElementById("surname").value = "";
};

document.getElementById("read").onclick = function () {
    readFom();

    firebase
        .database()
        .ref("student/" + uidV)
        .on("value", function (snap) {
            document.getElementById("uid").value = snap.val().uid;
            document.getElementById("firstname").value = snap.val().firstname;
            document.getElementById("mid").value = snap.val().mid;
            document.getElementById("address").value = snap.val().address;
            document.getElementById("email").value = snap.val().email;
            document.getElementById("surname").value = snap.val().surname;
        });
};

document.getElementById("update").onclick = function () {
    readFom();

    firebase
        .database()
        .ref("student/" + uidV)
        .update({
            //   uid: uidV,
            firstname: firstnameV,
            mid: midV,
            address: addressV,
            email: emailV,
            surname: surnameV
        });
    Swal.fire("Data Updated Succesfully!");
    document.getElementById("uid").value = "";
    document.getElementById("firstname").value = "";
    document.getElementById("mid").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
    document.getElementById("email").value = "";
};
document.getElementById("delete").onclick = function () {
    readFom();

    firebase
        .database()
        .ref("student/" + uidV)
        .remove();
    Swal.fire("Data Deleted Succesfully!");
    document.getElementById("uid").value = "";
    document.getElementById("firstname").value = "";
    document.getElementById("mid").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
    document.getElementById("surname").value = "";
};