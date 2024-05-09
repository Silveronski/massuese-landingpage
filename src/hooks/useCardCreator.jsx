import content from '../site-content-json/content.json';

const useCardCreator = (ComponentName, jsonName, imgsArray) => {
    const cardArray = Object.entries(content[jsonName]).map(([key, value], index) => (
      <ComponentName key={key} imgUrl={imgsArray[index]} {...value}/>      
    ));
    return cardArray  
}

export default useCardCreator