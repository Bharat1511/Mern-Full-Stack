function Submit() {
    console.log("Submit Button Clicked");

     const pn = document.getElementById("PersonName").value;
    const cn = document.getElementById("ContactNo").value;
    const em = document.getElementById("Email").value;
    const CollegeName = document.getElementById("CollegeName").value;
     const Qualification = document.getElementById("Qualification").value;

    console.log("Name : " + pn);
    console.log("ContactNo : " + cn);
    console.log("Email :" + em);
    console.log("CollegeName :"+ CollegeName);
      console.log("Qualification :"+ Qualification);

    alert("Submit Done");

     document.getElementById("PersonName").value = "";
    document.getElementById("ContactNo").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("CollegeName").value="";
    document.getElementById("Qualification" ).value="";

    

}