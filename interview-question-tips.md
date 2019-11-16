## Interview Question Tips

**Q. What happens if I call a variable before assigning it?**

A. The output will be `undefined`, because it is not declared yet.

**Q. What happens if you call a function before the compiler sees it? For example, if greetings is called in line 21 but `greetings()` is defined at lline 56.**

A. It is done through hoisting.
<ul>
<li>JS takes a quick scan and checks if there is anything special that is important. It attributes an **function declaration** as important and moves it to the top (hoist to the top)</li>
<li>However, **variables** declared are remembered at the same line and ARE NOT hoisted</li>
</ul>

**Q. What is the difference between `var` and `let`?**

A. `var` and `let` are both used for variable declaration in javascript but the difference between them is that `var` is *function scoped* and `let` is *block scoped*.
It can be said that a variable declared with `var` is **_defined throughout the program_** as compared to `let`.

It is recommended to use `let` as it is less scope specific.