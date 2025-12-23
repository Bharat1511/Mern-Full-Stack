function submit(){

    console.log("Form Submitted");
    const fn = document.getElementById("fullName").value;
    const em = document.getElementById("email").value;
    const mb = document.getElementById("mobile").value;
    const dob = document.getElementById("dob").value;
    const ql = document.getElementById("qualification").value;
    const sr = document.getElementById("score").value;
    const cr = document.getElementById("course").value;

     document.querySelectorAll(".Error").forEach((element) => {
    element.innerHTML = "";
  });

  //Validation Starts
  if (!nm) {
    document.getElementById("NameError").innerText = "Required";
    return;
  } else if (!/^[A-Za-z ]+$/.test(nm)) {
    document.getElementById("NameError").innerText =
      "Only Alphabets and Spaces are Allowed";
    return;
  }

  if (!em) {
    document.getElementById("EmailError").innerText = "Required";
    return;
  } else if (!/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(em)) {
    document.getElementById("EmailError").innerText = "Use Proper Email Format";
    return;
  }

  if (!ph) {
    document.getElementById("PhoneError").innerText = "Required";
    return;
  } else if (!/^[6-9]\d{9}$/.test(ph)) {
    document.getElementById("PhoneError").innerText =
      "Only Indian Mobile Nummber allowed";
    return;
  }

  if (!db) {
    document.getElementById("NameError").innerText = "Required";
    return;
  } else {
    const currentyear = new Date().getFullYear();
    const birthyear = Number(db.split("-")[0]);
    if (currentyear - birthyear < 17) {
      document.getElementById("DOBError").innerText =
        "You must be 18 years Old";
      return;
    }
  }

   const data = {
    FullName: nm,
    email: em,
    Phone: ph,
    DOB: db,
  };

  console.log(data);



  


    let pb = [];
     const batch = document.querySelectorAll("input[name='batch']:checked");
     batch.forEach((element)=>{
        pb.push(element.value)

    });

     // or 
    // document.
    // querySelectorAll("input[name='batch']:checked")
    // .forEach((element)=>{
    //     selectedbatchtiming.push(element.value)

    // });

    const pt = document.querySelector("input[name='timing']:checked").value;
    const ad = document.getElementById("address").value;
    const ct = document.getElementById("city").value;
    const pn = document.getElementById("pin").value;
    const gn = document.getElementById("GuardianName").value
    const gcn = document.getElementById("GuardianContact").value

    let hereabout = [];
     document.querySelectorAll("input[name='hereabout']:checked");
     hereabout.forEach((element)=>{
        hereabout.push(element.value)

    });

    const Sr = document.getElementById("sr").value;

    

    console.log("Full Name: " + fn);
    console.log("Email: " + em);
    console.log("Mobile: " + mb);
    console.log("Date of Birth: " + dob);
    console.log("Qualification: " + ql);
    console.log("Score: " + sr);
    console.log("Course: " + cr);
    console.log("Preferred Batch: " + pb.join(", "));
    console.log("Preferred Timing: " + pt);
    console.log("Address: " + ad);
    console.log("City: " + ct);
    console.log("Pin Code: " + pn);
    console.log("Guardian Name:" +gn)
    console.log("Guardian Contact no.:" +gcn)
    console.log("How did you hear about us?: " + hereabout.join(", "));
    console.log("Special Requirements:"+Sr)




    }

    function clearFrom() {
    window.location.reload();
    }
    