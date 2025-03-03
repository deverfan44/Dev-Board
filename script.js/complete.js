

const completedBtn = document.getElementsByClassName("complete-btn");

for(const btn of completedBtn) {
    btn.addEventListener('click', function(event){
        alert('Board Update Successfully');
        btn.setAttribute('disabled',true);
        btn.style.backgroundColor = 'gray';
        document.getElementById('task-assign').innerText -= 1;
        const doneTask = document.getElementById('complete-task').innerText;
        console.log(doneTask);
        document.getElementById('complete-task').innerText = Number(doneTask)+1;

        const bubble = btn.parentElement.parentElement.children[1].firstChild.nextSibling;
        const div = document.createElement('div');
        div.classList.add("bg-backcolor", "p-3", "rounded-md", "mb-2");
        const p = document.createElement('p');
        const current = new Date();
        const hours = current.getHours();
        const minutes = current.getMinutes();
        const seconds = current.getSeconds();
        let timetype = null;
        if(hours > 12) timetype = 'PM';
        else timetype = 'AM';

        p.innerText = `You have Complete The Task ${bubble.innerText} at ${hours}:${minutes}:${seconds} ${timetype}`;
        p.classList.add("text-xs", "text-gray-600");
        div.appendChild(p);

        document.getElementById('history-container').appendChild(div);
    })
}

