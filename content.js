window.onload = function (params) {
    // 找到工具栏
    const toolbar = document.querySelector('.edui-toolbar.edui-toolbar-primary.edui-default');

    // 找到目标元素
    const targetDiv = toolbar.querySelector('#edui95');

    // 创建分割线按钮
    targetDiv.insertAdjacentHTML('afterend', `
    <div id="edui110" class="edui-box edui-separator edui-default"></div>
`);

    // 创建 RTL 按钮
    targetDiv.insertAdjacentHTML('afterend', `
    <div id="edui111" class="edui-box edui-default iconfont icon-ltr customButton"></div>    
`);

    // 创建 LTR 按钮
    targetDiv.insertAdjacentHTML('afterend', `
    <div id="edui112" class="edui-box edui-default iconfont icon-rtl customButton"></div>
`);

    // 获取按钮元素
    const rtlButton = document.getElementById('edui111');
    const ltrButton = document.getElementById('edui112');

    // 声明编辑器
    const editor = document.getElementById('ueditor_0').contentWindow.document;

    // 追加head css
    const editorHead = editor.head;
    const editorHeadLink = document.createElement('link');
    editorHeadLink.rel = "stylesheet";
    editorHeadLink.type = "text/css";
    editorHeadLink.href = "https://cdn.darwish.top/fonts/stylesheet.css";
    editorHead.appendChild(editorHeadLink);

    // RTL 按钮点击事件
    rtlButton.addEventListener('click', function () {
        const editor = document.getElementById('ueditor_0').contentWindow.document;

        editor.querySelectorAll('p').forEach(function (p) {
            p.setAttribute('dir', 'rtl');
            // 获取当前的样式并保留
            const currentStyle = p.getAttribute('style') || '';
            // 更新样式，添加新样式，同时保留原有样式
            p.setAttribute('style', `${currentStyle} font-family: "Alp Ekran", serif;`);
        });
    });

    // LTR 按钮点击事件
    ltrButton.addEventListener('click', function () {

        editor.querySelectorAll('p').forEach(function (p) {
            p.setAttribute('dir', 'ltr');
             // 获取当前的样式并保留
             const currentStyle = p.getAttribute('style') || '';
             // 更新样式，添加新样式，同时保留原有样式
             p.setAttribute('style', `${currentStyle} font-family: "Alp Ekran", serif;`);
        });
    });

}