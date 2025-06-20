
var flag = false;
var flag_sound = false;
var is_admin = false;
var number = 0;
var items_adult = ["mem.jpeg", "mem1.jpg","mem2.png","mem3.jpg","mem4.jpg","mem5.jpg","mem6.jpg","mem7.jpeg","mem8.jpg","mem9.jpg","mem10.webp","mem11.jpg","12.jpg","13.jpeg"];
var items_kids = ["mem2.png","mem3.jpg","mem4.jpg","mem5.jpg","mem6.jpg","mem7.jpeg","mem8.jpg","mem9.jpg","mem10.webp","mem11.jpg","12.jpg","13.jpeg"];
var sfx = new Audio("sfx.mp3");
var kids_sfx = new Audio("kids sfx.mp3");
var adolt_sfx = new Audio("adolt sfx.mp3");
var main_song = new Audio("mainsong.mp3");
var on_sound = new Audio("on sound.mp3");
var off_sound = new Audio("off sound.mp3");
var item;

main_song.loop = true;

if (Math.random() <= 0.25){
    var answer = confirm("Вы человек?");
    if (answer == true) {
    } else {
    window.close()
    }
}

function hide_seek_img() {
    sfx.play();
    if (flag == false) {
        if (document.getElementById("image").style.display == "none") {
            number = number + 1;
            document.getElementById("image").style.display = "block";
            item = items_adult[Math.floor(Math.random()*items_adult.length)];
            document.getElementById("image").src = item;
        } else {
            document.getElementById("image").style.display = "none";
        }
        sfx.currentTime = 0; 
    } else {
        if (document.getElementById("image").style.display == "none") {
            number = number + 1;
            document.getElementById("image").style.display = "block";
            item = items_kids[Math.floor(Math.random()*items_kids.length)];
            document.getElementById("image").src = item;
        } else {
            document.getElementById("image").style.display = "none";
        }
        sfx.currentTime = 0; 
    }
    
}
function cens() {
    if (flag == false) {
        kids_sfx.play();
        flag = true;
        kids_sfx.currentTime = 0;
    } else {
        adolt_sfx.play();
        flag = false;
        adolt_sfx.currentTime = 0;
    }
    
}
function on_off_sound() {
    if (flag_sound == false) {
        flag_sound = true;
        on_sound.play();
        main_song.play();
        on_sound.currentTime = 0
    } else {
        flag_sound = false;
        off_sound.play();
        main_song.pause();
        off_sound.currentTime = 0
    }
}
function admin_command() {
    password = prompt("Введите пароль");
    if (password == "1234") {
        alert("You admin!");
        is_admin = true;
        document.getElementById("admin-button").style.display = "none";
    } else {
        alert("Password invalid!");
        is_admin = false;
        document.getElementById("admin-button").style.display = "block";
    }
}