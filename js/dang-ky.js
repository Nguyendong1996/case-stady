function signup(){
    event.preventDefault(event);
    var username=document.getElementById("username").value
    var password=document.getElementById("password").value
    var confirm_password=document.getElementById("confirm_password").value
    var user ={
        username : username,
        password :password,
        confirm_password:confirm_password,
    }

    if(username === "" || password === "" || confirm_password === ""){
        alert("vui lòng điền thông tin")
    }else{
        var json =JSON.stringify(user)
        localStorage.setItem(username,json)
        alert("Đăng Ký Thành Công")
        window.location.href = "dang-nhap.html"}
}