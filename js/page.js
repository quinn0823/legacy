/* --- 网页标题 --- */

var title_us = document.title;
var title_cn = document.title;
var h1_us = document.title;
var h1_cn = document.title;

if (title_us == "Home") {
    title_us = "Hi! I'm Quinn Qiu.";
    title_cn = "嗨! 我是 Quinn Qiu.";
    h1_cn = "主页";
} else if (title_us == "My 16PERSONALITIES") {
    title_cn = "我的 16PERSONALITIES (16个性)";
    h1_cn = title_cn;
} else if (title_us == "Projects") {
    title_cn = "项目";
    h1_cn = title_cn;
} else if (title_us == "App Library") {
    title_cn = "App 资源库"
    h1_cn = title_cn;
} else if (title_us == "QuinnStandard") {
    title_cn = "Quinn 标准";
    h1_cn = title_cn;
}  else if (title_us == "Music") {
    title_cn = "音乐";
    h1_cn = title_cn;
} else if (title_us == "Lab") {
    title_cn = "实验室";
    h1_cn = title_cn;
} else if (title_us == "Website") {
    title_cn = "此网站";
    h1_cn = title_cn;
} else if (title_us == "QS 1 Subject Code") {
    title_cn = "QS 1 学科代号";
    h1_cn = title_cn;
} else if (title_us == "QS 2 Basic Text Format") {
    title_cn = "QS 2 基本文本格式";
    h1_cn = title_cn;
} else if (title_us == "QS 3 Subject Code And Color") {
    title_cn = "QS 3 学科代号及颜色";
    h1_cn = title_cn;
}



/* --- 页眉 --- */

// 菜单栏
var header_us = "<div class='list'><ul><img src='/legacy/images/icons/icon-64.png'/><li><a href=''>Home</a></li><li><a href='projects.html'>Projects</a></li><li><a href='qs/'>QS</a></li><li><a href='music.html'>Music</a></li><li class='right'><a href='website.html'>Website</a></li></ul></div><h1>" + h1_us + "</h1><hr>";
var header_cn = "<div class='list'><ul><img src='/legacy/images/icons/icon-64.png'/><li><a href=''>首页</a></li><li><a href='projects.html'>项目</a></li><li><a href='qs/'>标准</a></li><li><a href='music.html'>音乐</a></li><li class='right'><a href='website.html'>此网站</a></li></ul></div><h1>" + h1_cn + "</h1><hr>";



/*
<details><summary>Title</summary><hr><ul><li>First</li><li>Secend</li><li>Third</li></ul></details>
*/



/* --- 页脚填写部分 --- */
// 版本 Tag
var now_tag = "12.5";
var next_tag = "13";

