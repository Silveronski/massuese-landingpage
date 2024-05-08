const ServiceCard = ({imgUrl, name, description}) => {
  return (
    <div className='service-card'>
        <div className="img-container">
          <img src={imgUrl} alt=""/>
        </div>  
        <h4>{name}</h4>
        <p>{description}</p>   
    </div>
  )
}

export default ServiceCard