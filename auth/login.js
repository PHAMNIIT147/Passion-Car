// form => {
//     if (form.username.value == 'phong' && form.password.value == '123') {
//         window.location = "post.html";
//     } else {
//         alert("tai khoan va mat khau cua ban khong hop le");
//         return false;
//     }
// };

/*27-3-2019*/
// var form = document.getElementById("main-form");

// form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     if (form.username.value == 'phong' && form.password.value == '123') {
//         window.location = "post.html";
//     } else {
//         alert("tai khoan va mat khau cua ban khong hop le");
//         return false;
//     }
// })
const app = new Vue({
    el: '#login',
    data: {
        usname: '',
        psword: '',
        error: false
    },
    methods: {
        submit: function(e) {
            e.preventDefault();
            if (this.usname === 'phong' && this.psword === '123') {
                window.location.href = 'https://www.w3schools.com/js/js_htmldom_eventlistener.asp';
                this.error = true;
            } else {
                alert('Sai username hoặc password');
            }
        }
    }
});