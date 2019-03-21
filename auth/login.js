// form => {
//     if (form.username.value == 'phong' && form.password.value == '123') {
//         window.location = "post.html";
//     } else {
//         alert("tai khoan va mat khau cua ban khong hop le");
//         return false;
//     }
// };

var form = document.getElementById("main-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    debugger;
    if (form.username.value == 'phong' && form.password.value == '123') {
        window.location = "post.html";
    } else {
        alert("tai khoan va mat khau cua ban khong hop le");
        return false;
    }
})