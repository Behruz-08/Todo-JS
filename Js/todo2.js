//выбор элементов dom для манипуляций
const input = document.querySelector("input[type = 'text']");
const ul = document.querySelector("ul");
const container = document.querySelector("div");
const lists = document.querySelectorAll("li");
const spans = document.getElementsByTagName("span");
const pencil = document.querySelector("#pencil");
const saveBtn = document.querySelector(".save");
const clearBtn = document.querySelector(".clear");
const tipsBtn = document.querySelector(".tipBtn");
const closeBtn = document.querySelector(".closeBtn");
const overlay = document.getElementById("overlay")


//функция для удаления задачи при нажатии кнопки
function deleteTodo(){
  for(let span of spans){
    span.addEventListener ("click",function (){
      span.parentElement.remove();
      e.stopPropagation();
    });
  }
}

//функция для загрузки списка дел, если список найден в локальном хранилище
function loadTodo(){
  if(localStorage.getItem('todoList')){
    ul.innerHTML = localStorage.getItem('todoList');
    deleteTodo();
  }
}

//прослушиватель событий для ввода, чтобы добавить новую задачу в список.
input.addEventListener("keypress",function(keyPressed){
  if(keyPressed.which === 13){
    //creating lists and span when enter is clicked
    var li = document.createElement("li");
    var spanElement = document.createElement("span");
    var icon = document.createElement("i");
        
    var newTodo = this.value;
    this.value = " " ;
        
    icon.classList.add('fas', 'fa-trash-alt');
    spanElement.append(icon);
    ul.appendChild(li).append(spanElement,newTodo);

    deleteTodo();
    
    }
    
});

//прослушиватель событий для сквозного списка при нажатии
ul.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  },false
);

//скрываем поле ввода при нажатии на значок карандаша
pencil.addEventListener('click', function(){
  input.classList.toggle('display');
});



//сохранить состояние списка задач, чтобы пользователь мог получить к нему доступ позже
saveBtn.addEventListener('click',function(){
  localStorage.setItem('todoList',ul.innerHTML );
  
});

//очистить все задачи при нажатии кнопки «Очистить»
clearBtn.addEventListener('click', function(){
  ul.innerHTML= "";
  localStorage.removeItem('todoList',ul.innerHTML );
});

//отображение наложения при нажатии кнопки подсказок
tipsBtn.addEventListener("click",function(){
   overlay.style.height = "100%";
});

//закрыть наложение при нажатии кнопки закрытия
closeBtn.addEventListener("click",function(e){
  e.preventDefault;
  overlay.style.height = "0";
  
})

//удалить задачу
deleteTodo();

//загрузить список задач
loadTodo();
