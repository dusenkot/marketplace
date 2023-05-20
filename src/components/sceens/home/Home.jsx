import CreateFormStartup from './ create-form-startup/CreateFormStartup'
import style from './Home.module.css'

function Home() {

  return (
    <div>
    <h1>Cars catalog</h1>
    <div>
        <div className={style.item}>
        <h2>car1</h2>
        <p>100 000$</p>
        <button>read more</button>
        <CreateFormStartup />
        </div>
    </div>
  </div>
  )
}

export default Home
