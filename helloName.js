function helloName(name, studentID="-")
{
    alert(`Hello ${name}! (학번: ${studentID})`);
}
helloName("GDG on Campus Sogang!");

const inputText=document.getElementById("helloName");
const inputID=document.getElementById("studentID");
const helloBtn=document.getElementById("helloBtn");


helloBtn.addEventListener("click",()=> {
    helloName(inputText.value, inputID.value);
});
