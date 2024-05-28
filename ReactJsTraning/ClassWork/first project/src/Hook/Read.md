hook is a specific function with the help of hook functions we can manage many state of function
component and manage lifecycle of function component.

there are many popular hooks avialable for example => useState(), useEffect(), useContext()...
and many more

================================

useEffect () : useEffect is a most popular hook function. Using of useEffect we can control side effect
of function component.

        for example => api fetching, render specific code when specific event occur.

syntax : useEffect(callback,dependencies)

         when we don't pass any dependencies it will run useEffect every time.

======================================

no dependemcies useEffect

1. useEffect(callback) : it will invoke every event perform

2. useEffect(callback,[]) : no dependencies - call once in a program

3. useEffect(callback,[count]) : it depend on count

======================================

useRef : useRef is a one of most popular hook in react js
         useRef which is refere to specific component.
         e.g. on button click we can focus on input box

