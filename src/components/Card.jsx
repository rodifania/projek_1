

const Card = ({src, text}) => {
    try {
        return (
            <div>
                <img src={src} alt=''/>
                <h1>
                    {text}
                </h1>
            </div>
          )
        
    } catch (error) {
        console.log(error)
        
    }
  
}

export default Card