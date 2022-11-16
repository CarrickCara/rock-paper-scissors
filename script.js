
function result(){
    var player1Choice = document.getElementById("player1-choice").value;
    var player2Choice = document.getElementById("player2-choice").value; 
   

    if(player1Choice=="rock"){
        if(player2Choice=="scissors"){
            document.getElementById("resultCheck").innerHTML=" Rock beats scissors";    
        }
        hide();
      
    }
    if(player1Choice=="scissors"){
        if(player2Choice=="rock"){
            document.getElementById("resultCheck").innerHTML=" Rock beats scissors";    
        }
        hide();
    

    }
    if(player1Choice=="paper"){
        if(player2Choice=="rock"){
            document.getElementById("resultCheck").innerHTML=" Paper beats rock";    
        }
       
        hide();

    }
    if(player1Choice=="rock"){
        if(player2Choice=="paper"){
            document.getElementById("resultCheck").innerHTML=" Paper beats rock";    
        }
        hide();
        

    }
    if(player1Choice=="scissors"){
        if(player2Choice=="paper"){
            document.getElementById("resultCheck").innerHTML=" Scisors beats paper";    
        }
        hide();
       
    }
    if(player1Choice=="paper"){
        if(player2Choice=="scissors"){
            document.getElementById("resultCheck").innerHTML=" Scisors beats paper";    
        }
        hide();
       
    }
    if(player1Choice=="scissors"){
        if(player2Choice=="rock"){
            document.getElementById("resultCheck").innerHTML=" Rock beats scissors";    
        }
        hide();
    }
    if(player1Choice=="scissors"){
        if(player2Choice=="rock"){
            document.getElementById("resultCheck").innerHTML="Rock beats scissors";    
        }
        hide();

    }
   
    
    
    
}
function hide(){
    document.getElementById('button').style.visibility = "hidden";
}
