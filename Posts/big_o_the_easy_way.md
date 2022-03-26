In Computer Science there are a number of ways to solve a single problem. The collection of code that solves a problem is called an algorithm. So among those algorithms how do you find which one is best to solve that one problem? Here’s another way to think this, you need to go from a city A to B you can take a number of routes available but which one should you choose? The answer is the one that takes the least time and money. It is the same for our algorithm problem we choose that algorithm that takes the least time and less space. 

The time required by an algorithm to run is measured in a different way in CS than in real life. In CS time is mostly refer as Time Complexity. **And the time complexity is defined as the number of steps that the algorithm performs to solve the problem.** And is denoted as **O(n)** where n is the number of steps taken by the algorithm. 

## So, How To Find Time Complexity of Algorithm

Lets learn through examples:

The following code multiply the given number x by 10 and return the result

```jsx
const MultiplyBy10 = (x) => {
	const multiple = x*10;         // Step 1
    return multiple;             // Step 2
}
```

There is two-step involved in the algorithm so the time complexity is O(2) but we write it as O(1). But why? 

There is are some rules to write the Big O among them one is related to picking that if there is any constant step taken by an algorithm like 1,2,3,... we take it as a constant time which is O(1).

Let's see more examples:

```jsx
// This is the function to find whether the given element is on the list or not i.e. Simple Search
// It return element index in the array if the element is present in the array otherwise it returns false
const FindElement = (element, list) => {
    for (let i =0; i < list.length; i++){
        if (element === list[i]) {
            return i;
        }
    }
    return false;
}
```

The code example above is the simple search or in CS it is called Linear Search as it checks each item from start to finish.

Let's pass an array and an element we want to find in an array and analyze for finding its Time Complexity. We will call the function by providing the following array and element:

```jsx
// Calling FindElement to find index of 3 in array [1,2,3,4,5,6] which is of length
FindElement(3,[1,2,3,4,5,6]);
```

so as seen in the code there is the for loop which runs as the value of i from 0 to the point where it finds the element and if didn't find it runs equal to the length of the array. In our case, it runs three times and finds the element, and returns it.

But there is a second rule for finding Time Complexity that is we defined time complexity for the worst case. That means in this particular case we define time complexity for finding elements as if it is the last element of the array. So from our analysis above it will take the step equal to the length of an array. Which is O(n) as n is the length of an array. It means its steps increased as fast as array size did.

There is a mathematical function called log which arises frequently in finding Big O. Log are 2 bases generally in CS. The $Log_232$ is the same as saying how many 2s do we multiply to get 32? the answer is 5 so $Log_232  = 5$. Logs are opposite of [exponential.](https://en.wikipedia.org/wiki/Exponential_function)

The image below from [GeekforGeek](https://www.geeksforgeeks.org/) may help you visualize more about the different run time complexity of the algorithm 

![https://media.geeksforgeeks.org/wp-content/cdn-uploads/mypic.png](https://media.geeksforgeeks.org/wp-content/cdn-uploads/mypic.png)