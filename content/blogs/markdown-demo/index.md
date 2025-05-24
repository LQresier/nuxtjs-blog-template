---
title: Markdown样式大全
date: 2023-11-15
description: 展示所有常见的Markdown语法和样式
tags: ["markdown", "教程", "语法"]
---

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
## 文本样式🌧️

**粗体文本**  
*斜体文本*  
~~删除线文本~~  
> 引用🤭  

dsasas`行内代码`  

| Key | Type      | Description |
| --- | --------- | ----------- |
| 1   | Wonderful | Table       |
| 2   | Wonderful | Data        |
| 3   | Wonderful | Website     |

---

## 列表

### 无序列表
- 项目1
- 项目2
  - 子项目1
  - 子项目2
- 项目3

### 有序列表
1. 第一项
2. 第二项
   1. 子项1
   2. 子项2
3. 第三项

## 链接和图片

[百度链接](https://www.baidu.com)  
![示例图片](/blogs/4-post/bryce-canyon.jpg)

## 脚注
这是一个脚注示例[^note]

[^note]: 这里是脚注内容

## 任务清单
- [x] 完成项目配置
- [ ] 编写文档
- [ ] 测试功能

## 代码块

```java
class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}
```

```sql
select * from table where id=1;
```

```go
package main

import "fmt"

import "rsc.io/quote"

func main() {
    fmt.Println(quote.Go())
}
```

```js [file.js]{2} 
export default () => {
  console.log('Code block')
}
```

```
```