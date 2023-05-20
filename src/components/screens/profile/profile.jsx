import React from 'react';
import style from './profile.css'

function Profile(){
    return(
        <div style={style.t} >
            <div>
        <h1>Profile</h1>
        <div id="pl" style={style.pl}>
            <img src="default.jpg" style={style.img}/>
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