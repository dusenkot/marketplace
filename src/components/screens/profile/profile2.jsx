import React, { useRef } from 'react';
import style from './profile.css';
import image from './pic.png';
import image2 from './startuper.jpg';
import App from '../home/form-send/forms-sends';


function Bound() {
  const inputRef = useRef(null);

  const handleFileSelect = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log('You selected the file:', file);
  };

  return (
    <div>
        
      <input
        type="file"
        id="avatar"
        name="avatar"
        accept="image/png, image/jpeg"
        style={{ display: 'none' }}
        ref={inputRef}
        onChange={handleFileChange}
      />
      <a href="#" onClick={handleFileSelect}>
        Choose avatar picture
      </a>
    </div>
  );
}

function Profile() {
  return (
    <div style={styles.background}>
      <App />
      <div >
        <div id="wsp">
          <img src={image2} style={style.img} id="prof" />
          <img src={image} style={style.img} id="back" />
          <p id="profil">Profile of start-upper</p>

          
        </div>
        <div id="pl" style={style.pl}>
          <h4 id="p">Wojciech Nowak</h4>
          <ul>
            <li>
              <Bound />
            </li>
            <li>
              <a href="#">Contact with me</a>
            </li>
            <li>
              <a href="#">Your wallet</a>
            </li>
          </ul>
        </div>





        <div id="pr" style={style.pr}>
          <h2 id="inf">Personal information</h2>
          <form>
            <input type="text" id="text" name="text" defaultValue="Tell something about yourself" />
          </form>
          <h2>Description of the start-up</h2>
          <form>
            <input
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
export default Profile;
