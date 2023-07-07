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

  return (
    <>
    <div>
      {dataUsersFeed}
    </div>
 
      </>
  );
};

export default FeedImages;
