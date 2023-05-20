import React from 'react';
import style from './profile.css'
import image from  './pic.png'
import image2 from  './startuper.jpg'

function Profile(){
    return(
        <div >
            <div>
                <div id="wsp">
                    <div id="yor">The start-uppers profile</div>
                    <img src={image2} style={style.img} id="prof"/>
                    <div>
                        <img src={image} style={style.img} id="back"/>
                        <p>Profile of start-upper</p>
                    </div>
                    
                
            </div>
        <div id="pl" style={style.pl}>
            <h4 id="p">Wojciech Nowak</h4>
            <ul>
                 <li><a href="">Choose avatar picture</a></li>
                 <li><a href="">Contact with me</a></li>
                 <li><a href="">Your wallet</a></li>
            </ul>
        </div>
        <div id="pr" style={style.pr}>
        <h2>Personal information</h2>
            <form>
                <input type="text" id="text" name="text" value="Tell something about yourself"/>
            </form>
            <h2>Description of the start-up</h2>
            <form>
                <input type="text" id="text" name="text" value="Please, don`t discribe your project in details. wait until the investor contracts with you"/>
            </form>

        </div>
    </div>

        </div>

    )
}


export default Profile