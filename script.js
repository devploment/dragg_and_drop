const allBoxes=document.querySelectorAll('.box')
const allTasks=document.querySelectorAll('.task')

allTasks.forEach(task=>{

task.addEventListener('"touchstart"',()=>{
task.classList.add('is-dragging')
})
  task.addEventListener('touchmove',()=>{
task.classList.remove('is-dragging')
})
})