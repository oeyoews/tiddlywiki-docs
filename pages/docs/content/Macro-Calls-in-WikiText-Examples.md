---
title: '宏调用（示例）'
---

\define sayhi-example-1() <<sayhi>>
\define sayhi-example-2() <<sayhi 疯面仔>>
\define sayhi-example-3() <<sayhi "唐老鸭" 狄斯奈乐园>>
\define sayhi-example-4() <<sayhi "米老鼠" "老鼠屋">>
\define sayhi-example-5() <<sayhi name:'米妮' address:[老鼠屋](#%E8%80%81%E9%BC%A0%E5%B1%8B)>>
\define sayhi-example-6() <<sayhi address:"嘎嘎塔" name:"唐老鸭">>

\define sayhi-example-7()
<<sayhi "米老鼠" """"老鼠屋",
啮齿道,
吱吱市,
大鼠国""">>
\end

<$importvariables filter="$:/editions/tw5.com/macro-examples/say-hi">
<$codeblock code={{$:/editions/tw5.com/macro-examples/say-hi}}/>
<$macrocall $name=".example" n="1" eg=<<sayhi-example-1>>/>
<$macrocall $name=".example" n="2" eg=<<sayhi-example-2>>/>
<$macrocall $name=".example" n="3" eg=<<sayhi-example-3>>/>
<$macrocall $name=".example" n="4" eg=<<sayhi-example-4>>/>
<$macrocall $name=".example" n="5" eg=<<sayhi-example-5>>/>
<$macrocall $name=".example" n="6" eg=<<sayhi-example-6>>/>
<$macrocall $name=".example" n="7" egvar="sayhi-example-7"/>
</$importvariables>
