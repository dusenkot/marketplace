import CreateFormStartup from './ create-form-startup/CreateFormStartup'
import style from './Home.module.css'
import App from './form-send/forms-sends'

function Home() {

  return (
  <div className={style.item}>
    <div><h1>Profite Pulse</h1></div>
    <div><h1>Menu</h1></div>
    <div><App /></div>
  </div>
  )
}

export default Home
