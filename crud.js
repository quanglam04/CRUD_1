let data =[
    {id: 1,name :"sami", email: "sami@gmail.com"},
    {id: 2,name :"khan", email: "khan@gmail.com"}
]

function readAll(){
    localStorage.setItem("object",JSON.stringify(data));
    var tableData = document.querySelector(".data_table")
    var object = localStorage.getItem('object')
    var objectData = JSON.parse(object);
    var elements = "";

    objectData.map(record => {
        elements += `<tr>
            <td>${record.name}</td>
            <td>${record.email}</td>
            <td>
                <button class="editBtn" onclick={edit(${record.id})}>Edit</button>
                <button class="deleteBtn" onclick={dele(${record.id})}>Delete</button>
            </td>
        </tr>`
    })

    tableData.innerHTML = elements;
}

function create(){
    document.querySelector(".create_form").style.display = "block";
    document.querySelector(".add_div").style.display = "none";
    document.querySelector(".name").value = "";
    document.querySelector(".email").value = "";
    readAll();
    
}

function add(){
     
    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;

    var newObj = {id: 3,name:name,email:email};
    data.push(newObj);
     

    document.querySelector(".create_form").style.display = "none";
    document.querySelector(".add_div").style.display = "block";
    readAll();
    
}

const edit = (id) =>{
    document.querySelector(".update_form").style.display = "block";
    var obj = data.find(record => record.id === id);
    document.querySelector(".uname").value = obj.name;
    document.querySelector(".unemail").value = obj.email;
    document.querySelector(".id").value = obj.id;
}

const update = (e) =>{
    
    var id = parseInt( document.querySelector(".id").value);
    var name = document.querySelector(".uname").value;  
    var email = document.querySelector(".unemail").value;
    console.log(id," ",name," ",email);
    
    var index = data.findIndex( record =>{
        return record.id === id;

    })
    console.log(" ",index);
    data[index]={id,name,email};

    document.querySelector(".update_form").style.display = "none";

    readAll();
    
}

const dele = (id) =>{
    data = data.filter(rec => rec.id!==id);
    readAll();
    

}

