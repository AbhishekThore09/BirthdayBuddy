const cron = require('node-cron');
const express = require('express');
const nodemailer = require('nodemailer');
const fs = require('fs');


// Create an instance of Express
app = express();

const emailArray = [
  "lci2022001@iiitl.ac.in",
  "lci2022002@iiitl.ac.in",
  "lci2022003@iiitl.ac.in",
  "lci2022004@iiitl.ac.in",
  "lci2022005@iiitl.ac.in",
  "lci2022006@iiitl.ac.in",
  "lci2022007@iiitl.ac.in",
  "lci2022008@iiitl.ac.in",
  "lci2022009@iiitl.ac.in",
  "lci2022010@iiitl.ac.in",
  "lci2022011@iiitl.ac.in",
  "lci2022012@iiitl.ac.in",
  "lci2022013@iiitl.ac.in",
  "lci2022014@iiitl.ac.in",
  "lci2022015@iiitl.ac.in",
  "lci2022016@iiitl.ac.in",
  "lci2022017@iiitl.ac.in",
  "lci2022018@iiitl.ac.in",
  "lci2022019@iiitl.ac.in",
  "lci2022020@iiitl.ac.in",
  "lci2022021@iiitl.ac.in",
  "lci2022022@iiitl.ac.in",
  "lci2022023@iiitl.ac.in",
  "lci2022024@iiitl.ac.in",
  "lci2022025@iiitl.ac.in",
  "lci2022026@iiitl.ac.in",
  "lci2022027@iiitl.ac.in",
  "lci2022028@iiitl.ac.in",
  "lci2022029@iiitl.ac.in",
  "lci2022030@iiitl.ac.in",
  "lci2022031@iiitl.ac.in",
  "lci2022032@iiitl.ac.in",
  "lci2022033@iiitl.ac.in",
  "lci2022034@iiitl.ac.in",
  "lci2022035@iiitl.ac.in",
  "lci2022036@iiitl.ac.in",
  "lci2022037@iiitl.ac.in",
  "lci2022038@iiitl.ac.in",
  "lci2022039@iiitl.ac.in",
  "lci2022040@iiitl.ac.in",
  "lci2022041@iiitl.ac.in",
  "lci2022042@iiitl.ac.in",
  "lci2022043@iiitl.ac.in",
  "lci2022044@iiitl.ac.in",
  "lci2022045@iiitl.ac.in",
  "lci2022046@iiitl.ac.in",
  "lci2022047@iiitl.ac.in",
  "lci2022048@iiitl.ac.in",
  "lci2022049@iiitl.ac.in",
  "lci2022050@iiitl.ac.in",
  "lci2022051@iiitl.ac.in",
  "lci2022052@iiitl.ac.in",
  "lci2022053@iiitl.ac.in",
  "lci2022054@iiitl.ac.in",
  "lci2022055@iiitl.ac.in",
  "lci2022056@iiitl.ac.in",
  "lci2022057@iiitl.ac.in",
  "lci2022058@iiitl.ac.in",
  "lci2022059@iiitl.ac.in",
  "lci2022060@iiitl.ac.in",
  "lcb2022001@iiitl.ac.in",
  "lcb2022002@iiitl.ac.in",
  "lcb2022003@iiitl.ac.in",
  "lcb2022004@iiitl.ac.in",
  "lcb2022005@iiitl.ac.in",
  "lcb2022006@iiitl.ac.in",
  "lcb2022007@iiitl.ac.in",
  "lcb2022008@iiitl.ac.in",
  "lcb2022009@iiitl.ac.in",
  "lcb2022010@iiitl.ac.in",
  "lcb2022011@iiitl.ac.in",
  "lcb2022012@iiitl.ac.in",
  "lcb2022013@iiitl.ac.in",
  "lcb2022014@iiitl.ac.in",
  "lcb2022015@iiitl.ac.in",
  "lcb2022016@iiitl.ac.in",
  "lcb2022017@iiitl.ac.in",
  "lcb2022018@iiitl.ac.in",
  "lcb2022019@iiitl.ac.in",
  "lcb2022020@iiitl.ac.in",
  "lcb2022021@iiitl.ac.in",
  "lcb2022022@iiitl.ac.in",
  "lcb2022023@iiitl.ac.in",
  "lcb2022024@iiitl.ac.in",
  "lcb2022025@iiitl.ac.in",
  "lcb2022026@iiitl.ac.in",
  "lcb2022027@iiitl.ac.in",
  "lcb2022028@iiitl.ac.in",
  "lcb2022029@iiitl.ac.in",
  "lcb2022030@iiitl.ac.in",
  "lcb2022031@iiitl.ac.in",
  "lcb2022032@iiitl.ac.in",
  "lcb2022033@iiitl.ac.in",
  "lcb2022034@iiitl.ac.in",
  "lcb2022035@iiitl.ac.in",
  "lcb2022036@iiitl.ac.in",
  "lcb2022037@iiitl.ac.in",
  "lcb2022038@iiitl.ac.in",
  "lcb2022039@iiitl.ac.in",
  "lcb2022040@iiitl.ac.in",
  "lcb2022041@iiitl.ac.in",
  "lcb2022042@iiitl.ac.in",
  "lcb2022043@iiitl.ac.in",
  "lcb2022044@iiitl.ac.in",
  "lcb2022045@iiitl.ac.in",
  "lcb2022046@iiitl.ac.in",
  "lcb2022047@iiitl.ac.in",
  "lcb2022048@iiitl.ac.in",
  "lcb2022049@iiitl.ac.in",
  "lcb2022050@iiitl.ac.in",
  "lcb2022051@iiitl.ac.in",
  "lcb2022052@iiitl.ac.in",
  "lcb2022053@iiitl.ac.in",
  "lcb2022054@iiitl.ac.in",
  "lcb2022055@iiitl.ac.in",
  "lcb2022056@iiitl.ac.in",
  "lcb2022057@iiitl.ac.in",
  "lcb2022058@iiitl.ac.in",
  "lcb2022059@iiitl.ac.in",
  "lcb2022060@iiitl.ac.in",
  "iit2022001@iiitl.ac.in",
  "iit2022002@iiitl.ac.in",
  "iit2022003@iiitl.ac.in",
  "iit2022004@iiitl.ac.in",
  "iit2022005@iiitl.ac.in",
  "iit2022006@iiitl.ac.in",
  "iit2022007@iiitl.ac.in",
  "iit2022008@iiitl.ac.in",
  "iit2022009@iiitl.ac.in",
  "iit2022010@iiitl.ac.in",
  "iit2022011@iiitl.ac.in",
  "iit2022012@iiitl.ac.in",
  "iit2022013@iiitl.ac.in",
  "iit2022014@iiitl.ac.in",
  "iit2022015@iiitl.ac.in",
  "iit2022016@iiitl.ac.in",
  "iit2022017@iiitl.ac.in",
  "iit2022018@iiitl.ac.in",
  "iit2022019@iiitl.ac.in",
  "iit2022020@iiitl.ac.in",
  "iit2022021@iiitl.ac.in",
  "iit2022022@iiitl.ac.in",
  "iit2022023@iiitl.ac.in",
  "iit2022024@iiitl.ac.in",
  "iit2022025@iiitl.ac.in",
  "iit2022026@iiitl.ac.in",
  "iit2022027@iiitl.ac.in",
  "iit2022028@iiitl.ac.in",
  "iit2022029@iiitl.ac.in",
  "iit2022030@iiitl.ac.in",
  "iit2022031@iiitl.ac.in",
  "iit2022032@iiitl.ac.in",
  "iit2022033@iiitl.ac.in",
  "iit2022034@iiitl.ac.in",
  "iit2022035@iiitl.ac.in",
  "iit2022036@iiitl.ac.in",
  "iit2022037@iiitl.ac.in",
  "iit2022038@iiitl.ac.in",
  "iit2022039@iiitl.ac.in",
  "iit2022040@iiitl.ac.in",
  "iit2022041@iiitl.ac.in",
  "iit2022042@iiitl.ac.in",
  "iit2022043@iiitl.ac.in",
  "iit2022044@iiitl.ac.in",
  "iit2022045@iiitl.ac.in",
  "iit2022046@iiitl.ac.in",
  "iit2022047@iiitl.ac.in",
  "iit2022048@iiitl.ac.in",
  "iit2022049@iiitl.ac.in",
  "iit2022050@iiitl.ac.in",
  "iit2022051@iiitl.ac.in",
  "iit2022052@iiitl.ac.in",
  "iit2022053@iiitl.ac.in",
  "iit2022054@iiitl.ac.in",
  "iit2022055@iiitl.ac.in",
  "iit2022056@iiitl.ac.in",
  "iit2022057@iiitl.ac.in",
  "iit2022058@iiitl.ac.in",
  "iit2022059@iiitl.ac.in",
  "iit2022060@iiitl.ac.in",
  "lcs2022001@iiitl.ac.in",
  "lcs2022002@iiitl.ac.in",
  "lcs2022003@iiitl.ac.in",
  "lcs2022004@iiitl.ac.in",
  "lcs2022005@iiitl.ac.in",
  "lcs2022006@iiitl.ac.in",
  "lcs2022007@iiitl.ac.in",
  "lcs2022008@iiitl.ac.in",
  "lcs2022009@iiitl.ac.in",
  "lcs2022010@iiitl.ac.in",
  "lcs2022011@iiitl.ac.in",
  "lcs2022012@iiitl.ac.in",
  "lcs2022013@iiitl.ac.in",
  "lcs2022014@iiitl.ac.in",
  "lcs2022015@iiitl.ac.in",
  "lcs2022016@iiitl.ac.in",
  "lcs2022017@iiitl.ac.in",
  "lcs2022018@iiitl.ac.in",
  "lcs2022019@iiitl.ac.in",
  "lcs2022020@iiitl.ac.in",
  "lcs2022021@iiitl.ac.in",
  "lcs2022022@iiitl.ac.in",
  "lcs2022023@iiitl.ac.in",
  "lcs2022024@iiitl.ac.in",
  "lcs2022025@iiitl.ac.in",
  "lcs2022026@iiitl.ac.in",
  "lcs2022027@iiitl.ac.in",
  "lcs2022028@iiitl.ac.in",
  "lcs2022029@iiitl.ac.in",
  "lcs2022030@iiitl.ac.in",
  "lcs2022031@iiitl.ac.in",
  "lcs2022032@iiitl.ac.in",
  "lcs2022033@iiitl.ac.in",
  "lcs2022034@iiitl.ac.in",
  "lcs2022035@iiitl.ac.in",
  "lcs2022036@iiitl.ac.in",
  "lcs2022037@iiitl.ac.in",
  "lcs2022038@iiitl.ac.in",
  "lcs2022039@iiiitl.ac.in",
  "lcs2022040@iiiitl.ac.in",
  "lcs2022041@iiiitl.ac.in",
  "lcs2022042@iiiitl.ac.in",
  "lcs2022043@iiiitl.ac.in",
  "lcs2022044@iiiitl.ac.in",
  "lcs2022045@iiiitl.ac.in",
  "lcs2022046@iiiitl.ac.in",
  "lcs2022047@iiiitl.ac.in",
  "lcs2022048@iiiitl.ac.in",
  "lcs2022049@iiiitl.ac.in",
  "lcs2022050@iiiitl.ac.in",
  "lcs2022051@iiiitl.ac.in",
  "lcs2022052@iiiitl.ac.in",
  "lcs2022053@iiiitl.ac.in",
  "lcs2022054@iiiitl.ac.in",
  "lcs2022055@iiiitl.ac.in",
  "lcs2022056@iiiitl.ac.in",
  "lcs2022057@iiiitl.ac.in",
  "lcs2022058@iiiitl.ac.in",
  "lcs2022059@iiiitl.ac.in",
  "lcs2022060@iiiitl.ac.in"];


