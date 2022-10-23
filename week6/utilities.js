//mport Storage from './ls.js';
import { allTasks } from "./ls.js"
import { storedTasksString } from "./ls.js"

const checkboxList = document.getElementsByClassName('incomplite');
const btnRemove = document.getElementsByClassName('remove');
const checkList = document.getElementsByClassName('check');
const addBtn = document.getElementById('add');



    export function doFilter(){
       allTasks.sort(function(a, b){return a.complited - b.complited}
        )
        }  
    export function compliteTask(event){
        
        let checkArray = Array.from(checkList)
        checkArray.forEach(element=>{
        let indexOfElement = checkArray.indexOf(element);
        if(element == event.target){
        allTasks[indexOfElement].complited = true;
        
        //element.addEventListener('click',unCheck)
        var allTasksString = JSON.stringify(allTasks) 
        localStorage.setItem('time', allTasksString)
          showAllTasks(allTasks)
        }
})

    }

    function unCheck(event){
        console.log("ji")
        let checkArray = Array.from(checkList)
        checkArray.forEach(element=>{
        let indexOfElement = checkArray.indexOf(element);
        if(element == event.target){
        allTasks[indexOfElement].complited = false;
        var allTasksString = JSON.stringify(allTasks) 
        localStorage.setItem('time', allTasksString)
          showAllTasks(allTasks)
    }
})


}
    
    export function addTask(){
        let aCompleteTask = {};
        let newTask = document.getElementById('new_task').value;
        let time = new Date().toLocaleString();
        //aCompleteTask += '<div class = "task"><input type="checkbox">' + newTask + '<span id = "remove" >X</span></div>'
       aCompleteTask  = {id: time ,content : newTask, complited: false }
       var storedTasksString = localStorage.getItem('time')
        //var allTasks = JSON.parse(storedTasksString);
        if(newTask != " "){
        if(allTasks == null){
           allTasks = [] }
    allTasks.push(aCompleteTask)
    
    var allTasksString = JSON.stringify(allTasks) 
    localStorage.setItem('time', allTasksString)
       
        showAllTasks(allTasks)
       }
        else{
            alert("Need to write a task")
        }
        

        addRemove();
        addComplite();
    }
    
    export function showAllTasks(){
        var countDisplay = document.getElementById('count');
        var count = 0;
        
        if(allTasks != null){
         
        var taskDisplayer = document.getElementById('all_tasks_display') 
        taskDisplayer.innerHTML = null
        var numberOfTask = allTasks.length
        for (var i = 0; i < numberOfTask; i++) {
        doFilter()
        var aTask = allTasks[i]
        //taskDisplayer.innerHTML += '<div class = "task"><input type="checkbox" checked =false class="incomplite">' + aTask.id + " " + aTask.content + " " + aTask.complited +  '<span class = "remove" >X</span></div>'
        if (allTasks[i].complited == true)
        {
            taskDisplayer.innerHTML += '<div class= "section"><div id = "task" class = "complited"><input type="checkbox"checked = "true"  class = "check">' + aTask.id + " " + aTask.content + " " + '</div><button type ="button" class = "remove" >X</button></div>'
        count +=1 }
        else{
            
            
            taskDisplayer.innerHTML += '<div class= "section"><div id = "task"><input type="checkbox" class="check"  >' + aTask.id + " " + aTask.content + " " + '</div><button type ="button" class = "remove" >X</button></div>'
        }
        
        }
        countDisplay.innerHTML = (numberOfTask - count);   
        }
        document.getElementById('new_task').value = " ";
       
        addRemove();
        addComplite();
     
       
        
        
        }

        export function showDelited(){
   
       
        
        if(allTasks != null){
         
        var taskDisplayer = document.getElementById('all_tasks_display') 
        taskDisplayer.innerHTML = null
        var numberOfTask = allTasks.length
        for (var i = 0; i < numberOfTask; i++) {
            
        var aTask = allTasks[i]
        //taskDisplayer.innerHTML += '<div class = "task"><input type="checkbox" checked =false class="incomplite">' + aTask.id + " " + aTask.content + " " + aTask.complited +  '<span class = "remove" >X</span></div>'
        if (allTasks[i].complited == true)
        {
            taskDisplayer.innerHTML += '<div class= "section"><div id = "task" class = "complited"><input type="checkbox"checked = "true"  class = "check">' + aTask.id + " " + aTask.content + " " + '</div><button type ="button" class = "remove" >X</button></div>'
         }
       }
        //countDisplay.innerHTML = (count);

        }
        document.getElementById('new_task').value = " ";
       
        addRemove();
        addComplite();
        addUncheck()
        }

        export function showCurrent(){
    
            var countDisplay = document.getElementById('count');
            var count = 0
            
            if(allTasks != null){
             
            var taskDisplayer = document.getElementById('all_tasks_display') 
            taskDisplayer.innerHTML = null
            var numberOfTask = allTasks.length
            for (var i = 0; i < numberOfTask; i++) {
                
            var aTask = allTasks[i]
            //taskDisplayer.innerHTML += '<div class = "task"><input type="checkbox" checked =false class="incomplite">' + aTask.id + " " + aTask.content + " " + aTask.complited +  '<span class = "remove" >X</span></div>'
            if (allTasks[i].complited != true)
            {
                taskDisplayer.innerHTML += '<div class= "section"><div id = "task" ><input type="checkbox" class = "check">' + aTask.id + " " + aTask.content + " " + '</div><button type ="button" class = "remove" >X</button></div>'
            count +=1 }
           }
            countDisplay.innerHTML = (count);   
            }
            document.getElementById('new_task').value = " ";
           
            addRemove();
            addComplite();
            addUncheck()
        }





          function removeElement(event){
        
            let btnRemoveArray = Array.from(btnRemove)
            btnRemoveArray.forEach(element=>{
                let indexOfElement = btnRemoveArray.indexOf(element);
                if(element == event.target){
                        allTasks.splice(indexOfElement,1)
                        var allTasksString = JSON.stringify(allTasks) 
                       localStorage.setItem('time', allTasksString)
                        
            }
                        showAllTasks(allTasks)      
            
                }
            );
            
            }
            function addRemove(){
                let btnRemoveArray = Array.from(btnRemove)
                btnRemoveArray.forEach(element => element.addEventListener('click', removeElement))
            }
        function addComplite(){
            let checkArray =  Array.from(checkList)   
            checkArray.forEach(element => {
                if(element.checked == true){
                    element.addEventListener('click', unCheck)
                }
                else{element.addEventListener('click', compliteTask)}})
        }
        function addUncheck(){
            let checkArray = Array.from(checkList)

            allTasks.forEach(element => {
                console.log(element)
                if(element.complited == true){
                
                console.log(checkArray)
                let indexOfElement = allTasks.indexOf(element);
                //element.addEventListener('click', unCheck)
                //element.addEventListener('click', unCheck)
            }
            })
        }
    
