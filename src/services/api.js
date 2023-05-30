const getDataUsers = () => {
    return (
        fetch ("https://randomuser.me/api/?results=500")
        .then((response)=> response.json())
        .then ((data)=> {
            const dataUsers = data.map((eachUser)=> {
                return {
                    name: eachUser.name,
                    photo: eachUser.picture.medium
                }
            })
        })
    )
}

export default getDataUsers;