// 发行内容
var now_up_us = "<ul><li>🤣 Better profile with interesting emojis. You can see more colorful information about me there.</li><li>📚 New project - <a href='https://quinn0823.github.io/projects/tdh/'>Textbook Download Helper</a>! This is a collaborative project finished by two kids which is used to download electronic textbook on the Internet.</li><li>🎨 Completely rewritten CSS code</li><li>📸 4 new snapshots have been added:<ul><li><a href='https://quinn0823.github.io/snapshot-12.4/'>Quinn-Web 12.4</a></li><li><a href='https://quinn0823.github.io/snapshot-12.3/'>Quinn-Web 12.3</a></li><li><a href='https://quinn0823.github.io/snapshot-12.2.2/'>Quinn-Web 12.2.2</a></li><li><a href='https://quinn0823.github.io/snapshot-12.1.1-alpha/'>Quinn-Web 12.1.1-alpha</a></li></ul></li><li>😸 Several new <a href='https://quinn0823.github.io/projects/'>Scratch</a> top projects and all of them have colorful emoji.</li><li>🔜 New function - Progress. You can easily check the progress of the next version now.</li><li>⛩️ New quick access - GitHub Releases. You're able to jump to <a href='https://github.com/Quinn0823/quinn0823.github.io/releases/'>GitHub Releases</a> page of this version.</li><li>🛠️ We provide 2 Quinn-Web version based on other languages or platforms:<ul><li>Ⓜ️ <a href='https://quinn0823.github.io/markdown/'>Markdown Version</a></li><li>📝 <a href='https://quinn0823.montaigne.io/'>Montaigne Version</a></li></ul></li></ul>";
var now_up_cn = "<ul><li>🤣 更好的个人资料与有趣的表情符号. 你可以在那里看到更多关于我的丰富多彩的信息.</li><li>📚 新项目 - <a href='https://quinn0823.github.io/projects/tdh/'>Textbook Download Helper</a>！这是一个由两个孩子合作完成的项目, 于在互联网上下载电子教科书.</li><li>🎨 完全重写的 CSS 代码.</li><li>📸 新增 4 个快照:<ul><li><a href='https://quinn0823.github.io/snapshot-12.4/'>Quinn-Web 12.4</a></li><li><a href='https://quinn0823.github.io/snapshot-12.3/'>Quinn-Web 12.3</a></li><li><a href='https://quinn0823.github.io/snapshot-12.2.2/'>Quinn-Web 12.2.2</a></li><li><a href='https://quinn0823.github.io/snapshot-12.1.1-alpha/'>Quinn-Web 12.1.1-alpha</a></li></ul></li><li>😸 几个新的 <a href='https://quinn0823.github.io/projects/'>Scratch</a> 置顶项目, 他们都有丰富多彩的表情符号.</li><li>🔜 新增功能 - 进展. 您现在可以轻松地检查下一个版本的进度.</li><li>⛩️ 新的快速访问 - GitHub Releases. 你可以跳转到这个版本的 <a href='https://github.com/Quinn0823/quinn0823.github.io/releases/'>GitHub Releases</a> 页面.</li><li>🛠️ 我们提供 2 个基于其他语言或平台的 Quinn-Web 版本:<ul><li>Ⓜ️ <a href='https://quinn0823.github.io/markdown/'>Markdown 版</a></li><li>📝 <a href='https://quinn0823.montaigne.io/'>Montaigne 版</a></li></ul></li></ul>";

var now_change_us = "<ul><li>🧬 <a href='https://quinn0823.github.io/lab.html'>Lab</a> page has been moved to <a href='https://quinn0823.github.io/website.html'>Website</a> page. The header bar is more exquisite than before now.</li><li>🚀 Online JavaScript file have now been moved to local storage. This further speeds up the loading.</li><li>😼 The theme color of <a href='https://quinn0823.github.io/projects/'>Scratch Projects</a> section has been changed into #855cd6 &amp; #7854c0.</li><li>💬 All <code>language-Country</code> codes have been changed to <code>Country</code> code:<ul><li>🇺🇸 <code>en-us</code> → <code>us</code> , <code>English - United States</code> → <code>United States</code></li><li>🇨🇳 <code>zh-cn</code> → <code>cn</code> , <code>简体中文 (中国大陆)</code> → <code>中国大陆</code></li></ul></li><li>🕓 In order of having better style, the Timeline section has been quarantined. It may be available in the next version or even further version. However, the Timeline beta version will be still in the <a href='https://quinn0823.github.io/lab.html'>Lab</a> page.</li><li>🔠 Because of the problem of copyright, the fonts have been changed into Arial &amp; Helvetica. Also, the font symbols now have been changed into Emojis &amp; <a href='https://fontawesome.com/'>Font Awesome</a>'s symbols.</li><li>🔙 The Web History section has been moved to <a href='https://quinn0823.github.io/website.html'>Snapshots</a> section because it had been stopped updating a long time ago.</li></ul>";
var now_change_cn = "<ul><li>🧬 <a href='https://quinn0823.github.io/lab.html'>实验室</a> 页面已移至 <a href='https://quinn0823.github.io/website.html'>此网站</a> 页面. 标题栏比以前更精致了.</li><li>🚀 在线 JavaScript 文件现在已移动到本地存储. 这进一步提升了加载速度.</li><li>😼 <a href='https://quinn0823.github.io/projects/'>Scratch Projects</a> 部分的主题颜色已更改为 #855cd6 和 #7854c0.</li><li>💬 所有  <code>语言-国家</code> 代码已更改为 <code>国家</code> 代码:<ul><li>🇨🇳 <code>zh-cn</code> → <code>cn</code> , <code>简体中文 (中国大陆)</code> → <code>中国大陆</code></li><li>🇺🇸 <code>en-us</code> → <code>us</code> , <code>English - United States</code> → <code>United States</code></li></ul></li><li>🕓 为了具有更好的样式, 时间轴部分已被隔离. 它可能在下一个版本甚至更高的版本中可用. 然而, 时间线的测试版将在 <a href='https://quinn0823.github.io/lab.html'>Lab</a> 页面.</li><li>🔠 由于版权问题, 字体已改为 Arial 和 Helvetica. 此外, 字体符号现在已更改为表情符号和 <a href='https://fontawesome.com/'>Font Awesome</a> 的符号.</li><li>🔙 Web History 部分已移动到 <a href='https://quinn0823.github.io/website.html'>Snapshots</a> 部分, 因为它已经在很久以前停止更新.</li></ul>";

