import "../../styles/profile/storiesNav.scss";

const UsersStories = ({eachUser}) => {
    return (
        <li className="userList" key={eachUser.id}>
            <img className="userList--img" src={eachUser.photo} alt={eachUser.name}/>
            <h2 className="userList--text">
                {eachUser.name}
            </h2>

            
        </li>
    )
}

export default UsersStories;