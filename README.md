# odin project 
👉 [demo](https://jaredycw.github.io/calculator/)

`Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 * 3 = should yield 42. An example of the behavior we’re looking for would be this student solution.`

It made me confused.
I think I'm too follow the Order of operations.

12+7-5x3 = 42
12+7-(5x3) = 19-15 = 4


We should handle the mut/divide first, then plus and minus. Isn't it?
Although some are different.

`Different calculators follow different orders of operations.[2] Many simple calculators without a stack implement chain input, working left to right without any priority given to different operators, give a different result from that given by more sophisticated calculators. For example, on a simple calculator, typing 1 + 2 × 3 = yields 9, while a more sophisticated calculator will use a more standard priority, so typing 1 + 2 × 3 = yields 7.`

