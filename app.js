class Router {
    constructor(hash, message){
        this.hash = hash;
        this.message = message;
    }
}

class UI {
    
    addHashToList (hash, message){
        const list = document.querySelector('#hash_list');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${hash}</td>
            <td>${message}</td>
            <td><a class="deleteBtn">Delete</a></td>
      `
    list.appendChild(row)
    document.location.hash = hash
}
    deleteHash(target){
        if(target.className === "deleteBtn"){
            target.parentElement.parentElement.remove();
        }
    }
    clearFields(){
        document.querySelector('#hash').value = '';
        document.querySelector('#message').value = '';
    }
}

document.querySelector('#hashForm').addEventListener('submit',(e)=>{
    e.preventDefault()
    const hash = document.querySelector('#hash').value;
    const message = document.querySelector('#message').value;
    const router = new Router(hash, message);
    const ui = new UI();
    if(hash === '' || message === ''){
        return
    } else   {
    ui.addHashToList(hash, message)
    ui.clearFields();
    }
})

document.querySelector('#hash_list').addEventListener('click',(e)=>{
    const ui = new UI();
    ui.deleteHash(e.target);
    e.preventDefault();
})