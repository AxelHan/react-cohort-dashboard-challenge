import { useState, useEffect } from "react"
import ProfileCircle from "../../Profile/components/ProfileCircle"

function Comment({comment}) {
  const [user, setUser] = useState({
    firstName: "Def",
    lastName: "Def"
  })

  const fetchUser = () => {
    fetch(`https://boolean-api-server.fly.dev/AxelHan/contact/${comment.contactId}`)
    .then((res) => res.json())
    .then((data) => {
      setUser(data)
    })
  }


  useEffect(() => {
    fetchUser()
  }, [])


  return (
    <div className="comment-item">
      <div className="comment-profile">
        <ProfileCircle user={user} ></ProfileCircle>
      </div>
      <div className="comment-content">
        <p>{comment.content}</p>
      </div>
    </div>
  )
}

export default Comment

