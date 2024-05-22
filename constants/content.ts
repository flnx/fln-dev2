import { Blog } from "@/types/blogType";

export const content: Blog[] = [
  {
    id: 1,
    title: "JavaScript Closures: A Beginner's Guide",
    slug: "JavaScript-Closures-A-Beginners-Guide",
    featured: false,
    image: {
      url: "/images/blog/closures.jpeg",
      alt: "A woman looking at the text 'Javasript Closures' and getting scared",
      width: 1187,
      height: 700,
    },
    categories: "javascript",
    date: "2024-01-24",
    readTime: 4,
    description:
      'JavaScript closures are the "magic" that lets functions remember and access their outer scope variables, creating a dynamic link. This magical bond gives the functions power to remember and manipulate data.',
    keywords:
      "JavaScript closures, JavaScript closure, master closures in javascript, understand scope in javascript, closures, closure, lexical scope javascript, global scope js, local scope js",
    preventIndexing: false,
    seo: {
      metaTitle: "JavaScript Closures: A Beginner's Guide",
      metaDescription:
        "Discover javascript closures and how they operate in a beginner-friendly manner",
    },
    content: `<h3><strong>What is a Closure?</strong></h3><p>JavaScript closures are the "magic" that lets functions remember and access their enclosing (outer) scope variables, creating a dynamic link - even after the enclosing (outer) function has finished executing. This magical bond gives the functions power to remember and manipulate data.</p><p>That means that even though the outer function is no longer around, the inner function can still access and modify the variables that were defined in the outer function.</p><h3>Here is an example:</h3><pre><code class="language-javascript">function makeCounter() {
      // Create a counter variable inside the outer function
      let counter = 0;
    
      // Create an inner function that increments the counter and returns the new value
      function increment() {
        counter++;
        return counter;
      }
    
      // Return the inner function
      return increment;
    }
    
    // Create a counter object
    const counter = makeCounter();
    
    // Call the counter function twice to increment the counter
    console.log(counter()); // Output: 1
    console.log(counter()); // Output: 2
    </code></pre><p>The <code>makeCounter()</code> function creates an inner function<i><strong> </strong></i><code>increment()</code> that increments the counter variable inside the outer function. Even though the <code>makeCounter()</code> function has finished executing, the <code>increment()</code> function can still access the counter variable because it was captured during the creation of the closure.</p><p>&nbsp;</p><h3><strong>Understanding Scope and Lexical Scoping</strong></h3><p>Before going forward, let’s see what exactly “scope” means.</p><ul><li><strong>Scope</strong> refers to the context in which variables and functions are declared and accessed</li><li><strong>Scope</strong> determines the visibility and accessibility of these variables and functions throughout your code</li></ul><p>T<strong>here are two main types of scope:</strong></p><ol><li><strong>Local scope:</strong> Variables declared inside a function or block have local scope. They are only accessible within that specific function or block.</li><li><strong>Global scope:</strong> Variables declared outside any function or block have global scope. They can be accessed from anywhere in the code, including within functions.</li></ol><p><strong>Lexical Scoping</strong></p><p><i>Note: Okay. This is about to get as confusing as a cat trying to walk on a keyboard, but I’ll do my best to translate!</i></p><p>Lexical scope ensures that functions can be reach out to variables in their containing scopes. That allows them to use variables from their parent functions (or the global scope).</p><p>It is a way of determining the scope of a variable based on where it is declared. JavaScript uses lexical scoping to ensure that variables are not accessible from outside their declared scope. <i>(This helps to prevent errors and make code more predictable)</i></p><p>Where a variable is declared in the code affects where it can be accessed. You decide where to place the variables. And that decision dictates where they will be accessible throughout your code.</p><ul><li>The scope of a variable is determined by its location in the source code.</li><li>The visibility and accessibility of a variable are defined by where it is declared and not by where it is executed.</li></ul><pre><code class="language-javascript">function outerFunction() {
      let x = 10; // x is a local variable
    
      function innerFunction() {
        console.log(x); // This is allowed because x is in the outerFunction's scope
    
      // The lexical scope of innerFunction is the outerFunction function. 
        // This means that innerFunction can access variables that are declared within the outerFunction function...
        // ...or in its parent scope, which is the global scope.
      }
    
      innerFunction();
    }
    
    outerFunction();
    </code></pre><p>Here the <code>innerFunction()</code> can access the x variable because it is declared in the outer function's scope. This is even though the <code>innerFunction()</code> is nested inside the <code>outerFunction()</code>.</p><p>&nbsp;</p><h3><strong>How Closures Capture Variables</strong></h3><p>Closures capture variables from their enclosing scope by "remembering" the environment in which they were created (through the mechanism of lexical scope).</p><p>When a function is defined within another function, the inner function forms a closure and retains access to the variables of its outer (enclosing) function, even after the outer function has finished execution.</p><p>This ability to retain access to variables is what makes closures so powerful.</p><p>&nbsp;</p><h3><strong>Applications of Closures</strong></h3><p>Closures find their applications in various scenarios, including:</p><ul><li><strong>Private Variables:</strong> Closures can be used to create private variables, which are only accessible within the closure itself. This allows for better encapsulation of data and code.</li><li><strong>Memoization:</strong> Closures can be used to cache function results, improving performance when repeatedly calling the same function with the same input.</li><li><strong>Callbacks and Event Handling:</strong> Closures can capture data and functions within callback functions, enabling flexible and reusable event handling mechanisms.</li></ul>`,
  },
  {
    id: 2,
    title: "JavaScript Hoisting Explained",
    slug: "JavaScript-Hoisting-Explained",
    featured: true,
    image: {
      url: "/images/blog/hoisting.jpg",
      alt: "Hoisting explained text and a person next to it, trying to lift a heavy object with a stick",
      width: 1280,
      height: 720,
    },
    categories: "javascript",
    date: "2024-01-20",
    readTime: 5,
    description:
      "Hoisting refers to the specific behavior of the JS interpreter, where variables and function declarations are moved to the top of their containing scope during the compile phase, before the code has been executed.",
    keywords:
      "JS Hoisting. What is hoisting in JavaScript. How hoisting works in javascript. JavaScript hoisting. Function hoisting. Variable hoisting.",
    preventIndexing: false,
    seo: {
      metaTitle: "JavaScript Hoisting Explained",
      metaDescription:
        "JavaScript hoisting explained with examples (beginner friendly)",
    },

    content: `<h2><strong>What is Hoisting?</strong></h2><p>Hoisting refers to the specific behavior of the JS interpreter, where variables and function declarations are moved to the top of their containing scope during the compile phase, before the code has been executed.</p><p>It's important to note that only the declarations are hoisted not the initializations. This means if a variable is declared and initialized after using it, the variable will be <code>undefined</code>, because only the declaration was hoisted to the top - not the initialization.</p><p>&nbsp;</p><h2><strong>Variable Hoisting</strong></h2><p>Let's explore how hoisting works in two scenarios: the traditional way using var and the modern way using ES6 declarations (<code><strong>let</strong></code> and <code><strong>const</strong></code>).</p><p><strong>Traditional Hoisting with var</strong></p><p>In the good ol’ days, the primary way to declare variables was using the <code>var</code> keyword.</p><p>When a variable is declared using <code>var</code>, it gets hoisted to the top of its function or global scope (note that while the declarations are hoisted, the initializations are not. This means if you try to use a variable before it is initialized, you will get a result of <code>undefined</code>.</p><p>For example:</p><pre><code class="language-plaintext">console.log(message); // undefined
    var message = "Hello, hoisting!";
    console.log(message); // Hello, hoisting!
    </code></pre><p>In the example above, even though I’m trying to log the message variable before its declaration, JavaScript hoists the declaration to the top, making it <code>undefined</code> at the first log statement and then assigning the value later.</p><blockquote><p>⚠️ This behavior can lead to unexpected results and bugs, especially if you're not aware of how hoisting works.</p></blockquote><p><strong>Modern Hoisting with ES6 </strong><code><strong>let</strong></code><strong> and </strong><code><strong>const</strong></code></p><p>The <code><strong>let</strong></code> and <code><strong>const</strong></code> also have a hoisting behavior, but it's slightly different from <code>var</code>.</p><p>When a variable is declared using <code>let</code>, it gets hoisted to the top of the block, but it's not initialized. This means that you cannot access the value of a variable until it's reached in the code (you’ll get <code>Reference Error</code>).</p><p>The <code>const</code> variable means that it contains a constant value and it can’t be updated / re-declared.</p><ul><li><code>const</code> declarations are hoisted too but they are not initialized (just like <code>let</code>).</li></ul><p>Unlike var, the let and <code>const</code> declarations have block-level scope.</p><pre><code class="language-plaintext">let cherryStatus = "ripe";
    let quantity = 5;
    
    if (quantity &gt; 3) {
        let message = "pick cherries!";
        console.log(message); // "pick cherries!"
    }
    
    console.log(message); // ReferenceError: message is not defined
    </code></pre><p>Here, I am trying to access message outside the block where it was declared. But as a result I’m getting an error due to the block-scoping nature of the <code>let</code> keyword, which prevents the variable from being accessible outside the block in which it’s defined.</p><p>&nbsp;</p><p>Another example with <code>let</code>:</p><pre><code class="language-plaintext">console.log(message); // ReferenceError: Cannot access 'message' before initialization
    let message = "Hello, ES6 hoisting!";
    console.log(message); // Hello, ES6 hoisting!
    </code></pre><p>In this case, trying to access the message variable before its declaration results in a <code>ReferenceError</code>. The variable is hoisted to the top of its block scope, but it is not initialized until the declaration statement.</p><p>Similarly, using <code><strong>const</strong></code> will also result in a <code>ReferenceError</code> if accessed before declaration:</p><pre><code class="language-plaintext">console.log(pi); // ReferenceError: Cannot access 'pi' before initialization
    const pi = 3.14159;
    console.log(pi); // 3.14159</code></pre><p>&nbsp;</p><blockquote><p>💡 <i>When attempting to access a </i><code><i><strong>let</strong></i></code><i> or </i><code><i><strong>const</strong></i></code><i> variable before its declaration, a reference error occurs due to the presence of the temporal dead zone (TDZ)</i></p></blockquote><p>&nbsp;</p><h2><strong>The temporal dead zone</strong></h2><p>The Temporal Dead Zone (TDZ) in JavaScript refers to the period between the entering of scope and the point where a variable is declared. During this temporal dead zone, if you try to access the variable before its declaration, you will get a <code>ReferenceError</code>. This concept is particularly associated with the <code>let</code> and <code>const</code> declarations in ECMAScript 6 (ES6) and later..</p><p>&nbsp;</p><p><strong>Here’s an example:</strong></p><pre><code class="language-plaintext">function example() {
      // TDZ for 'a' starts here
      console.log(a); // ReferenceError: Cannot access 'a' before initialization
      // TDZ for 'a' ends here
      let a = 42;
      console.log(a); // 42
    
      if (true) {
        // TDZ for 'b' starts here
        console.log(b); // ReferenceError: Cannot access 'b' before initialization
        // TDZ for 'b' ends here
        let b = 7;
        console.log(b); // 7
      }
    
      // TDZ for 'c' starts here
      console.log(c); // ReferenceError: Cannot access 'c' before initialization
      // TDZ for 'c' ends here
      const c = 99;
      console.log(c); // 99
    }
    
    example();
    </code></pre><p><strong>Key Differences and Best Practices</strong></p><ul><li><strong>Scope:</strong> var has function-level, <code>let</code> and <code>const</code> have block-level scope, reducing unintended side effects.</li><li><strong>Hoisting:</strong> var hoists the entire declaration, often causing <code><i>undefined</i></code> initial value. <code>let</code> and <code>const</code> hoist only declaration, accessing them before results in ReferenceError.</li><li><strong>Reassignment:</strong> <code>const</code> can't be reassigned, enhancing predictability and maintainability.</li></ul><p>&nbsp;</p><p>Modern declarations (<code>let</code> and <code>const</code>) mitigate traditional var hoisting issues and align with best practices.</p><p>&nbsp;</p><h2><strong>Function Hoisting</strong></h2><p>Function declarations are also hoisted in JavaScript, which means you can use a function before it's declared in your code.</p><p>This is different from variable hoisting, because for functions, both the declaration and the function body are hoisted. Here's an example:</p><pre><code class="language-plaintext">console.log(myFunction()); // output: "Hello, World!"
    function myFunction() {
      return "Hello, World!";
    }
    
    </code></pre><p>In this case - <code>myFunction()</code> is called before it's declared, but the code still works because of function hoisting.</p><p>Just like with variables, the function declaration - <code>myFunction()</code> is hoisted to the top, allowing us to call the function before its actual declaration.</p><p>Behind the scenes, the code is interpreted like this:</p><pre><code class="language-plaintext">function sayHello() {
      console.log("Hello, hoisting!");
    }
    
    sayHello(); // Output: Hello, hoisting!
    
    </code></pre><h2>Conclusion</h2><p>In conclusion, JavaScript hoisting is a unique feature that can cause some unexpected results if not fully understood. By being aware of how JavaScript hoists variables and functions, you can write cleaner and more predictable code. The key takeaways are that <code>var</code> and <strong>function declarations</strong> are hoisted to the top of their scope and <code>let</code> and <code>const</code> are hoisted to the top of their block but are not initialized until their declaration is encountered in the code.</p>`,
  },
  {
    id: 3,
    title: "Type Coercion in JavaScript",
    slug: "Type-Coercion-in-JavaScript",
    featured: false,
    image: {
      url: "/images/blog/coercion.png",
      alt: "Type Coercion text and some JS code around it",
      width: 1680,
      height: 882,
    },
    categories: "javascript",
    date: "2024-01-24",
    readTime: 5,
    description:
      "Type coercion (or typecasting) is a language's ability to automatically convert data types. While powerful, this feature can be a bit confusing for a newcomer.",
    keywords: "Type Coercion in JavaScript",
    preventIndexing: false,
    seo: {
      metaTitle: "Type Coercion in JavaScript",
      metaDescription:
        "Type Coercion in JavaScript explained with a lot of examples",
    },
    content: `<h2>What is <strong>Type Coercion</strong></h2><p>Type coercion (or typecasting) is a language's ability to automatically convert data types.</p><p>Let’s see the basics:</p><pre><code class="language-plaintext">const num = 4;
    const str = '2';
    console.log(num + str);  //output: '42'</code></pre><p>Here <code>num</code> is implicitly converted to a string and then concatenated with <code>str</code> .</p><p>When you use the <code>+</code> operator with a number and a string, JavaScript performs type coercion, which results <code>42</code> .</p><p>This behavior is an example of type coercion in JavaScript, where values are automatically converted from one data type to another when an operation expects a different type.</p><h2>Types of Coercion</h2><p>Type coercion can be categorized into two main types:</p><h3><strong>Implicit</strong></h3><ul><li>Happens automatically during operations</li><li>Can sometimes lead to unexpected results</li><li>For example - when adding a string and a number, JavaScript implicitly coerces the number to a string</li></ul><p><strong>Some examples with Implicit Coercion:</strong></p><pre><code class="language-plaintext">let isTrue = "5" == 5; // isTrue is true (loose equality, coerces types)
    // The loose equality (==) operator performs implicit coercion..
    // so even though num is a number and str is a string, they are considered equal</code></pre><pre><code class="language-plaintext">let result = "5" + 3; // result is "53" (string concatenation)</code></pre><pre><code class="language-plaintext">let total = "10" - 5; // total is 5 (string "10" coerced to a number)</code></pre><pre><code class="language-plaintext">let age = 25;
    let message = "I am " + age + " years old.";
    console.log(message); // Outputs: "I am 25 years old."
    
    // The number age is implicitly coerced into a string when it is concatenated with the string</code></pre><pre><code class="language-plaintext">let x = 10;
    let y = "5";
    if (x &gt; y) {
      console.log("x is greater than y.");
    } else {
      console.log("x is not greater than y.");
    }
    
    // Here the string y is implicitly coerced into a number during the comparison</code></pre><h3><strong>Explicit</strong></h3><ul><li>Occurs when you intentionally convert a value from one type to another</li><li>Done using built-in functions or by writing custom conversion logic</li><li>Provides more control over the conversion process</li></ul><p><strong>And some more examples with Explicit Coercion</strong></p><pre><code class="language-plaintext">let stringValue = Number("42"); // 42
    let nonNumericString = Number("Hello"); // NaN
    
    let undefinedValue = Number(undefined); // NaN
    let nullValue = Number(null); // 0
    let trueValue = Number(true); // 1
    let falseValue = Number(false); // 0
    let objectValue = Number({ key: "value" }); // NaN
    let symbolValue = Number(Symbol("mySymbol")); // Throws TypeError
    let functionValue = Number(function() { /* function body */ }); // NaN</code></pre><pre><code class="language-plaintext">let stringNumber = String(123); // "123"
    let undefinedValue = String(undefined); // undefined
    let nullValue = String(null); // null
    let booleanValue = String(true); // "true"
    let booleanValue = String(false); // "false"
    let stringValue = String("Yee claw!"); // "Yee claw!"
    let objectValue = String({ key: "value" }); // "[object Object]"
    let symbolValue = String(Symbol("mySymbol")); // "Symbol(mySymbol)"
    let functionValue = String(function() { /* function body */ }); // "function () { /* function body */ }"</code></pre><pre><code class="language-plaintext">let booleanValue = Boolean(7); // true
    
    // Rule of thumb for Boolean Conversion
    
    // When explicitly converting values to boolean using the Boolean() function or relying on the truthiness/falsiness of values in a boolean context (such as in an if statement), here's a general guide:
    
    // Falsy Values:
    // false (boolean false)
    //  0 (numeric zero)
    // "" (empty string)
    // null
    // undefined
    // NaN
    
    // Truthy Values:
    
    // true (boolean true)
    // Any non-zero number (positive or negative)
    // Non-empty strings
    // Objects (including arrays and functions)</code></pre><pre><code class="language-plaintext">let fruits = ["apple", "banana", "orange"];
    let fruitsString = fruits.toString();
    console.log(fruitsString); // Outputs: "apple,banana,orange"</code></pre><pre><code class="language-plaintext">let csvString = "apple,banana,orange";
    let fruitsArray = csvString.split(",");
    console.log(fruitsArray); // Outputs: ["apple", "banana", "orange"]</code></pre><pre><code class="language-plaintext">let numericString = "42";
    let integerValue = parseInt(numericString);
    console.log(integerValue + 8); // Outputs: 50</code></pre><pre><code class="language-plaintext">let floatString = "3.14";
    let floatValue = parseFloat(floatString);
    console.log(floatValue + 1); // Outputs: 4.14</code></pre><pre><code class="language-plaintext">let value = 42;
    console.log(typeof value); // Outputs: "number"
    
    value = "Hello";
    console.log(typeof value); // Outputs: "string"
    
    // The typeof operator implicitly coerces the variable into a string representation of its type.</code></pre><h2>Bonus:</h2><p>I came across a post on <a href="http://javascript.info/">javascript.info</a> where someone was puzzled about why <code>4 + 5 + "px"</code> results in <code>"9px"</code>, while <code>"$" + 4 + 5</code> gives <code>"$45"</code>.</p><p>The explanation provided by another user <u>(Pratik Singh)</u> was spot-on:</p><p><i>“<strong>The order of evaluation of an expression is from "left to right" incase the operators are of same priority</strong>. So in the above case it will be evaluated as shown below:</i></p><p><code>4 + 5 + "px" ==&gt; (4+5) +"px" ==&gt; 9 + "px" ==&gt; 9px</code></p><blockquote><p>ℹ️ Explanation: since both are addition i.e of same priority(BODMAS rule) therefore left one will be executed first and that results into <code>9</code> and then <code>9 + "px"</code> will be evaluated which yields <code>9px</code>.</p></blockquote><p><code>"$" + 4 + 5 ==&gt;"$45"</code></p><p><i>Explanation: since again both operations are addition so left one will be executed first which results into </i><code><i>"$4" + 5</i></code><i> and then this is evaluated which then becomes </i><code><i>"$45"</i></code><i>.</i></p>`,
  },
];

// structuredData: {
//   "@type": "Article",
//   "image": "/images/blog/closures.jpeg",
//   author: {
//     name: "Kaloyan Georgiev",
//     "@type": "Person",
//   },
//   "@context": "https://schema.org",
//   headline: "JavaScript Closures: A Beginner's Guide",
//   keywords: [
//     "JavaScript closures",
//     "JavaScript closure",
//     "Closure",
//     "Closure in JavaScript",
//     "beginner's guide",
//     "scope in JavaScript",
//     "lexical scoping",
//     "clean code",
//     "efficient code",
//     "private variables",
//     "memoization",
//     "callbacks",
//     "learning closures",
//     "JavaScript programming",
//     "coding for beginners",
//   ],
//   publisher: {
//     name: "FLN Dev",
//     "@type": "Organization",
//   },
//   description:
//     "Discover javascript closures and how they operate in a beginner-friendly manner",
//   datePublished: "2024-01-20",
//   mainEntityOfPage: {
//     "@id": "URL_to_article_page",
//     "@type": "WebPage",
//   },
// },
