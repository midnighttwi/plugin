# 折梅听雪录主题 · `@local/dsh-theme-plum-snow`

DeepSeek Harness Web GUI 主题：以《无期迷途》新春活动「折梅听雪录」为题。
**个人自用**，官方素材（局徽 / 角色小图 / 背景参考）仅本地内联，不对外分发。

## 现在由什么组成

| 层 | 内容 | 落位 |
| --- | --- | --- |
| 配色 | 暖墨（夜雪）/ 宣纸（雪霁）双套令牌 | `ctx.theme.overrideTokens` |
| 背景 | 两张水墨山庄图（深浅各一），铺在 `body` 上 | 样式表（内联 WebP） |
| 装裱 | 金线双框 + 四角回纹 + 右缘竖排题签 | `shell.overlay` |
| 落款 | 三枚角色小图 + 楷书题名 + 朱印 + MBCC 局徽 | `conversation.composer.dock` |
| 落雪 | canvas，14% 梅瓣，可关 | `shell.overlay` |
| 设置 | 「主题」「落雪」两个开关 | `settings.general.item` |

## 素材来源

- 背景：ComfyUI，`3Guofeng3_v34` + `shukezouma_v1_1`(0.7) + `paseer…山海`(0.6) + `EasyNegative`，768×512，见 `../workflows/`。
- 局徽：`reference/MBCC_ICON.jpg`，亮度转 Alpha 去黑底。
- 角色小图：`霁川.jpeg`（实为 WebP）、`啸风.webp`、`阿依果.webp`，圆形裁切。

构建：`design/build_assets.py` 生成 base64 → `design/build_plugin.py` 注入 `client.template.js` → 产出 `client.js`（约 250KB，含全部图片）。

## 使用

- 设置 → 通用 → 折梅听雪录：关「主题」收起配色与装饰，关「落雪」只停动画。
- 偏好存 `localStorage['dsh-theme-plum-snow']`。
- 换深浅：设置 → 外观；背景图随明暗自动切换。

## 已知限制

- 背景铺在 `body`；若宿主主区不透明，只能透过半透明底色看到约 20%。必要时改用 overlay 水印层。
- 令牌只能改 14 个语义色，组件内部的细节色（气泡、工具卡描边）以宿主实现为准。
