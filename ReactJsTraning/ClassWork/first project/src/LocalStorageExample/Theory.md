local storage vs session storage

session storage : session storage keep value in browser or tab memory whenever we close tab or browser
it will destroy session memory.

this is a temporary storage specifier.

capacity of this storage specifier 5-10 mb - depend on browser

sessionStorage.setItem("key" , value);
sessionStorage.getItem("key");

local storage : it keep data for long time

it does not destroy on browser close or tab close

capacity of this storage specifier 5-10 mb - depend on browser

local storage mainly use for theme setting etc.

---

localstorage : is a one kind of data base which is available in browser

we can store data in key and value format

if we want to store data in localstorage we can use below method

    localstorage.setItem("key",value)

if we want to retrive data from localstorage we can use below method

    localstorage.getItem("key")