var now_egg_us = "<ul><li>🐎 The progress bar is dynamic on Safari! It's available on both iOS &amp; macOS (visionOS? I dont know).</li></ul>";
var now_egg_cn = "<ul><li>🐎 Safari 上的进展条是动态的！它可在 iOS 和 macOS 上展现 (visionOS? 我不知道) .</li></ul>";

// 预览内容
var next_up_us = "<ul><li>🪪 Brand new contact footer. You can see lots of my social media contact details there.</li><li>📑 New README and new badges for all markdown files</li><li>⚓️ Level 3 and above headings will be added anchor points. This is helpful for positioning &amp; redirection.</li></ul><p>More and more new function will be available soon!</p>";
var next_up_cn = "<ul><li>🪪 全新的联系人页脚. 你可以在那里看到我的很多社交媒体联系方式.</li><li>📑 新的自述文件和为所有 markdown 文件的新徽章.</li><li>⚓️ 三级及以上的标题将添加锚点. 这对定位和重定向很有帮助.</li></ul><p>越来越多的新功能即将推出！</p>";

// 进度
var progress = 0;

// 更新时间
var up_year = "2024";
var up_month_us = "Aug";
var up_month_cn = "8";
var up_day = "13"

var date_us = up_month_us + " " + up_day + ", " + up_year;
var date_cn = up_year + " 年 " + up_month_cn + " 月 " + up_day + " 日";



/* --- 页脚框架部分 --- */
// 新闻框架
var news_us = "<div class='lmr enlmr'><div class='left'><span>Quinn-Web " + next_tag + " - NEXT</span></div><div class='middle'><progress max='100' value='" + progress + "'></progress></div><div class='right'><span>Progress: " + progress + "%</span></div></div><details><summary>⏩ What will be updated?</summary><hr>" +next_up_us + "</details><hr><div class='lmr'><div class='left'><span>Quinn-Web " + now_tag + " - NOW</span></div><div class='middle'></div><div class='right'><span><a href='https://github.com/Quinn0823/quinn0823.github.io/releases/tag/" + now_tag + "' target='_blank'><i class='fa-brands fa-github'></i>Releases</a></span></div></div><details open><summary>✨ What has been updated? </summary><hr>" + now_up_us + "</details><details><summary>🔧 What has been changed? </summary><hr>" + now_change_us + "</details><details><summary>🥚 Easter egg </summary><hr>" + now_egg_us + "</details>";
var news_cn = "<div class='lmr'><div class='left'><span>Quinn-Web " + next_tag + " - 下一版本</span></div><div class='middle'><progress max='100' value='" + progress + "'></progress></div><div class='right'><span>进展: " + progress + "%</span></div></div><details><summary>⏩ 即将更新</summary><hr>" + next_up_cn + "</details><hr><div class='lmr'><div class='left'><span>Quinn-Web " + now_tag + " - 当前版本</span></div><div class='middle'></div><div class='right'><span><a href='https://github.com/Quinn0823/quinn0823.github.io/releases/tag/" + now_tag + "' target='_blank'><i class='fa-brands fa-github'></i>发行页</a></span></div></div><details open><summary>✨ 现已更新</summary><hr>" + now_up_cn + "</details><details><summary>🔧 现已改变 </summary><hr>" + now_change_cn + "</details><details><summary>🥚 彩蛋 </summary><hr>" + now_egg_cn + "</details>";

