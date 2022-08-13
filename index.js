/* function saveInput(){
    console.log("Button Clicked from onclick attrib!")
} */
let mySaves = []
/* let mySaves = '["abcd"]'
mySaves = JSON.parse(mySaves)
mySaves.push("hello")
mySaves = JSON.stringify(mySaves)
console.log(typeof mySaves) */


const inputEl = document.getElementById("input-el")
// Event Listeners
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const localSave =JSON.parse(localStorage.getItem("mySaves"))

//localStorage.setItem("name","harsh")
/* let myName = localStorage.getItem("name")
console.log(myName) */

if(localSave){
    mySaves = localSave
    render(mySaves)
}
function render(saves){
    let listItems = ""
    for( let i = 0; i < saves.length; i++ ){
    // ulEl.innerHTML += "<li>"+ mySaves[i] + "</li> "
    //listItems += "<li><a target='_blank' href='#'>" + mySaves[i] + "</a></li>"
    listItems += `
        <li>
            <a target='_blank' href='${saves[i]}'>
                ${saves[i]}  
             </a>
        </li>`
    /* const list = document.createElement("li")
    list.textContent = mySaves[i]
    ulEl.append(list) */
    }
    ulEl.innerHTML = listItems
}

/* const tabs = [
    {url: "www.google.com"}
] */

tabBtn.addEventListener("click", function(){
    //console.log(tabs[0].url)
    //grab url current tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        mySaves.push(tabs[0].url)
        localStorage.setItem("mySaves", JSON.stringify(mySaves))
        render(mySaves)
    })

})

deleteBtn.addEventListener("dblclick",function(){
    console.log("cleared")
    localStorage.clear()
    mySaves=[]
    render(mySaves)
})

inputBtn.addEventListener("click",function(){
    mySaves.push(inputEl.value) 
    inputEl.value=""

    localStorage.setItem("mySaves", JSON.stringify(mySaves))
    //console.log(mySaves)
    render(mySaves)

    console.log(localStorage.getItem("mySaves"))
    
})
/* let boxBtn = document.getElementById("box")
boxBtn.addEventListener("click",function(){
    console.log("Opened box")
}) */


/* const container = document.getElementById("container")
container.innerHTML = "<button onclick='buy()'> Buy! </button>"
function buy(){
    container.innerHTML += "Thanks for buying"
} */

/* const recipient = "harsh"
const email = `Hey ${recipient}! How's it going?`
console.log(email) */

/* const welcomeEl = document.getElementById("welcome-el")
function greetUser(greeting,name,emoji){
    welcomeEl.textContent = `${greeting}, ${name} ${emoji}`
}
greetUser("Welcome","Harsh","🎭")

 function add(num1,num2){
    return num1 + num2
 }
 add(3,4)
 console.log(add(3,4)) */

/* function getFirst(arr){
    return arr[0]
}
let firstCard = getFirst([10,15,20])
console.log(firstCard) */
