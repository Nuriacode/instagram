
const StoriesNav = ({listUsers}) => {

    const dataUsers = listUsers.map((eachUser) => {
        return (
            <div>
                <p>Name: {eachUser.name}</p>
            </div>
        )
    })
    return (
        <ul>
            {dataUsers}
        </ul>
    )
}

export default StoriesNav;