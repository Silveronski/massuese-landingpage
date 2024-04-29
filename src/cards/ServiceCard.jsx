const ServiceCard = ({imgUrl, serviceName, serviceDescription}) => {
  return (
    <div className='service-card'>
        <img src={imgUrl} alt=""/>
        <h4>{serviceName}</h4>
        <p>{serviceDescription}</p>   
    </div>
  )
}

export default ServiceCard