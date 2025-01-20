<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## 笔记
- 302 重定向
- base64 vs base62
- encoding converts numbers to ASCII strings (0-9, a-z and A-Z)
- UTF8MB4 是一种用于存储和处理 Unicode 字符的字符集，它是 MySQL 和 MariaDB 数据库中对 UTF-8 编码的扩展实现。UTF8MB4 是为了更好地支持 Unicode 的全部字符范围，尤其是那些需要 4 个字节表示的字符（如表情符号、一些罕见的汉字等）

## 重定向区分
301 是永久重定向，就是重定向一次之后，下次浏览器就不会再访问短链，会直接访问长链接。

302 是临时重定向，下次访问短链依然会先访问短链服务，返回 302 后再重定向到长链。

这两种都可以，301 的话，短链服务压力小，不过 302 每次都会先访问短链服务，这样可以记录链接的访问次数等数据。

## base62
base64 就是 26 个大写字母、26 个小写字母、10 个数字、2 个特殊字符，一共 64 个字符。

base62 是去掉了两个特殊字符，一共 62 个字符。