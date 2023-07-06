const getDataUsers = () => {
    return (
        fetch ("https://randomuser.me/api/?results=50")
        .then((response)=> response.json())
        .then ((data)=> {
            // console.log(data.results)
            const dataUsers = data.results.map((eachUser) => {
                return {
                    name: eachUser.name.first,
                    last: eachUser.name.last,
                    photo: eachUser.picture.medium,
                    id: eachUser.login.uuid
                };
            });
            return dataUsers
        })
    )
}

export default getDataUsers;