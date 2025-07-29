document.getElementById("audio").volume = 0.2; // 设置音量为50%
document.getElementById("audio").play();
let music_open=1;
let music_title=1;
document.getElementById("music").addEventListener("click", function() {
    music_open+=1;
    if (music_open%2==1){
        document.getElementById("audio").play();
        console.log("音乐播放中...");
        document.getElementById("music").innerHTML = "<h2>暂停音乐</h2>";
    }
    else{
        document.getElementById("audio").pause();
        document.getElementById("music").innerHTML = "<h2>来点音乐</h2>";
        console.log("音乐已暂停...");
    }
});
document.getElementById("music_change").addEventListener("click", function() {
    music_title+=1;
    if (music_title%2==0){
        document.getElementById("audio").src = "music/Akali,音街ウナ,GUMI - 再演.mp3";
        document.getElementById("audio").play();
        console.log("音乐1播放中...");
        document.getElementById("music_change").innerHTML = "<h2>换首音乐</h2>";
    }
    else if (music_title%2==1){
        document.getElementById("audio").src = "music/ryo (supercell) - 夏の大三角.flac";
        document.getElementById("audio").play();
        console.log("音乐2播放中...");
        document.getElementById("music_change").innerHTML = "<h2>换首音乐</h2>";
    }
});
document.getElementById("theme").addEventListener("click", function() {
    let currentTheme = document.body.header.style.background;
    if (currentTheme === "linear-gradient(to bottom, #1d1d1d)") {
        document.body.header.style.background = "linear-gradient(to bottom, #ffffff)";
        document.body.header.style.color = "#000000";
        console.log("主题已切换为亮色模式");
    } else {
        document.body.header.style.background = "linear-gradient(to bottom, #1d1d1d)";
        document.body.header.style.color = "#ffffff";
        console.log("主题已切换为暗色模式");
    }
});