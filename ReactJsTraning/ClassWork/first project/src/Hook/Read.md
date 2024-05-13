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

or

useEffect(callback,[]) : no dependencies - call every time

2. useEffect(callback,[count]) : it depend on count
