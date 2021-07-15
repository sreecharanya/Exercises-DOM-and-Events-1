function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener("click", function(){
     paragraph.innerHTML="Houston, we have liftoff!"
    })
    missionAbort.addEventListener("mouseover",function(event){
      event.target.style.color="red";
    })
    missionAbort.addEventListener("mouseleave",function(event){
      event.target.style.color="";
    })
    missionAbort.addEventListener("click",function(){
      
      let response=window.confirm("Are you sure you want to abort the mission?");
      if(response){
        paragraph.innerHTML="Mission aborted! Space shuttle returning home.";
      }else{
        window.alert("Ready for launch");
      }
    })
}

window.addEventListener("load", init);