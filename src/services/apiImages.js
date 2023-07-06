const getDataPictures = () => {
    return (
        fetch ("https://picsum.photos/v2/list")
        .then((response)=> response.json())
        .then ((images)=> {
            console.log(images)
            const dataImages = images.map((eachImage) => {
                return {
                    id: eachImage.id,
                    url: eachImage.download_url,
                };
            });
            return dataImages
        })
    )
}

export default getDataPictures;