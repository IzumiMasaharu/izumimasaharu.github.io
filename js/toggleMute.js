// 切换音乐的静音状态
function toggleMute() 
{
    var music = document.getElementById("bgm"); // 获取音频元素
    var musicIcon = document.getElementById("musicIcon"); // 获取控制音乐的图标
    var pausedIcon = document.getElementById("pausedIcon"); // 获取控制音乐的图标

    if (music.muted) 
    {
        music.muted = false; // 取消静音
        musicIcon.style.animationPlayState = "running";
        pausedIcon.hidden = true;
    } 
    else 
    {
        music.muted = true; // 静音
        musicIcon.style.animationPlayState = "paused"; 
        pausedIcon.hidden = false;
    }
}