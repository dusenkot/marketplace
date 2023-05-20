import React from 'react';
import style from './profile.css'
import image from  './pic.png'
import image2 from  './default.jpg'

function Profile(){
    return(
        <div >
            <div>
                <div id="wsp">
                    <div id="yor">The start-uppers profile</div>
                    <img src={image2} style={style.img} id="prof"/>
                    <img src={image} style={style.img} id="back"/>
                
            </div>
        <div id="pl" style={style.pl}>
            <h4 id="p">Name and Surname</h4>
            <form >
                <input type="file"  id="avatar"  name="avatar" accept="image/png, image/jpeg"/>
               
            </form>
            
            
            <button>Contact with me</button>
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