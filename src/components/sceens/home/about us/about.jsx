function About(){
    const title1 = {
        fontSize : "100px",
    }
    const title2 = {
        margin:"15px",
        paddingLeft: "100px",
        fontSize: "80px"
    }
    const body = {
        backgroundColor:"blue"
    }
    const chooseus = {
        fontSize:"70px",
        paddingLeft: "25px"
    }
    const choosseus1 = {
        paddingLeft:"35px"
    }
    const our_users = {
        paddingLeft:"47%",
        fontSize: ""
    }
    return(
        <div style = {body}>
            <h1 class="title1" style = {title1}>Your future - </h1><h2 style = {title2}>starts here</h2>
    <h3 style = {chooseus}>Why should you choose us?</h3>
    <p style = {chooseus1}>user-friendly interface, convenience and security, smart communication, quality feedback, development and improvment of the platform</p>
    <h2 style = {our_users}>Our users and their proposals</h2>
        </div>

    )
}

export default About