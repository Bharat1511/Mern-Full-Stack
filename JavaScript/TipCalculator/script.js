function calculate() {
  const Billlamount = document.getElementById("Bill").value;
  const service = document.getElementById("service").value;
  const person = document.getElementById("person").value;
  const display = document.getElementById("tip");

  if(!Billlamount || !service || !person){
    alert("Enter the Details")
    return
  }
  
  if(service === "25"){
    bill =  Billlamount * 0.25;
  }
  else if(service === "20"){
    bill = Billlamount * 0.2;
  }
  else if(service === "15"){
    bill = Billlamount * 0.15;
  }
  else if(service === "10"){
    bill = Billlamount * 0.1;
  }
  else if(service === "5"){
    bill = Billlamount * 0.05;
  }

  bill = bill / person;

  display.innerText = ("Tip Amount : " + bill .toFixed(2) + " per person");
}