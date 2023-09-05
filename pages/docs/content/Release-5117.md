---
title: '5.1.17'
---

_[此版的更新历史详见 GitHub](https:_github.com/Jermolene/TiddlyWiki5/compare/v5.1.16...v5.1.17)//

## 复原

遇到重大问题后，我们勉强决定[删除支持](https://github.com/Jermolene/TiddlyWiki5/commit/737e9ae4cb136ca3f473624f64142bd83e532b9b)在 v5.1.16 中添加的 [is 运算符](is Operator)的多个子运算符。

## 可用性改进

* [改进](https://github.com/Jermolene/TiddlyWiki5/commit/7468ad7acf1ca2280ad89ee014484928e160f54b) TiddlyWiki 的 "尴尬的红色屏幕" 的外观

## 修正错误

* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/e6466b2c320cdab46a74aa343b6c56c5783e3f94) 添加日志名称中外来空白的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/b95aa6ec6ad51672e9ed26ab94d7fe799698782c) 重复使用"添加日志"的内文集的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/f9be417204695d26d5f458fbc53870b2adb9a372) (和 [这里](https://github.com/Jermolene/TiddlyWiki5/commit/46e8e4343acba876b9540b9fc77a5c85faa10939)) Etag 处理的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/3240) 5.1.16 添加的 [is 运算符](is Operator)的问题
* [复原](https://github.com/Jermolene/TiddlyWiki5/commit/b2173d11ea550ba4a5f2fd89b1388b392e37dd51) 为隐藏预览窗格的默认值
* [修正](https://github.com/Jermolene/TiddlyWiki5/issues/3245) 不正确的插件库位置
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/3226) 动画定时的问题，使用 reveal 小工具，有时导致侧栏不显示
* [修正](https://github.com/Jermolene/TiddlyWiki5/pull/3244) 使用 non-Dat URI 格式保存的问题
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/4c89bbabbe5f5665e92258b560ed7380ae06d9e8) 于注销时，`$:/status/UserName` 的删除

## Node.js Improvements

* [停止](https://github.com/Jermolene/TiddlyWiki5/pull/2893) 于注销时清除 [$:/status/UserName](#%24%3A/status/UserName)
* [修正](https://github.com/Jermolene/TiddlyWiki5/commit/ab5e5795e88892b5687885c8ead8d6959082399b) 尝试使用不符合同步条件的延迟加载条目的问题
* [添加](https://github.com/Jermolene/TiddlyWiki5/commit/2c7f467514cb75aefa87912620575deabde1a530) 支持 `/*\` 样式中继数据注释在 `*.CSS` 文件的起始位置

# 贡献者

[@Jermolene](https://github.com/Jermolene) 感谢此版本贡献者，慷慨地付出他们时间协助改进 TiddlyWiki：

* [@BramChen](https://github.com/BramChen)
* [@BurningTreeC](https://github.com/BurningTreeC)
* [@danielo515](https://github.com/danielo515)
* [@icarito](https://github.com/icarito)
* [@ldorigo](https://github.com/ldorigo)
* [@mklauber](https://github.com/mklauber)
* [@sukima](https://github.com/sukima)
* [@tobibeer](https://github.com/tobibeer)
* [@twMat](https://github.com/twMat)

