[Source](https://youtu.be/HkFlM73G-hk?list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f)

----

1. spaghetti

    初學者在寫javascript的時候，常常會寫出非常不容易維護的麵條式代碼(spaghetti code)，在ES6之前，被廣泛採用解決這問題的方法為模組化(Modular)。

2. Modular Javascript

    模組：
        在模組內完成所有模組內的事情
        沒有全域變數，加快效率（頂多只有一個全域變數給多個模組共用）
        一個模組只做一件事情（通常是以頁面去切割，一個區塊內的事情屬於一個模組）

    結構化程式碼：
        把處理的事情切乾淨(init, add, delete, render ...)
        init就處理初始化資料，render只處理生成html，各司其職

    Dry code：
        快取所有頁面確定需要的元件避免重複搜尋
        例如用$('aaa')，已經確定aaa不會變動，一開始就先把$('aaa')存在某個變數

    避免記憶體溢出：
        所有closure都必須比外層closure更早結束。

    >>> 除了有modular外，另外提供了兩個pattern，進一步的強化modular的需求。

3. revealing: 隱藏非公開的物件

4. pubsub：簡化關係複雜的module之間的code

----

此外，也提供兩組javascript的oop寫法

1. oop/classical_inheritance.js

2. oop/prototype_pattern.js | oop/prototype_pattern2.js
