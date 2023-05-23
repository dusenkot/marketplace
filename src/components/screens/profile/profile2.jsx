import React, { useRef } from 'react';
import style from './profile.css';
import image from './pic.png';
import image2 from './default.jpg';
import App from '../home/form-send/forms-sends';
import backgroundImage from './sky1.jpg';

function Bound() {
  const inputRef = useRef(null);

  const handleFileSelect = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log('You selected the file:', file);
  };

  
}

function Profile2() {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',}}>
      <App />
      <div >
        <div id="wsp">
          <img src={image2} style={style.img} id="prof" />
          <img src={image} style={style.img} id="back" />
          <p id="profil">Profile of start-upper</p>

          
        </div>
        <div id="pl" style={style.pl}>
          <h4 id="p">Pablo Kowalski</h4>
          <ul>
            <li>
              <Bound />
            </li>
            <li>
              <a href="#">Contact with me</a>
            </li>
           </ul>
        </div>





        <div id="pr" style={style.pr}>
          <h2 id="inf">Personal information</h2>
          <form>
            <input readOnly type="text" id="text" name="text" defaultValue="email:w00000@student.wsiz.edu.pl,  numer telefonu:+4812345612" />
          </form>
          <h2>Description of the start-up</h2>
          <form>
            <input readOnly
              type="text"
              id="text"
              name="text"
              defaultValue="Please, don't describe your project in detail. Wait until the investor contracts with you"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

const styles = {
  background: {
    background: 'linear-gradient(to bottom right, #005c98, #005c98 0%, #003261 0%, #005c98 75%)',
    minHeight: '100vh',
  },
}
export default Profile2;
