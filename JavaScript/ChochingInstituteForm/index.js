function submit(){

    console.log("Form Submitted");
    const fn = document.getElementById("fullName").value;
    const em = document.getElementById("email").value;
    const mb = document.getElementById("mobile").value;
    const dob = document.getElementById("dob").value;
    const ql = document.getElementById("qualification").value;
    const sr = document.getElementById("score").value;
    const cr = document.getElementById("course").value;

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