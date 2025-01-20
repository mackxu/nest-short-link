<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## 笔记
- 302 重定向

## 重定向区分
301 是永久重定向，就是重定向一次之后，下次浏览器就不会再访问短链，会直接访问长链接。

302 是临时重定向，下次访问短链依然会先访问短链服务，返回 302 后再重定向到长链。

这两种都可以，301 的话，短链服务压力小，不过 302 每次都会先访问短链服务，这样可以记录链接的访问次数等数据。