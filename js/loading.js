window.addEventListener("load", function() 
{
    var loadingContainer = document.getElementById("loadingContainer");

    var loader = document.querySelector(".loader");
    var loaderImage = document.createElement("img");
    loaderImage.src = "./src/images/loading_icon.png";
    loaderImage.alt = "loading";
    loaderImage.style.width = "100%";
    loader.appendChild(loaderImage);

    var text = document.querySelector(".text"); 

    // 创建背景矩形
    var colors = ["#ff8899", "#ffdd88", "#77bbdd", "#7777aa", "#77DD77"]; // 不同颜色的矩形
    var heights = ["100%", "100%", "100%", "100%", "100%"]; // 不同高度的矩形
    for (var i = 0; i < 5; i++) 
    {
        var rect = document.createElement("div");
        rect.className = "bgRect";
        rect.style.backgroundColor = colors[i];
        rect.style.height = heights[i];
        rect.style.left = (i * 20) + "%"; // 平均分布在页面宽度上
        rect.style.animationDelay = 0.5 + (i * 0.2) + "s"; // 每个矩形延迟启动动画
        loadingContainer.appendChild(rect);
    }

    // 加载完成后执行动画
    setTimeout(function() 
    {
        // 渐变消失动画
        var fadeOutIconAnimation = loader.animate([ { opacity: 1, }, { opacity: 0, }], 
            { 
                duration: 1000, // 动画持续时间为1秒
                fill: "forwards" // 动画结束后保持最后一帧的状态
            });
        var fadeOutTextAnimation = text.animate([ { opacity: 1, }, { opacity: 0, }], 
            {
                duration: 1000, // 动画持续时间为1秒
                fill: "forwards" // 动画结束后保持最后一帧的状态
            });
        // 动画结束后隐藏loader和text
        fadeOutIconAnimation.onfinish = function() {
            loader.style.display = "none";
            text.style.display = "none";
        };
        fadeOutTextAnimation.onfinish = function() {
            loader.style.display = "none";
            text.style.display = "none";
        };
        
        for(var i = 2; i < 7; i++)
        {
            loadingContainer.children[i].style.animationName = (i % 2 === 0 ? "slideDown" : "slideUp");
        }
        // 播放音乐
        var music = document.getElementById("bgm");
        music.play();
    }, 3000);
});