export const JewelryItem = ([
    name,
    color,
]) => {
    return (
        <>
        <h1>Item</h1>
        <div >
        {/* <div><img src={image} alt={description}/></div> */}
        <div>Name: <span>{name}</span></div>
        <div>Color: <span>{color}</span></div>
        {/* <div>Category: <span>{category}</span></div>
        <div>Price: <span>{price} bgn</span></div> */}
    
        <div>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    </div>
    </>
    );
}