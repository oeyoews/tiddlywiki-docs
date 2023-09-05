---
title: 'resolvepath 宏（示例）'
---

<$macrocall $name=".example" n="1" eg="""<<resolvepath "./backup" "http://example.com/store.php">>"""/>
<$macrocall $name=".example" n="2" eg="""<<resolvepath "backup" "http://example.com/store.php">>"""/>
<$macrocall $name=".example" n="3" eg="""<<resolvepath "../backup" "http://example.com/store.php">>"""/>
<$macrocall $name=".example" n="4" eg="""<<resolvepath "../jpg/Motovun_Jack.jpg" "http://example.com/resources/images/png/">>"""/>
<$macrocall $name=".example" n="5" eg="""<<resolvepath "../jpg/../png/Motovun_Jack.png">>"""/>
<$macrocall $name=".example" n="6" eg="""<<resolvepath "jpg/Motovun_Jack.jpg">>"""/>
