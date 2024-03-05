## 优化

1. 增加浏览器标签页icon图标
2. 优化显示效果，限制宽度1200px居中
3. 修复顶部标签页中文乱码问题，感谢[#16](https://github.com/TheInsomniac/Nginx-Fancyindex-Theme/pull/16)

## NGINX FancyIndex 主题  
===  
  
为nginx的fancyindex模块提供一个更漂亮的主题。关于这个优秀模块的更多细节可以在开发者的[github页面](https://github.com/aperezdc/ngx-fancyindex)上找到。  
  
#### 注意：  
NGX-FANCYINDEX将文件名截断为50个字符，减去3，然后在截断的名称后附加"..>"。这可以通过在修改"ngx_http_fancyindex_module.c"的第55行后重新编译NGX-FANCYINDEX来修复。  

From:

    #define NGX_HTTP_FANCYINDEX_NAME_LEN 50

To:

    #define NGX_HTTP_FANCYINDEX_NAME_LEN 500 (or some other number greater than 50)
  
##### 使用方法：  
 - 使用fancyindex模块编译nginx。  
 - 在nginx conf的位置指令中包含'fancyindex.conf'的内容。  
 - 将剩余的项目复制到你的web根目录下的'fancyindex'。  
  - header.html  
  - footer.html  
  - css\fancyindex.css  
  - fonts\\*  
  - images\breadcrumb.png  
 - 重启你的nginx服务器。  
  
##### 添加/修改：  
 - 来自[Splitbrain](http://www.splitbrain.org/projects/file_icons)的Mime类型图标  
  - 图标默认在大型设备上启用，在小型设备（如手机）上关闭。  
  - 如果你根本不需要图标：复制css\fancyindex_NoIcons.css到css\fancyindex.css  
 - 更好地处理移动CSS点击区域。  
 - 添加HTML5 History以实现更快的页面转换。  
  - 这可以通过注释掉footer.html中的script标签来禁用  
 - 修复了旧版FF上的CSS问题  
  
##### 附录：  
 - 如果你想在文件列表中恢复'Parent Directory/'列表：  
  - 阅读：[这个问题](https://github.com/TheInsomniac/Nginx-Fancyindex-Theme/issues/1#issuecomment-43936700)  
  
<img src="https://raw.githubusercontent.com/TheInsomniac/Nginx-Fancyindex-Theme/master/images/fancyindex.png">  
<img src="https://raw.githubusercontent.com/TheInsomniac/Nginx-Fancyindex-Theme/master/images/fancyindex1.png">  
<img src="https://raw.githubusercontent.com/TheInsomniac/Nginx-Fancyindex-Theme/master/images/fancyindex2.png">

---

NGINX FancyIndex Theme
===

A prettier theme for nginx' fancyindex module. Further details about this excellent
module can be found at the dev's [github page](https://github.com/aperezdc/ngx-fancyindex).

####NOTE:
NGX-FANCYINDEX truncates the file name to 50 characters subtracts 3 and then
appends a "..>" to the truncated name. This can be fixed by recompiling
NGX-FANCYINDEX after changing line 55 of "ngx_http_fancyindex_module.c":

From:

    #define NGX_HTTP_FANCYINDEX_NAME_LEN 50

To:

    #define NGX_HTTP_FANCYINDEX_NAME_LEN 500 (or some other number greater than 50)

#####Usage:
 - Compile nginx with the fancyindex module.
 - Include the contents of 'fancyindex.conf' in your location directive of your nginx conf.
 - copy the remaining items in your web root under 'fancyindex'.
  - header.html
  - footer.html
  - css\fancyindex.css
  - fonts\\*
  - images\breadcrumb.png
 - Restart your nginx server.

#####Added/Modified:
 - Mime type icons from [Splitbrain](http://www.splitbrain.org/projects/file_icons)
  - Icons default to enabled on large devices and off on small devices like phones.
  - If you'd prefer no icons at all: copy css\fancyindex_NoIcons.css css\fancyindex.css
 - Slightly better handling of mobile CSS click areas.
 - Added HTML5 History for quicker page transitions.
  - This can be disabled by commenting out the script tag in footer.html
 - Fixed CSS issues on older versions of FF

#####Addendums:
 - If you want your 'Parent Directory/' listing back in your file listings:
  - Read: [This Issue](https://github.com/TheInsomniac/Nginx-Fancyindex-Theme/issues/1#issuecomment-43936700)

![Image1](https://raw.githubusercontent.com/TheInsomniac/Nginx-Fancyindex-Theme/master/images/fancyindex.png)

![Image1](https://raw.githubusercontent.com/TheInsomniac/Nginx-Fancyindex-Theme/master/images/fancyindex1.png)

![Image1](https://raw.githubusercontent.com/TheInsomniac/Nginx-Fancyindex-Theme/master/images/fancyindex2.png)