// 联系框架
var contact = "<div class='contact'><ul><li><a href='https://github.com/Quinn0823/' target='_blank'><i class='fa-brands fa-github'></i></a></li><li><a href='mailto:quinnqiu0823@icloud.com' target='_blank'><i class='fa-solid fa-envelope'></i></a></li><li><a href='https://twitter.com/quinnqiu110823' target='_blank'><i class='fa-brands fa-x-twitter'></i></a></li><li><a href='https://matrix.to/#/@quinn0823-6126f7736da0373984840004:gitter.im' target='_blank'><i class='fa-brands fa-gitter'></i></a></li><li><a href='https://glitch.com/@Quinn0823' target='_blank'><img src='/legacy/images/logos/glitch.ico' class='fa-glitch'></a></li><li class='line'></li><li><a href='images/qr_code/wechat.jpeg' target='_blank'><i class='fa-brands fa-weixin'></i></a></li><li><a href='images/qr_code/qq.jpeg' target='_blank'><i class='fa-brands fa-qq'></i></a></li><li><a href='https://weibo.com/quinn0823' target='_blank'><i class='fa-brands fa-weibo'></i></a></li><li><a href='https://space.bilibili.com/605805547' target='_blank'><i class='fa-brands fa-bilibili'></i></a></li><li><a href='https://www.zhihu.com/people/quinn0823' target='_blank'><i class='fa-brands fa-zhihu'></i></a></li></ul></div>";

// 页脚框架
var footer_us = "<hr><div id='footeri'>" + news_us + "<hr><div class='sel'><select id='lang' onchange='langchange()'><option value='1' selected='selected'>United States</option><option value='2'>中国大陆</option></select></div><span style='text-align: center; display:block; '>📅 Last Updated: " + date_us + " | Copyright © 2019-" + new Date(Date.parse(new Date())).getFullYear() + " Quinn Qiu All Rights Reserved. </span></div>" + contact;
var footer_cn = "<hr><div id='footeri'>" + news_cn + "<hr><div class='sel'><select id='lang' onchange='langchange()'><option value='1'>United States</option><option value='2' selected='selected'>中国大陆</option></select></div><span style='text-align: center; display:block; '>📅 最近更新: " + date_cn + " | Copyright © 2019-" + new Date(Date.parse(new Date())).getFullYear() + " Quinn Qiu 保留所有权利. </span></div>" + contact;


/* --- 浏览器检测 --- */
var userAgent = navigator.userAgent;
if (userAgent.indexOf("Firefox") > -1) {
    header_us = "<span class='com'>⚠️ You are using Firefox to access Quinn-Web. We highly recommend that you use <a href='https://www.google.com/chrome/' target='_blank'>Chrome</a>, <a href='https://www.microsoft.com/us/edge/download/' target='_blank'>Edge</a>, or <a href='https://www.apple.com/safari/' target='_blank'>Safari</a> for a better style. Although we have tried our best to adapt the CSS code of Firefox to let Quinn-Web in Firefox look similar to the others.</span>" + header_us;
    header_cn = "<span class='com'>⚠️ 你正在使用 Firefox 访问 Quinn-Web. 我们强烈建议你使用 <a href='https://www.google.cn/chrome/' target='_blank'>Chrome</a>, <a href='https://www.microsoft.com/cn/edge/download/' target='_blank'>Edge</a>, 或者 <a href='https://www.apple.com.cn/safari/' target='_blank'>Safari 浏览器</a> 以获得更好的样式. 尽管我们已经尽了最大的努力让 Quinn-Web 在 Firefox 中看起来和其他的相似. (URLs 已针对中国大陆地区做出适应性调整)</span>" + header_cn;
} 


/* --- 语言设置功能 --- */
// 显示语言
function langdate() {
    if (localStorage.langdate == 2) { //Chinese
        document.title = title_cn + " - Quinn-Web";

        document.getElementById("header").innerHTML = header_cn;
        document.getElementById("footer").innerHTML = footer_cn;

        document.getElementById("us").style.display = "none";
        document.getElementById("cn").style.display = "inline";
    } else { //English
        document.title = title_us + " - Quinn-Web";

        document.getElementById("header").innerHTML = header_us;
        document.getElementById("footer").innerHTML = footer_us;

        document.getElementById("us").style.display = "inline";
        document.getElementById("cn").style.display = "none";
    }
}

// 语言切换
function langchange() {
    if (document.getElementById("lang").value == "1") {
        localStorage.langdate = 1;
    } else if (document.getElementById("lang").value == "2") {
        localStorage.langdate = 2;
    }
    langdate();
}

langdate();
