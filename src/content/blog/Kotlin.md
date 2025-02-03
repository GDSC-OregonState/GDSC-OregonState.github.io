---
title: "Kotlin Fundamentals"
description: "Learn Kotlin basics and build a multiplatform project!"
coverImage: "/kotlin.svg"
category: "Multiplatform"
inDev: False
pubDate: "2025-02-02"
updatedDate: "2025-02-02"
publishDate: "February 2nd"
---

# Kotlin: Concise. Multiplatform. Fun.

Kotlin is a powerful language that can be used for Android development, backend services, and even scripting.
This week's challenges will help you build core Kotlin skills while having fun!

Before we dive into the challenges, here are some resources to help you get started with Kotlin:
 - [Kotlin Tour](https://kotlinlang.org/docs/kotlin-tour-welcome.html)
 - [Kotlin in 100 Seconds](https://www.youtube.com/watch?v=xT8oP0wy-A0)
 - [Kotlin Docs](https://kotlinlang.org/docs/home.html)

It is highly recommend to be familiar with the basics of Kotlin syntax before attempting the challenges.

There are two categories of challenges:
 - Kotlin Playground Challenges (for those who want to practice in a browser)
 - Kotlin Multiplatform Project Challenge (for those who want to dive into multiplatform development)

## **Kotlin Playground Challenges (No Installation Needed!)**
For those who don’t want to set up Android Studio, you can solve these challenges in the **Kotlin Playground**: [https://play.kotlinlang.org](https://play.kotlinlang.org)

### Challenge 1: Hello World (40 Points)
Create a function that takes a name as a parameter and returns a greeting message using [string templates](https://kotlinlang.org/docs/strings.html#string-templates).

```kotlin
fun greetUser(name: String): String {
    println("Hello, $name! Welcome to Kotlin!")
}
```

Example:
```kotlin
fun main() {
   greetUser("Will") // Output: Hello, Will! Welcome to Kotlin!
}
```

---

### Challenge 2: When Expression (20 Points)
Use Kotlin’s [when expression](https://kotlinlang.org/docs/control-flow.html#when-expressions-and-statements) to solve the classic [FizzBuzz problem](https://en.wikipedia.org/wiki/Fizz_buzz).

```kotlin
fun doSomething(number: Int): String {
    val result = when {
        number > 0 -> "Positive"
        number < -20 -> "Less than -20"
        number % 10 == 0 && number > 0 -> "Positive Multiple of 10"
        else -> "Unknown"
    }
    
    return result
}
```

### Challenge 3: Null Safety (20 Points)
Write a function that takes a [nullable](https://kotlinlang.org/docs/null-safety.html#nullable-types-and-non-nullable-types) string and returns its length.
If the string is null, return -1.

```kotlin
fun getLength(input: String?): Int {
    // Your code here
}
```

Example:
```kotlin
getLength("Kotlin")  // Output: 6
getLength(null)      // Output: -1
```

---

### 🏃‍♂️ Challenge 4: Extension Function (20 Points)
Add an extension function to the `String` class that returns the 3rd character of the string or null if the string is less than 3 characters long.

```kotlin
fun String.thirdChar(): Char? {
    // Your code here
}
```

---

## Challenge: Create a Kotlin Multiplatform Project (100 Points)
### What is Kotlin Multiplatform (KMP)?
Kotlin Multiplatform (KMP) is a powerful feature of Kotlin that allows developers to write shared code once and run it on multiple platforms, such as:

- Android (using Kotlin/JVM)
- iOS (using Swift/Objective-C interop)
- Web (via Kotlin/JS or Kotlin/WASM)
- Desktop (using Kotlin/JVM or Kotlin/Native)

Unlike traditional cross-platform frameworks, KMP does not enforce a single UI toolkit—you can share business logic, networking, and data processing while keeping native UI experiences for each platform.
#### Why is KMP Exciting?

- Single Codebase for Business Logic – Reduce duplication by sharing data models, networking, and logic across platforms.
- Platform-Specific Flexibility – Use expect/actual to implement native features where needed.
- Interoperability – Easily integrate with existing Android, iOS, and web projects.
- Less Boilerplate, More Productivity – Write less redundant code while keeping full platform-native power!

### Your goal is to create a Kotlin Multiplatform (KMP) project that:
- Shares business logic across different platforms.
- Runs on **at least two targets** (e.g., Android & JVM, iOS & Web, etc.).
- Uses Kotlin’s **expect/actual mechanism** for platform-specific implementations.

---

### Steps to Complete the Challenge
1. **Set up a new KMP project**
   - Use [IntelliJ IDEA](https://www.jetbrains.com/idea/download/), [Android Studio](https://developer.android.com/studio), or [Fleet](https://www.jetbrains.com/fleet/).
   - Follow along with the [Kotlin Multiplatform Setup Guide](https://www.jetbrains.com/help/kotlin-multiplatform-dev/get-started.html).
   - Create a project with the [Kotlin Multiplatform Wizard](https://kmp.jetbrains.com/).
   - Choose at least **two targets** (e.g., Android + iOS, JVM + Web, etc.).

2. **Implement shared logic**
   - Create a shared module (e.g., `:shared`) with a simple function, such as `fun getPlatformName(): String`.
   - Use `expect` in the shared module and `actual` implementations in platform-specific code.

3. **Run on multiple platforms**
   - Run the project and ensure the shared code executes on **all configured platforms**.

---

---

### **💡 Example: Shared `expect/actual` Code**
#### **Shared Code (commonMain)**
```kotlin
expect fun getPlatformName(): String

fun greet(): String = "Hello from ${getPlatformName()}!"
```

#### **Android Implementation (androidMain)**
```kotlin
actual fun getPlatformName(): String = "Android"
```

#### **iOS Implementation (iosMain)**
```kotlin
actual fun getPlatformName(): String = "iOS"
```

---

### **🔗 Resources to Get Started**
- [Kotlin Multiplatform Setup Guide](https://kotlinlang.org/docs/multiplatform.html)
- [Kotlin Multiplatform Wizard](https://kmp.jetbrains.com/)
- [Compose Multiplatform (Jetpack Compose UI)](https://www.jetbrains.com/lp/compose-multiplatform/)

---

This challenge is **open-ended**, so feel free to explore different platforms and experiment! Let me know if you want specific tweaks or more advanced goals.

### **🔗 How to Submit**
1. For Kotlin Playground challenges, submit a link to your solution.
2. For the Kotlin Multiplatform Project challenge, share your project repository or a screenshot/video.
3. The person with the most points by the end of the week wins a special prize! 🎉

Submission Form: [Submit Here](https://forms.gle/g3TbxaU2r4sCy84XA)

---

## 🏆 Total Points Breakdown
- **Hello World**: 40 Points
- **When Expression**: 20 Points
- **Null Safety**: 20 Points
- **Extension Function**: 20 Points
- **Kotlin Multiplatform Project**: 100 Points
