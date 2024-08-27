import {getUser} from "./src/services/user.js"
import {getRepositories} from "./src/services/repositories.js"
import {user} from "./src/objects/user.js"
import { screen } from "./src/objects/screen.js"

const inputSearch = document.querySelector("#input-search")
const btnSearch = document.querySelector("#btn-search")

inputSearch.addEventListener("keyup", (e) => {   
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if(isEnterKeyPressed) {
        if(validateEmptyInput(userName)) return 
        getUserData(userName)
    }
})

btnSearch.addEventListener("click", () => {
    const userName = document.querySelector("#input-search").value
    if(validateEmptyInput(userName)) return
    getUserData(userName)
})

async function getUserData(userName) {  
    const userResponse = await getUser(userName)
    
    if(userResponse.message === "Not Found") {
        screen.renderNotFound()
        return
    }
    
    const repositoriesResponse = await getRepositories(userName)


    user.setInfo(userResponse) 
    user.setRepositories(repositoriesResponse)
    
    screen.renderUser(user)
}

function validateEmptyInput(userName) {
    if(userName.length === 0) {
        alert("Preencha o campo com o nome do usuário do GitHub")
        return true
    } 
}