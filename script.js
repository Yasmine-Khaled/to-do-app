let text =document.querySelector(".Text");
let allTasks=document.getElementById('tasks');
function display() {
    document.querySelector(".content").style.display='block';
    console.log('hello');

}
function none(){
    document.querySelector(".content").style.display='none';
}
function task() {
if(document.getElementById('exampleInputEmail1').value.length == 0){
    alert("Please Entre a task");
}
else{
    document.querySelector(".Text").style.display='none';
    document.getElementById('tasks').innerHTML +=
    `
    <div class="new-task" style="margin-bottom:5px;">
    <span id="new"> 
    ${document.getElementById('exampleInputEmail1').value}
    </span> 
    <button class="delete"><i class="far fa-trash-alt"></i>
    </button>
    </div>
    
    `;
    
}
document.getElementById('exampleInputEmail1').value="";
}
let noTasks=()=>{
    if(allTasks.childElementCount==1){
        document.querySelector(".Text").style.display='block';
    }
}
document.addEventListener('click', function(e) {
if(e.target.classList.contains('delete')){
 e.target.parentElement.remove();
 noTasks();
}

});
