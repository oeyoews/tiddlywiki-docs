---
title: 'datauri 宏（示例）'
---

<$macrocall $name=".example" n="1"
eg="""<$set name="EXAMPLE" value="123.$(EXAMPLE2)$.789">
<$set name="EXAMPLE2" value="456">

<<dumpvariables>>

</$set>
</$set>"""/>
