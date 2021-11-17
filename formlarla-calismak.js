let userFormDom=document.querySelector(`#userForm`);
userFormDom.addEventListener(`submit`,formHandler);

const alertDOM = document.querySelector(`#alert`) //alerti asagida belirttik ve sitede cikmasini sagliyoruz

const alertFunction = (message, className="danger") => `


<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  
  <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </symbol>
</svg>

<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
  </button>${message}
</div>


`

function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")

    if(USER_NAME.value && SCORE.value) { // bos gönder butonuna basinca, bos list olusturmaması icin
        addItem(USER_NAME.value, SCORE.value)  //addItemı Aşagida tanimladik.
        
        USER_NAME.value =""  //bir bilgi girdigi zaman otomatik sifirlanmasi icin
        SCORE.value=""
    }else{
        alertDOM.innerHTML = alertFunction(
            "Eksik Bilgi Girdiniz",
            //"warning" , "success" // bu sekillerde yazarsak da danger olan bu sekilde degisir
            
            ) //hata verdiginde alert i cagiriyoruz
    }
 
}



let userListDom= document.querySelector(`#userList`)


const  addItem = (userName, score) => {
    let liDOM = document.createElement(`li`)


/* 
<li class="list-group-item d-flex justify-content-between align-items-center">
A list item
<span class="badge bg-primary rounded-pill">14</span>
</li>
*/

const SMILE = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`

const SAD = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`


let textInfo;

if (score>=0 && score<=100){

        textInfo= SMILE

        if(score>=90){
            textInfo+="  AA"
            document.body.style.backgroundColor = "green";
        } else if(score>=85){
            textInfo+="  BA"
            document.body.style.backgroundColor = "green";
        } else if(score>=80){
            textInfo+="  BB"
            document.body.style.backgroundColor = "green";
        } else if(score>=75){
            textInfo+="  CB"
            document.body.style.backgroundColor = "green";
        } else if(score>=70){
            textInfo+="  CC"
            document.body.style.backgroundColor = "green";
        } else if(score>=65){
            textInfo+="  DC"
            document.body.style.backgroundColor = "green";
        } else if(score>=60){
            textInfo+="  DD"
            document.body.style.backgroundColor = "green";
        } else if(score>=50){
            textInfo+="  FD"
            document.body.style.backgroundColor = "green";
        } else if(score<50){
            textInfo=`${SAD}  FF`
            document.body.style.backgroundColor = "red";

        }
} 


    liDOM.innerHTML = `
    ${userName}
    <span class="badge bg-primary rounded-pill"> ${score}</span>   
    <span class="badge bg-primary rounded-pill"> ${textInfo} </span>  
    `

    liDOM.classList.add(
        `list-group-item`, `d-flex`, `justify-content-between`, `align-items-center`)
        // listeye göre uyarladik
    
    userListDom.append(liDOM)

}



