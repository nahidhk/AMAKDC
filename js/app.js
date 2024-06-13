function cngnam1(){
  document.getElementById("cid").innerHTML="Ataikula Madpur Amena Khutun Digger Celloge"
  setTimeout(cngnam2,1000);
}

function cngnam2(){
  document.getElementById("cid").innerHTML="আতাইকুলা মাধপুর আমেনা খাতুন ডিগ্রী কলেজ।"
  setTimeout(cngnam1,1000);

}

setTimeout(cngnam1,1000);



function home(){
  window.location.href="/home";
}

function feed(){
  window.location.href="/feeds";
}

function user(){
  window.location.href="/user";
}

function info(){
  window.location.href="/info";
}

function setting(){
  window.location.href="/setting";
}

