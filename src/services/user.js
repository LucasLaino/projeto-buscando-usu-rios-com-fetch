import {baseurl} from "./src/js/variables.js"

async function getUser(userName) {
    
    const response = await fetch(`${baseurl}/${userName}`)
    return await response.json()
}

export {getUser}