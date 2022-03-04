let fnameNode = document.getElementById("fname");
let emailNode = document.getElementById("email")
let mobileNode = document.getElementById("mobile")

let  tdNode1 = document.getElementById("error1")
let  tdNode2 = document.getElementById("error2")
let  tdNode3 = document.getElementById("error3")

let border1 = "2px solid red";
let border2 = "2px solid green";

function validate1() {
    tdNode1.textContent = " "
     let fname = fnameNode.value;
     let regExp=new RegExp("^[A-Za-z]*$");
     if (fname == '') {
         tdNode1.textContent = "This field is required"
         fnameNode.style.border = border1;
         return false;
     }else if(regExp.test(fname)==false) {
        tdNode1.textContent = "Name should be only alphabets"
        return false;
    }
     else {
        fnameNode.style.border = border2;
        return true;

     }

}

function validate2() {
    tdNode2.textContent=""
    let email = emailNode.value;
    let ss=email.substring(email.indexOf('@')+1);
    console.log(ss);
    if (email == '') {
        tdNode2.textContent = "This field is required"
        emailNode.style.border = border1;
        return false;
    }else if(!email.includes("@")|| ss=='') {
       tdNode2.textContent = "Please put valid email";
       return false;
    }
    else {
        emailNode.style.border = border2;
        return true;
} 
}

function validate3() {
    let mobile = mobileNode.value;
    let regExp=new RegExp("^[0-9]*$");
    tdNode3.textContent="";

    if ( mobile == '') {
        tdNode3.textContent = "This field is required"
        mobileNode.style.border = border1;
        return false;
    }else if(regExp.test(mobile)==false){
        tdNode3.textContent = "should contain only digits";
        mobileNode.style.border =border1;
        return false;
    }
    else {
        mobileNode.style.border = border2;
        return true;
} 
}

function validateForm(){
    let st1= validate1();
    let st2= validate2();
    let st3 = validate3()
    return st1 && st2 && st3;
}

let imgElement = document.getElementById('slider');
let paraElement = document.getElementById('paragraph');
      var picture=[];
      picture[0] = 'livingroom2.png';
      picture[1] = 'living room.png';
      picture[2] = 'livingroom2.png';
      picture[3] = 'living room.png';

      var para=[];
      para[0] = 'Breathe, be free and live in the colours of sun and sea. Lighter colours and textured fabrics for a smooth';
      para[1] = 'Talk to our designer so that we know more about your style.';
      para[2] = 'Breathe, be free and live in the colours of sun and sea. Lighter colours and textured fabrics for a smooth';
      para[3] = 'Talk to our designer so that we know more about your style.';

      let picNumber = 0;
      imgElement.src = picture[picNumber];
      paraElement.textContent = para[picNumber];
      
      function previous(){
        if (picNumber <= 0){
          picNumber = 0;
          imgElement.src = picture[0];
          paraElement.textContent = para[0]
          console.log(para[0])
      }
      else{
        picNumber = picNumber -1;
        imgElement.src = picture[picNumber];
        paraElement.textContent = para[picNumber];
        console.log(para[picNumber]);
      }
      }
      function next(){
        if (picNumber >= 3){
          picNumber = 0;
          imgElement.src = picture[0];
          paraElement.textContent = para[0];
      }
      else{
        picNumber = picNumber + 1;
        imgElement.src = picture[picNumber];
        console.log(picture[picNumber])
        paraElement.textContent = para[picNumber];

      }   
      }
// para
      // let paraNumber = 0;
      // paraElement = para[paraNumber];
      
      
      // function previous(){
      //   if (paraNumber < 0){
      //     paraNumber = 0;
      //   paraElement = para[0];
      // }
      // else{
      //   paraElement = para[paraNumber--];
      // }
      // }
      // function next(){
      //   if (paraNumber > 3){
      //     paraNumber = 0;
      //   paraElement = para[0];
      // }
      // else{
      //   paraElement = para[paraNumber++];
      // }   
      // }