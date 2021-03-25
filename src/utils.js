const paginate = (data) => {
    const itemPerpage = 4
    const pages = Math.ceil( data.length / itemPerpage)
    
    const newItems = Array.from({length:pages},(_,index)=>{
        const start = index* itemPerpage
        const tempItems = data.slice(start,start+itemPerpage)
        return tempItems
        
    })
return  newItems
}

export default paginate
