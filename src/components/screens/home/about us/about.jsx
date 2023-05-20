import React from 'react';
import profile from './a22.jpg';
import bgimage_prof from './a23.png';
import bg from './12.jpeg';
import line from './linia.png';
function About() {
  return (
    <div style={styles.container}>
        <img src = {line} style = {styles.line}></img>
      <h1 style={styles.heading}>Your Future - </h1>
      <p style={styles.heading1}>starts here</p>
      <p style = {styles.aboutus}>The product consists of buying and selling start-ups, has potential expansion opportunities in the areas of hiring workers, 
        selling finished products. Product users are divided into 2 categories: investors and startups. Investors will have access to
         the list of "offers", the "offer" consists of: the name of the startup, a link to the profile in the form of a start-up name,
          a short description of its startup.</p>
          
          <hr style = {styles.linia}></hr>
      <p style={styles.text}>Why should you choose us?</p>
      <p style={styles.text_main}>
        So, we have user-friendly interface, convenience and security, smart communication, quality feedback, development and improvement of the platform
      </p>
      <p style={styles.users_proposals}>Our users and their proposals</p>
      <div style={styles.main_div}>
        <div style = {styles.image1}><img src={profile} style = {styles.img1} alt = ''></img></div>
        <div style = {styles.image2}><img src={profile} style = {styles.img2} alt = ''></img>  </div>
        <div style = {styles.image3}><img src={profile} style = {styles.img3} alt = ''></img></div>
    </div>
    <div style = {styles.full_inf}>
    <p style = {styles.addinf1}>Additional information about staruppers and theit startups</p>
    <p style = {styles.addinf2}>Additional information about staruppers and theit startups</p>
    <p style = {styles.addinf3}>Additional information about staruppers and theit startups</p>
    </div>
   
    </div>
  );
}

const styles = {
  container: {
    background: 'linear-gradient(to bottom right, #005c98, #005c98 0%, #003261 0%, #005c98 75%)',
    color: '#ffffff',
    padding: '20px',
    textAlign: 'left',
  },
  line:{
    float:"right",
    height:'1160px',
    width:'450px%'
  },
  aboutus:{
    textShadow:"1px 1px 1px pink",
    marginLeft:"40px",
    color:"#848482",
    width:"800px",
    marginTop:"30px",
    marginBotton:"80px",
    fontSize:"25px"
  },
  h1:{
    fontWeight: "100",
  },
  heading: {
    fontFamily:"",
    fontWeight: "100",
    paddingLeft: '20px',
    fontSize: '75px',
    marginBottom: '0px',
  },
  heading1: {
    fontWeight: "100",
    fontSize: '67px',
    marginBottom: '70px',
    marginLeft: '340px',
    marginTop: '0px',
  },
  linia:{
    marginRight:"500px",
    width:"70%"
  },
  text: {
    marginTop:"100px",
    paddingLeft: '15px',
    fontSize: '30px',
  },
  text_main: {
    textShadow:"1px 1px 1px pink",
    color: "gray",
    fontSize: '22px',
    width: "500px"
  },
  users_proposals: {
    marginLeft: '34%',
    fontSize: '34px',
  },

  main_div: {
    display: 'flex',
  },
  img1:{
    marginLeft:'70px',
    borderRadius:"20%",
    width:"200px",
    height:"auto"
  },
  img2:{
    width:"200px",
    height:"auto",
    borderRadius:"20%",
  },
  img3:{
    marginLeft:'70px',
    width:"200px",
    height:"auto",
    borderRadius:"20%",
  },
  image1:{
    width:"300px",
    height:"100px",
    marginLeft:"70px",
    marginRight:"250px",
    backgroundImage:`url(${bgimage_prof})`,
    backgroundSize: "cover",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat"
  },
  image3:{
    width:"300px",
    height:"100px",
    marginLeft:"230px",
  },
addinf1:{
    marginLeft:"130px",
    width:"200px",
    textAlign: "center"
},
addinf2:{
    marginLeft:"290px",
    width:"200px",
    textAlign: "center"
},
addinf3:{
    marginLeft:"300px",
    width:"200px",
    textAlign: "center"
},
full_inf:{
    display:"flex"
}

};

export default About;
