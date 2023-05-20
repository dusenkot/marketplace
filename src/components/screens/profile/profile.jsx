import React from 'react';
import './App.css';
import style from './profile.css'

function Profile(){
    return(
        <div className={style.body} >
            <div>
        <h1>Profile</h1>
        <div id="pl">
            <img src="default.jpg"/>
            <form >
                <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"/>
            </form>
            
            <h4 id="p">Name and Surname</h4>
        </div>
        <div id="pr">
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