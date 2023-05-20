import CreateFormStartup from './ create-form-startup/CreateFormStartup'
import style from './Home.module.css'

function Home() {

  return (
  <div>
    <div class="navbar">  
    <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Home</a>
    <a href="#"><i class="fa fa-fw fa-search"></i> Search</a>
    <a href="#"><i class="fa fa-fw fa-envelope"></i> Contact</a>
    <a href="#"><i class="fa fa-fw fa-user"></i> Login</a>
  </div>
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
