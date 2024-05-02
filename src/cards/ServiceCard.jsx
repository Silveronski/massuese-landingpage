const ServiceCard = ({imgUrl, serviceName, serviceDescription}) => {
  return (
    <div className='service-card'>
        <div className="img-container">
          <img src={imgUrl} alt=""/>
        </div>  
        <h4>{serviceName}</h4>
        <p>{serviceDescription}</p>   
    </div>
  )
}

export default ServiceCard