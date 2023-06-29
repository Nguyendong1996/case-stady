function login() {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user= localStorage.getItem(username);
    var data = JSON.parse(user)
    if (user === null) {
        alert("vui lòng nhập usernamr và password")}
    else if (username === data.username && password === data.password) {
        alert("Đăng nhập thành công")
        window.location.href = "gioithiu-muaban-sanpham.html";
    } else {
        alert("Tài khoản Mật Khẩu không chính xác , vui lòng đăng nhập ")
    }

}