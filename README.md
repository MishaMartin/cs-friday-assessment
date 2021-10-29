Module 7 Project
Introduction
It’s time to practice and solidify the skills you learned in this module.

Independent work

This is an individual assignment. Please do not collaborate with your peers or share your work until the project is reviewed as a class.

Setup
Click here to download the code files you need to for this project.

Navigate to the files on the command line.

Setup the your project by running npm install.

Step 1: Alternative Tools Research
At the beginning of this unit, you used DevOps tools for Continuous Integration and for Real Time Error Monitoring. A big part of working in software is being able to learn about new tools, weigh their different features, and figure out how to get started. So, for this part of the assignment, pretend that you are a DevOps engineer at a company that is trying to learn about possible new tools to use for CI and Monitoring.

Do some internet research and find two new tools to explore– one for Continuous Integration, and one for Real Time Error Monitoring. You cannot use the ones you used earlier this week.

Start a new document (Google Docs or similar) and record the unique value-add, or notable features for each tool. Imagine you were an engineer trying to convince your manager to use each tool. What would you say to convince them?

For each tool, find the Getting Started instructions for how to begin using the tool. Evaluate the quality of these instructions. Is there an easy way to get started with the tool? Is the process well-documented? Are there any special tutorials or sandboxes available to make trying it out or learning the tool easier? Include a summary of how to get started with the tool, helpful links, and any other notable resources for this process.

How long has this tool been around? How popular is it? Summarize the maturity and market share of each tool. To answer these questions, check out any public official Github repos for the tool (are they in active development? what is the date of the earliest commit?), the tool’s public website for any notable mentions of current companies that use the tool, and any other information that will help you determine if each tool is compelling to other companies and how new it is.

When you’re finished, download your report as a PDF and add it to the Github repo you will use for this assignment.

Step 2: Runtime Analysis
In the materials you downloaded at the beginning, there is a file called runtime.js. Read the code in this file carefully. After you have read over the file yourself and made some guesses on what’s happening, hover below to read a summary.

runtime.js Summary

It’s time to run the file! Run the command node runtime.js in the same directory as where the file lives.

In your notes document, take note of the timing result for the extraLargeArray results– comparing when the extraLargeArray is passed to doublerAppend and doublerInsert.

Next, edit the code in runtime.js to obtain timing results for calling the two functions with all of the differently sized arrays– tinyArray, smallArray, mediumArray, largeArray, and extraLargeArray. Notate these in your document in some kind table table so that you can easily compare the different values for the timers in relation to the size of the array that was passed into each function.

Read over the results, and write a paragraph that explains the pattern you see. How does each function “scale”? Which of the two functions scales better? How can you tell?

For extra credit, do some review / research on why the slower function is so slow, and summarize the reasoning for this.

Be sure to include this report in the Github repo for this project.

Step 3: Write Code
Choose at least one of the following problems to attempt in Javascript. Create a new file for your code. When you have finished with your function, leave a code comment with what you believe the runtime of your code to be.

1) Sum Zero
Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

For example:

addToZero([]);
// -> False

addToZero([1]);
// -> False

addToZero([1, 2, 3]);
// -> False

addToZero([1, 2, 3, -2]);
// -> True
2) Unique Characters
Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

For example:

hasUniqueChars("Monday");
// -> True

hasUniqueChars("Moonday");
// -> False
3) Pangram Sentence
A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

Write a function to check a sentence to see if it is a pangram or not.

For example:

isPangram("The quick brown fox jumps over the lazy dog!");
// -> True

isPangram("I like cats, but not mice");
// -> False
4) Longest Word
Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

For example:

findLongestWord(["hi", "hello"]);
// -> 5
Be sure to add this file to your Github repo for this project.

Extra Credit
Attempt the additional problems from Step 3, and include the Big O Runtime as a code comment for each solution.

If you have any extra time, also comment on the space complexity of each solution.