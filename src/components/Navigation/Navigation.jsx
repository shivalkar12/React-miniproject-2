import style from './Navigation.module.css'

const Navigation = () => {
  
  return (
    <nav className={`${style.navigation} container` }>
      <div className="logo">
        <img src="./Images/vite.svg" alt="logo" />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    
    </nav>
  )
}

export default Navigation
