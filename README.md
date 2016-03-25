总结常见UI的使用，提高工作效率，便于使用的时候查找。
* 常用的公共`common.css`，包括PC端与mobile端
* banner:使用的是cxslide,支持各种形式的轮播，可以根据需要进行拓展，修改代码
* dialog:自己写的一个jquery插件，支持信息提醒，确认等弹出框。

### banner
主要用在PC端网站上，为了满足大屏，UI一般会把banner图设计成1920px宽，图片中的实际内容会在图片的正中间。
这种情况下，如果只是让图片等比例缩小，显然不能满足UI设计的初衷，图片中的内容会缩小，达不到效果。有两种
方法可以实现：
1. 用做背景图，让背景图居中
2. 直接图片显示，然后通过定位达到效果
参考示例banner,示例中的banner图来自百度开发者平台官网。
banner图的切换效果不同，相应的式样应做调整，建议用第一种方法。

### dialog
弹出框主要应用在网站中各种信息提示的。主要分为三类
* 纯信息提示，只要一个确定按钮，相当于alert功能。`$.zdialog.update(str)`
* 信息提示，有确定按钮，点击确定按钮有callback时，采用此方法。`$.zdialog.modify({body: str, okHandler: fn})`
* 确认框，有确定和取消两个按钮，一般在删除的时候采用这个弹出框。`$.zdialog.confirm({okbtn: str, cancelbtn: str, okHandler: fn})`