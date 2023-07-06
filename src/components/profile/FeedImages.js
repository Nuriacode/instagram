const FeedImages = ({ listImages, listUsers }) => {
  const dataUsers = listUsers.map((eachUser) => {
    return (
      <div>
        <ul>
          <li key={eachUser.id}>
            <img src={eachUser.photo} alt={eachUser.name} />
            <p>{eachUser.name}</p>
          </li>
        </ul>
      </div>
    );
  });

  const dataImages = listImages.map((eachImage) => {
    return (
      <>
      <ul>
        <li key={eachImage.id}>
             <img src={eachImage.url} alt={eachImage.url}></img>
        </li>
      </ul>
       
      </>
    );
  });

  return (
    <>
    <div>
      {dataUsers}
         <div>{dataImages}</div>
    </div>
 
      </>
  );
};

export default FeedImages;
