import { useAppStore } from "@/store"

const Profile = () => {

  const {userInfo} = useAppStore()

  return (
    <div>
      Email: {userInfo.email}
    </div>
  )
}

export default Profile