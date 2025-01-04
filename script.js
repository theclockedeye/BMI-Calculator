function calc(){
    var height=document.getElementById("height").value
    var weight=document.getElementById("weight").value
    heightInMeter=height/100
    var bmi=weight/(heightInMeter*heightInMeter)
    res=document.getElementById("result")
    if(bmi<18.5){
        res.textContent='Your BMI value is ' +bmi.toFixed(2)+' \n Under weight'
        res.style.color = 'yellow';
    }
    else if(bmi<25){
        res.textContent='Your BMI value is ' +bmi.toFixed(2)+'\n Normal weight'
        res.style.color = 'green';
    }
    else if(bmi<30){
        res.textContent='Your BMI value is ' +bmi.toFixed(2)+' \n Over weight'
        res.style.color = 'orange'
    }
    else{
        res.textContent='Your BMI value is ' +bmi.toFixed(2)+' \n Obese'
        res.style.color = 'red';
    }

}
function refresh(){
    document.getElementById("weight").value=""
    document.getElementById("height").value=""
    document.getElementById("result").textContent=""
}