let inputnum1 = document.getElementById("input1");
let greenbtn = document.querySelector(".btn-outline-success");
let spanbudget = document.querySelector(".x1 bold");
let spanbalance = document.querySelector(".x2 bold");
let spanexpanse = document.querySelector(".red bold");
let redbtn = document.querySelector(".btn-outline-danger");
let inputnum2 = document.getElementById("input2");
let inputtext = document.getElementById("input3");
let table = document.querySelector("table");
let tbody = document.querySelector("tbody"); 
/////budget function
function budget(){
    greenbtn.onclick = function(e){
        e.preventDefault();
        if(inputnum1.value < 0 || inputnum1.value == ''){
            
            document.querySelector(".alert").style.display = 'block';
            let timeout = setTimeout(function(){
                document.querySelector(".alert").style.display = 'none';
            },2000);
        }else{
          thechecker();
        }
        inputnum1.value = ''
    }
}
budget();
/////expanse function
function expanse(){
    redbtn.onclick = function(e){
        e.preventDefault();
        if(inputnum2.value < 0 || inputnum2.value == '' || inputtext.value == ''){
            
            document.querySelector(".alert").style.display = 'block';
            let timeout = setTimeout(function(){
                document.querySelector(".alert").style.display = 'none';
            },2000);
        }else{
          thechecker2();
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let tdtext1 = document.createTextNode(inputnum2.value);
        td1.appendChild(tdtext1);
        tr.appendChild(td1);
        let td2 = document.createElement("td");
        let tdtext2 = document.createTextNode(inputtext.value);
        td2.appendChild(tdtext2);
        tr.appendChild(td2);
        let td3 = document.createElement("td");
        let btn1 = document.createElement("button");
        let btn1text = document.createTextNode("delete");
        btn1.appendChild(btn1text);
        btn1.classList += 'btn1 ';
        btn1.classList += ' btn';
        let btn2 = document.createElement("button");
        let btn2text = document.createTextNode("alter");
        btn2.appendChild(btn2text);
        btn2.classList += 'btn2 ';
        btn2.classList += ' btn';
        td3.appendChild(btn1);
        td3.appendChild(btn2);
        tr.appendChild(td3);
        tbody.appendChild(tr);
        ////////////////////////////////
 
        let btns1 = Array.from(document.querySelectorAll(".btn1"));
       btns1.forEach((ele) => {
        
        ele.onclick = function(){
           // console.log(parseInt(this.parentElement.parentElement.children[0].textContent));
           spanexpanse.textContent =  parseInt(spanexpanse.textContent) - parseInt(this.parentElement.parentElement.children[0].textContent);
           spanbalance.textContent =  parseInt(spanbalance.textContent) + parseInt(this.parentElement.parentElement.children[0].textContent);
           this.parentElement.parentElement.remove();

        }
    });
    let btns2 = Array.from(document.querySelectorAll(".btn2"));
    btns2.forEach((ele2) => {
     
     ele2.onclick = function(){
        // console.log(parseInt(this.parentElement.parentElement.children[0].textContent));
        spanexpanse.textContent =  parseInt(spanexpanse.textContent) - parseInt(this.parentElement.parentElement.children[0].textContent);
        spanbalance.textContent =  parseInt(spanbalance.textContent) + parseInt(this.parentElement.parentElement.children[0].textContent);
        inputnum2.value = parseInt(this.parentElement.parentElement.children[0].textContent);
        inputtext.value = this.parentElement.parentElement.children[1].textContent;
        this.parentElement.parentElement.remove();


     }
 });
        
        }
        inputnum2.value = '';
        inputtext.value = '';
    }
}
expanse();
///the checker function
function thechecker(){
    spanbudget.textContent = parseInt(inputnum1.value);
   
    spanbalance.textContent = parseInt(spanbudget.textContent) - parseInt(spanexpanse.textContent);

}
////////the checker2 function
function thechecker2(){
    spanexpanse.textContent = parseInt(inputnum2.value) + parseInt(spanexpanse.textContent);
     
    spanbalance.textContent = parseInt(spanbudget.textContent) - parseInt(spanexpanse.textContent);

}










