import FeedUsers from '../profile/FeedUsers';

const FeedImages = ({ listImages, listUsers }) => {
  
  const dataUsersFeed = listUsers.map((eachUserFeed) => {
    return (
      <FeedUsers
        key={eachUserFeed.id}
        eachUserFeed={eachUserFeed}
        listImages={listImages}
      />
    );
  });

//   const dataImages = listImages.map((eachImage) => {
//     return (
//       <>
//       <ul>
//         <li key={eachImage.id}>
//              <img src={eachImage.url} alt={eachImage.url}></img>
//         </li>
//       </ul>
       
//       </>
//     );
//   });

  return (
    <>
    <div>
      {dataUsersFeed}
         {/* <div>{dataImages}</div> */}
    </div>
 
      </>
  );
};

export default FeedImages;
