# Introduction

This code snippet/project aims to assess my JavaScript skills and problem-solving abilities. The task involves identifying the big o notation of the original function below. To address this, I implemented a JavaScript solution, which I will detail in this document.

# Original Code
```javascript
const sumUnique = (nums) => {
  let sum = 0;
  nums.forEach(num => {
    if (nums.indexOf(num) === nums.lastIndexOf(num)) sum += num;
  });
  return sum;
}
```

# Project Structure

The project structure is straightforward, and it includes the following components:

    index.js: The main JavaScript file containing the solution.
    test.js: The test file to validate the correctness of the solution.

# Approach

My approach to solving this problem involved the following steps:

    I carefully reviewed the problem statement to ensure a clear understanding of the task's requirements and constraints.
    I think there's still some room for optimization.

# Installation

To run this project on your local machine, follow these steps:

Clone the repository to your local machine.


```bash
git clone https://github.com/wesleyguirra/torc-code-snippet.git
```

# Usage
Change the directory to the project folder.

```bash
cd torc-code-snippet
```

Run the test.js using node
```bash
npm test
```

# Challenges

Throughout the development process, I encountered several challenges, such as:

I the beginning I've tried to use the Set which can only have unique values, but as it doesn't count extra appearances I kind of lost a lot of time with it.
Also the fact that I was summing repeated numbers once was very challenging to me, with some search and also asking for other developer help, helps me to come out with the solution (Thanks Karen 😃)

# Conclusion

This developer test allowed me to demonstrate my JavaScript skills and problem-solving capabilities. I thoroughly enjoyed working on this project and addressing the challenges it presented. I'm excited to share my solution and discuss it further.

If you have any questions, feedback, or suggestions, please feel free to reach out to me at [your email address].

Thank you for considering my submission!
