## Interview Question Tips

**Q. What happens if I call a variable before assigning it?**

A. The output will be `undefined`, because it is not declared yet.

**Q. What happens if you call a function before the compiler sees it? For example, if greetings is called in line 21 but `greetings()` is defined at lline 56.**

A. It is done through hoisting.
<ul>
<li>JS takes a quick scan and checks if there is anything special that is important. It attributes an **function declaration** as important and moves it to the top (hoist to the top)</li>
<li>However, **variables** declared are remembered at the same line and ARE NOT hoisted</li>
</ul>