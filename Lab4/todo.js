// Κώδικας που θα εκτελείται όταν φορτωθεί η σελίδα:
// Code that will run when the page is loaded:
//
// Γράψτε εδώ τον κώδικά σας
// Write your code here
//

updateCount();
function updateCount() {
    let total = document.querySelector(".total");
    total.innerHTML = getTotalCount();

    let notDone = document.querySelector(".left-todo");
    const notDoneTasks = getTotalCount() - getDoneCount();
    notDone.innerHTML = notDoneTasks;
}
colorEveryOddTask();


function addNewItem(inputValue) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const textSpan = document.createElement('span');
    textSpan.textContent = inputValue;
    textSpan.classList.add("task");
    
    ul.appendChild(li);
    li.appendChild(textSpan);
    const button = document.createElement('button');
    button.textContent = ("Αφαίρεση")
    li.appendChild(button);

    button.addEventListener("click", () => {
        if (li.classList.contains("done")) {
            li.classList.remove("done");
            updateCount();
        }
        else {
            li.classList.add("done");
            updateCount();
        }
    });
  
    updateCount();
    colorEveryOddTask();
};

let input = document.querySelector('input');
input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        addNewItem(input.value);
        input.value = '';
    }
});
//--------------------------------------------------
// Ο παραπάνω κώδικας θα κάνει χρήση των εξής συναρτήσεων:
// The above code will use the following functions:

// 1. Επιστρέφει το πλήθος των εργασιών που έχουν σημειωθεί ως ολοκληρωμένες
// 1. Returns the count of the tasks that have been marked as done
function getDoneCount() 
{
    const doneTasks = document.querySelectorAll(".done");
    return doneTasks.length;
}
    


// 2. Επιστρέφει το πλήθος όλων των εργασιών
// 2. Returns the total count of all the tasks
function getTotalCount() 
{
    const allTasks = document.querySelectorAll("li");
    return allTasks.length;
}

// 3. Χρωματίζει όλες τις άρτιες εργασίες
// 3. Colors every odd task
function colorEveryOddTask() {
    const item = document.querySelector("ul");
    const elements = item.querySelectorAll("li:nth-child(2n+1) span");
    elements.forEach((i) => i.style.backgroundColor = "lightgrey");
    
}


const button1 = document.querySelectorAll('button');

button1.forEach(button=> {
    button.addEventListener("click", function() {
        const li = this.parentNode;
    if (li.classList.contains("done")) {
        li.classList.remove("done");
        updateCount();
    }
    else {
        li.classList.add("done");
        updateCount();
    }
});
colorEveryOddTask();
});