---
title: 'tabs 宏（示例）'
---

<$macrocall $name=".example" n="1"
eg="""<<tabs "SampleTabOne SampleTabTwo SampleTabThree SampleTabFour" "SampleTabOne" "$:/state/tab1">>"""/>

<$macrocall $name=".example" n="2"
eg="""<<tabs "[tag[sampletab]]" "SampleTabTwo" "$:/state/tab2" "tc-vertical">>"""/>

<$macrocall $name=".example" n="3"
eg="""<<tabs "[tag[sampletab]nsort[order]]" "SampleTabThree" "$:/state/tab3" "tc-vertical">>"""/>
