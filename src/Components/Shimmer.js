const Shimmer=()=>{
  return(
    <div className="Restaurant-list">
        {Array(20).fill("").map((card,index)=>{
           return <div key={index} className="shimmer-card">
            </div>
        })}
    </div>
  )
}

export default Shimmer