

var btnNo=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"];
var image=["doremon.png","jian.png","nobita.jfif","doreme.png","nobita_mom.jpg","nobita_papa.jpg","sizuka.jpg","suneo.jpg"];
for(var i=0;i<8;i++){
    var choose1=Math.floor(Math.random()*(btnNo.length));
    document.getElementById(btnNo[choose1]).style.backgroundImage="url("+image[i]+")";
    btnNo.splice(choose1,1);
    var choose2=Math.floor(Math.random()*(btnNo.length));
    document.getElementById(btnNo[choose2]).style.backgroundImage="url("+image[i]+")";
    btnNo.splice(choose2,1);
}

var start=true;
var pre;
var preid;
var x=0;
function game(clicked_id){
    if(start==true){
       document.getElementById(clicked_id).style.transform="rotateY(180deg)";
       preid=clicked_id;
       document.getElementById(clicked_id).style.transition="transform 0.8s";
       var url = document.getElementById(document.getElementById(clicked_id).lastElementChild.id).style.backgroundImage;
       pre=url.substring(4, url.length-1);
       start=false;
    }
    else{
        document.getElementById(clicked_id).style.transform="rotateY(180deg)";
       document.getElementById(clicked_id).style.transition="transform 0.8s";
       setTimeout(() => {
        var url = document.getElementById(document.getElementById(clicked_id).lastElementChild.id).style.backgroundImage;
        if(url.substring(4, url.length-1)==pre){
            document.getElementById(preid).remove();
            document.getElementById(clicked_id).remove();
            x=x+2;
            if(x==16){
    
                document.getElementById("table").innerHTML="GAME COMLETED !!";
                document.getElementById("table").style.fontSize="xxx-large";
                document.getElementById("table").style.textAlign="Center";
                document.getElementById("table").style.color="deeppink";
                document.getElementById("table").style.fontWeight="bolder";
            }
            start=true;
        }
        else{
            document.getElementById(preid).style.transform="rotateY(360deg)";
            document.getElementById(clicked_id).style.transform="rotateY(360deg)";
            start=true;
        }
       }, 800);
       

    }
}