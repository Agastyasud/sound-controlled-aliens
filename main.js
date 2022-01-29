function startClassification(){
navigator.mediaDevices.getUserMedia({audio:true})
Classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json",modelready)
}
function modelready(){
 Classifier.classify(gotresult)   
}
function gotresult(error,result){
if(error){
    console.log(error)
}
else{
    randomr=Math.floor(Math.random()*255)+1
    randomb=Math.floor(Math.random()*255)+1
    randomg=Math.floor(Math.random()*255)+1
document.getElementById("result_label").innerHTML="I can hear-"+result[0].label
document.getElementById("result_confidence").innerHTML="Accuracy-"+(result[0].confidence*100).toFixed(2)+"%"
document.getElementById("result_confidence").style.color="rgb("+randomr+","+randomb+","+randomg+")"
document.getElementById("result_label").style.color="rgb("+randomr+","+randomb+","+randomg+")"
image1=document.getElementById("alien1")
image2=document.getElementById("alien2")
image3=document.getElementById("alien3")
image4=document.getElementById("alien4")
if(result[0].label=="Clap"){
image1.src="aliens-01.gif"
image2.src="aliens-02.png"
image3.src="aliens-03.png"
image4.src="aliens-04.png"
}
else if(result[0].label=="Bell"){
image1.src="aliens-01.png"
image2.src="aliens-02.gif"
image3.src="aliens-03.png"
image4.src="aliens-04.png"
}
else if(result[0].label=="Snapping"){
    image1.src="aliens-01.png"
    image2.src="aliens-02.png"
    image3.src="aliens-03.gif"
    image4.src="aliens-04.png"
    }
    else{
        image1.src="aliens-01.png"
        image2.src="aliens-02.png"
        image3.src="aliens-03.png"
        image4.src="aliens-04.gif"    
    }
}
}
