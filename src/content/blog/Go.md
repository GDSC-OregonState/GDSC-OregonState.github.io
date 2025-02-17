---
title: "Go Challenges"
description: "Learn the unique features of Go and build a couple of projects!"
coverImage: "/go.svg"
category: "Language Development"
inDev: False
pubDate: "2025-02-09"
updatedDate: "2025-02-09"
publishDate: "February 9th"
---

# Go: Modern, Multipurpose Language

Go is a programming language designed to offer the speed of systems languages (C, C++, Rust) with the convenience of modern programming (Java, Python, Javascript, etc., etc.). Go does this by prioritizing speed and optimizations, while still having modern features including garbage collection, complete UTF-8 support, a robust standard library, strong internal data structures, generic inputs, robust internal tooling, and robust tooling. 

![Program Language Speed](/gospeed.jpg)

The best way to see Go is to use it in action. These are some good resources for using Go:

Official Docs: [Go Documentation](https://go.dev/doc/)
If you do not have Go installed, please use the following: [Go Playground](https://go.dev/play/)    
Go playground will run your code in the web so you can test it out. 


## Basic Challenges (100 points):

### Go International (10 points) 
Create a script that prints out the phrase: "Go is a cool programming language" in the following languages:

- Mandarin
- Spanish
- English
- Russian
- Turkish
- Japanese
- Arabic
- Hindi

This should only use one call to print, that uses string templating to print new values every single time.

```go
package main

import "fmt"

func main() {
    statement_array := [...]string{"Go 是一种很酷的编程语言", 
                                    "Go es un lenguaje de programación genial", 
                                    "Go is a cool programming language", 
                                    //...
                                    }

    for _, s := range statement_array {
        fmt.Printf("%s\n", s)
    }
}
```


### Go Around, and Around, and Around (30 points)
Create a script that will generate the nth Fibonacci number in the Fibonacci sequence. This should be a **recursive** function that takes in **n** as the input. Print out the 50th Fibonacci character. Here is the general structure you can follow:

```go
package main

import "fmt"

func fibonacci(n int) int {
    if (n == 0) {
        // Return the 0th element of the Fibonacci sequence
    }

    if (n == 1) {
        // Return the 1st element of the Fibonacci sequence
    }

    return //First element + second element 
}

func main() {
    n := 5
    result := fibonacci(n)
    fmt.Printf("The %dth Fibonacci number is %d\n", n, result)
}
```


### Go get the internship (20 points)
Create a script that will generate the nth Fibonacci number in the Fibonacci sequence. This should be a **recursive** function that takes in **n** as the input. Print out the 182nd Fibonacci character. To improve the solution, store past solutions in a data structure. Here is the general structure you can follow:

```go
    package main

    import "fmt"

    var m map[int]int = //Create a map

    func fibonacci(n int) int {
        // Get two values from m[n]
        if ok {
            return val
        }


        m[n] = //Get first element + second element. Same as previous
        return m[n]
    }

    func main() {
        m[0] = 0
        m[1] = 1
        n := 182
        result := fibonacci(n)
        fmt.Printf("The %dth Fibonacci number is %d\n", n, result)
    }
```

### Go, go, go, STOP! (10 points)
Create a script that will start the long, painful, arduous journey of printing output to the screen. To do this, launch it inside of a goroutine. However, use channels to ensure that the task is completed before you print the output.


```go
    package main

    import (
        "fmt"
        "time"
    )

    func long_long(input string, output chan string) {
        time.Sleep(8 * time.Second)
        output <- fmt.Sprintf("Printing your string: %s\n", input)
    }

    func main() {
        input := "Hello world"
        new_string_storage := // Create a channel
        // Start a goroutine of long_long with the correct inputs of (input, new_string_storage)

        time.Sleep(4 * time.Second)
        fmt.Println("Waiting on new string!")

        new_output_string := <-new_string_storage
        fmt.Println(new_output_string)
    }
```


### Pokémon Go! (30 points)
Create a program that counts and stores the count for different Pokémon based on inputs to a function. Be sure to use interfaces properly as your counter input!! This is the skeleton code:


```go
    package main

    import "fmt"

    // Define an interface named "Pokemon"
        GetElement() string
    }

    func makeBulbasaur() Bulbasaur {
        return Bulbasaur{name: "Bulbasaur", hp: 45, element: "Grass"}
    }

    type Bulbasaur struct {
        name string
        hp int
        element string 
    }

    func (blb Bulbasaur) GetElement() string {
        return blb.element
    }

    func (blb Bulbasaur) SleepPowder() string {
        return "Bulbasaur did Sleep Powder!"
    }

    func (blb Bulbasaur) RazorLeaf() string {
        return "Bulbasaur did Razor Leaf!"
    }

    func (blb Bulbasaur) BodySlam() string {
        return "Bulbasaur did Body Slam!"
    }


    func makeCharizard() Charizard {
        return Charizard{name: "Charizard", hp: 78, element: "Fire"}
    }

    type Charizard struct {
        name string
        hp int
        element string
    }

    func (ch Charizard) GetElement() string {
        return ch.element
    }

    func (ch Charizard) FireBlast() string {
        return "Charizard did Fire Blast!"
    }

    func (ch Charizard) Earthquake() string {
        return "Charizard did Earthquake!"
    }

    func (ch Charizard) Slash() string {
        return "Charizard did Slash!"
    }



    type Counter struct {
        Tally map[string]int
        Total int
    }

    func MakeCounter() Counter {
        return Counter {
            Tally: make(map[string]int),
            Total: 0,
        }
    }

    // Create a function for Counter called AddValue that will take in any Pokemon as input
        element := p.GetElement()
        _, ok := c.Tally[element]
        
        if (!ok) {
            c.Tally[element] = 0
        }

        c.Tally[element] += 1
        c.Total += 1
    }



    func main() {
        counter := MakeCounter()
        ch_list := [7]Charizard{}
        for i:=0; i < 7; i++ {
            ch_list[i] = makeCharizard()
        }

        blb_list := [3]Bulbasaur{}
        for i:=0; i < 3; i++ {
            blb_list[i] = makeBulbasaur()
        }

        for _, char := range ch_list {
            counter.AddValue(char)
        }

        for _, bulb := range blb_list {
            counter.AddValue(bulb)
        }

        fmt.Printf("Total number: %d\n", counter.Total)
        
        for key, value := range counter.Tally {
            fmt.Printf("There are %d of types %s\n", value, key)
        }
    }
```



## Medium Challenges (100 points):

For these challenges, there is a good chance that you will not be able to use the Go playground anymore. Instead, you will want to use Go running on your computer, so you can use your computer's networking stack. The Go installation instructions are here:

[How to Install Go](https://go.dev/doc/install)

Now, these are the challenges:

### HTTP, GET & GO (40 points + 20 points):

Use Go to create an HTTP server that can serve a basic HTML webpage. For example, when a user navigates to "http://localhost:8000/", they should get a page that looks like this:

```html
<head>
    <title> Go Website </title>
</head>
<body>
    <div>
        Hello world
    </div>
</body>
```

You can feel free to install and use Gin, which is a framework that makes it a little bit easier to create HTTP servers. However, if you want 20 extra points, you can create a server by just using Go's "http" library, along with goroutines to handle multiple requests simultaneously.


### Go Template (30 points):

Use the previous HTTP server to dynamically create an HTML page by using Go's templating features. You should look in the "text/template" library to create a page that is filled in with values based on what is stored in the server. You can just use a global string variable, but the template could be as basic as this template:


```html
<head>
    <title> Go Website </title>
</head>
<body>
    <div>
        Hello, {{name}}
    </div>
</body>
```



### Cryp-Go (30 points):

Use the Go "crypto" library to do the following tasks for a given string:

Encrypt the string using the industry standard **AES-GCM** mode and create a SHA256-HMAC by calculating SHA256({Key} + {Encrypted Text}). Print these outputs in the following format:

- Your encrypted text is: {base64 output}
- Your HMAC is: {base64 HMAC}
- Your complete output is: {base64 output + base64 HMAC}

   
  
  
  
  
  
## Hard Challenges (100 points):

### Go Sockets (50 points):

Create a web socket server that can take in websocket connections and instantly send them to websocket clients. The server must be written in Go. To make this easier, install "github.com/gorilla/websocket". Additionally, your server only needs to mediate the connections between two clients, not more than that. This text below is an example websocket web client you can use to help finish the assignment.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WebSocket Chat</title>
</head>
<body>
    <h2>WebSocket Chat</h2>
    <input type="text" id="message" placeholder="Enter message">
    <button onclick="sendMessage()">Send</button>
    <div id="messages"></div>
    
    <script>
        const socket = new WebSocket('ws://localhost:8080'); // Change to your WebSocket server URL

        socket.onopen = () => {
            console.log('WebSocket connected');
        };

        socket.onmessage = (event) => {
            const messagesDiv = document.getElementById('messages');
            const messageElement = document.createElement('p');
            messageElement.textContent = 'Received: ' + event.data;
            messagesDiv.appendChild(messageElement);
        };

        socket.onclose = () => {
            console.log('WebSocket disconnected');
        };

        function sendMessage() {
            const input = document.getElementById('message');
            const message = input.value;
            socket.send(message);
            input.value = '';
        }
    </script>
</body>
</html>
```



### Go-currency (50 points):

Create a file with several lines. Iterate through the file with Go's "bufio", "fmt", and "os" libraries to read the lines. On each line, spawn a go-routine that will do some operation to that line before saving the output to an array. Once the operation is finished, go through the array and print out every changed string.


For example in a text file with these lines:

Hello  
Howdy  
G'day  
Morning  


Try removing the first two letters:

llo  
wdy  
day  
rning  