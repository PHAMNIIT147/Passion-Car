form => {
    if (form.username.value == 'phong' && form.password.value == '123') {
        window.location = "post.html";
    } else {
        alert("tai khoan va mat khau cua ban khong hop le");
        return false;
    }
};