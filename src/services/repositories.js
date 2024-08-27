import {baseurl, repositoriesQuantity} from "./src/js/variables.js"

async function getRepositories(userName) {
    
    const response = await fetch(`${baseurl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return await response.json()
}

export {getRepositories}