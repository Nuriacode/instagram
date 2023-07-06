const FeedUsers = ({eachUserFeed, listImages}) => {

  const dataImages = listImages.map ((eachImage) => {
    return (
      <>
      <img src={eachImage.url} alt={eachImage.url}/>
      </>
    )
  })

  return (
<li className="userList">
            <img className="userList--img" src={eachUserFeed.photo} alt={eachUserFeed.name}/>
            <h2 className="userList--text">
                {eachUserFeed.name}
            </h2>
            <div>
              {dataImages}
            </div>
        </li>
  )
}

export default FeedUsers;