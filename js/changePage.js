function changePage(pageUrl) 
{
    // 获取 iframe 元素
    var iframe = document.getElementById("myFrame");
    // 设置 iframe 的 src 属性为新的页面链接
    iframe.src = pageUrl;
}