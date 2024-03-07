import "./styles.css"
import HeaderLogo from './../../assets/title-header.svg'
import ProfileCircle from "../Profile/components/ProfileCircle"
import { useContext } from "react"
import { UserContext } from "../../App"


function Header() {
  const {loggedInUser} = useContext(UserContext)

  return (
    <div className="header">
      <img className="logo" src={HeaderLogo} alt="head" />
      <div className="profile-icon">
        <ProfileCircle user={loggedInUser}></ProfileCircle>
      </div>
    </div>
  )
}

export default Header