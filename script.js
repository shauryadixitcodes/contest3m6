let employee = document.getElementById('employee');
let e=document.getElementById('prof');

let prof = [
    {id:1,name:"john",age:"18",profession:"developer"},
    {id:2, name:"jack",age:"20", profession:"developer"},
    {id:3, name:"karen", age:"19",profession:"admin"}
]

let strProf='';
function selectProf(){
    // strProf=e.options[e.selectedIndex].text;
    strProf=e.options[e.selectedIndex].value;;
    console.log(strProf);
}
// prof = prof.map(item => ({...item,age:parseInt(item.age,10)}))
prof = prof.map(function(item,index){
    return ({
        id:item.id,
        name:item.name,
        age: parseInt(item.age,10),
        profession:item.profession
    })
})

prof.forEach(item => {
    // result.push({...item,age:item.name =='john' ? 19 : item.age})
    if(item.name =='john'){
        item.age=19;
    }
})


let profTwo = [
    {id:4,name:"jack",age:20,profession:"admin"},
    {id:5, name:"jill",age:21, profession:"admin"},
    {id:6, name:"kevin", age:22,profession:"developer"}
    ]
const list=[...prof,...profTwo];



function render(item){
    employee.innerHTML = item.reduce((htmlString, item) => {
        return htmlString + `
            <div class="employeeItem">
                <span>
                    ${item.id}.
                </span>
                <span>
                    name: ${item.name}
                </span>
                <span>
                    age: ${item.age}
                </span>
                <span>
                    profession: ${item.profession}
                </span>
                
            </div>
        `;
    }, "");
}

render(list);
function filter(){
    console.log(strProf)
    if(strProf=='') return alert('Please select Profession')
    result=list.filter(item => item.profession==strProf);
    render(result);
    console.log(result)

}