// Mail transport configuration
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shubhchintakiiitl@gmail.com',
    pass: 'ijjx bvqg cdhm cqpt',
  },
  tls: {
    rejectUnauthorized: false,
  },
});




// console.log("a");
cron.schedule('0 0 * * *', function () {
    console.log('Running Cron Process');
    var obj;
fs.readFile('./index.json', 'utf8', async function (err, data) {
  if (err) throw err;
  obj =await JSON.parse(data);

  console.log(obj);


let currentDate = new Date();

// Convert to IST
let options = { timeZone: 'Asia/Kolkata' };
let ISTDateString = currentDate.toLocaleString('en-IN', options);

// console.log( ISTDateString);

  const splitDate=ISTDateString.split("/");
  const date=Number(splitDate[0]);
  const month=Number(splitDate[1]);

//   console.log(date,month);


  for (var i=0;i<obj.length;i++){
        const dob=obj[i].DoB;
        const dobDate=dob[0]+dob[1];
        const dobMonth=dob[3]+dob[4];

        // console.log(dobDate,dobMonth);


    if(dobDate==date && dobMonth==month){
        // console.log(obj[i].Gender)
        if(obj[i].Gender==="Male"){
        console.log('---------------------');
        console.log('Running Cron Process');
       

        const name=obj[i].Name;
        let mailOptions = {
            from: 'shubhchintakiiitl@gmail.com',
            to: emailArray, // this field must be changed with respect to database
            subject: 'Happy Birthday '+name,
            text:`Happy Birthday!!!!`,

            // html: '<b>The html content</b>'
          };
        // Delivering mail with sendMail method
        try{transporter.sendMail(mailOptions, (error, info) => {
          if (error) console.log(error);
          else console.log('Email sent: ' + info.response);
        });}
        catch(e){
          console.log(e);
        } 
    }
    else{
        console.log('---------------------');
        console.log('Running Cron Process');
       

        const name=obj[i].Name;
        let mailOptions = {
            from: 'shubhchintakiiitl@gmail.com',
            to: emailArray, // this field must be changed with respect to database
            subject: 'Hope your birthday is as great as you are '+name,
            text: `Happy Birthday!!!!!`,
            // html: '<b>The html content</b>'
          };
        // Delivering mail with sendMail method
        try{transporter.sendMail(mailOptions, (error, info) => {
          if (error) console.log(error);
          else console.log('Email sent: ' + info.response);
        });}
        catch(e){
          console.log(e);
        } 
    }
    }
  }
  
});

    

});




app.listen(3010);