import React from 'react';
import style from './profile.css'
import image from  './pic.png'
import image2 from  './default.jpg'

function Profile(){
    return(
        <div >
            <div>
        <h1>Profile</h1>
        <div id="pl" style={style.pl}>
            <div id="wsp">
                <img src={image2} style={style.img} id="prof"/>
                <img src={image} style={style.img} id="back"/>
            </div>
            
            <form >
                <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"/>
            </form>
            
            <h4 id="p">Name and Surname</h4>
        </div>
        <div id="pr" style={style.pr}>
            <h2>Description of the start-up</h2>
            <form>
                <input type="text" id="text" name="text" value="You can enter description here"/>
            </form>

        </div>
    </div>

        </div>

    )
}


export default Profile