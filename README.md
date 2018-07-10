# Quiz: TDD and Functional Array Methods

**Use standard lab submission procedure that you have used for past 9 weeks: fork, clone, work, push, PR!**

## Instructions

Write a **tested** (mocha unit tested) library function (a `function` exported from a module/file)
that takes an array of numbers (you can assume valid input)
and returns a new array that contains the square (`n * n`, or `Math.pow(n, 2)`) of all of
the odd input numbers, but only those squares that are greater than 24.

Test Case:

Input | Output
---|---
[2, 3, 9, 12, 8, 5, 7] | [81, 25, 49]

**NOTE: You are _not_ being asked to implement the array methods like we did on first lab. You are using normal, built-in array methods and combining them to achieve a specific purpose!**

## Repo

Included files:

* `README.md` (this file)
* `.travis.yml`
* `.gitignore`
* `.eslintrc`

You will need to:

* Create your `package.json`!
* Install dev dependencies
* Organize project
* Create `scripts`,  **please make sure to:**
    1. `npm i eslint -D` to install eslint
    1. add `"pretest": "eslint ."` to your `package.json` scripts so that linting runs on travis!

Quiz is open book, internet, etc...

**Goal is have PR with passing travis by end of allotted time.**

## Rules

1. **Make an initial commit when you start your work** (HINT: Open your PR!)
1. You have **30 minutes** to complete what you can. You may not finish everything or get things exactly right (and you don't need to do so to get a passing score). Do focus on quality of what you complete and demonstrating familiarity with the development setup and process we have been using.
1. You must complete this work on your own within the allotted time
    * Keep a good commit history to show progression of work.
    * You **need to manage your time** to have PR and last commit before deadline (remember, you can
    open PR and take advantage of travis checking your commits by pushing frequently).
1. You may use normal resources that a software developer uses on the job (docs, google, your prior work)
1. Use general best practices and common sense:
    * **Highly** recommended to implement what is needed, no more no less
    * Blind boilerplate or copying-in chunks of code will **not** be helpful and will likely create more work. Seriously, this is the one of the best ways to fail the quiz as you risk wasting your time trying to getting code (that never worked on this project) to work.
    * **Focus effort on requirements of the lab**. Seriously, read the [Instructions] section _more than once_ paying attention to detail.
1. Total possible points are 40. You will be graded out of 30 points
1. Demonstrate what you can accomplish by having **passing travis ci** and showing working code.
