// import axios from "axios";
import { Link } from "react-router-dom";
import {useState, useEffect } from "react";
import axios from "axios";
import basket from "../images/grocery-store.ico";
 
 

function Customer(){
    let [Prods,setProds]=useState([]);
    const [displaymain, setDisplaymain] = useState(true);
    const [displayc, setDisplayc] = useState(false);

    const [formdataC,setFormDataC]=useState({
        'search':'',
    }) 

    const [Logindata, setLogindata] = useState({});
     
    

    useEffect(()=>{
        var api='http://localhost:5000/getdataProds';
        axios.get(api).then((response)=>{
            setProds(response.data.mdata);
            setFilteredData(response.data.mdata);
           
        })
    },[]);
    const [searchTerm, setSearchTerm] = useState('');
    const [cartItems, setCartItems] = useState([]);
    const cartItemCount = cartItems.length;

    const addToCart = (event, productName, price,company) => {
        console.log(cartItems);
        event.preventDefault(); // Prevent the default behavior of the event
    
        // Ensure productName and price are valid
        if (!productName || !price) {
            console.error('Invalid product name or price');
            return;
        }
    
        // Create a new item object
        const newItem = {
            user:Logindata.email,
            productName: productName,
            price: price,
            company:company,
            quantity:1,
            status:0,
        };
        
        const existingItem = cartItems.find(item => item.productName ===  productName);
        if (!existingItem) {
             
            setCartItems(prevCartItems => [...prevCartItems, newItem]);
        }
        // Update cartItems state
        // setCartItems(prevCartItems => [...prevCartItems, newItem]);
    };
    
    
    
    const removeFromCart = (index) => {
        
        setCartItems(prevCartItems => {
            const updatedCartItems = [...prevCartItems];
            updatedCartItems.splice(index, 1);
            return updatedCartItems;
        });
    };

    const incrementQuantity = (event,index) => {
        event.preventDefault();
        const newCartItems = [...cartItems];
        newCartItems[index].quantity += 1;
        setCartItems(newCartItems);
    };

    const decrementQuantity = (event,index) => {
        event.preventDefault()
        const newCartItems = [...cartItems];
        if (newCartItems[index].quantity > 1) {
            newCartItems[index].quantity -= 1;
            setCartItems(newCartItems);
        }
    };
  
    let Total=0;
     
    const [filteredData, setFilteredData] = useState([]);

    const submitsearch=(e)=>{
        e.preventDefault();
        setSearchTerm(formdataC.search);
        setDisplaymain(true);
         
    }

    const buy=()=>{
        localStorage.setItem('order', JSON.stringify(cartItems));
        window.location.href = `/payment?tr=${Total}`;
    } 
     const viewcart=()=>{
        setDisplayc(true);
        setDisplaymain(false);
     }
     const continueshopping=()=>{
        setDisplayc(false);
        setDisplaymain(true);
     }

    useEffect(() => {
        // Update filteredData when searchTerm or data changes
        const filteredResults = Prods.filter(item =>
            ((item.company && item.company.toLowerCase().includes(searchTerm.toLowerCase())) ||
             (item.productname && item.productname.toLowerCase().includes(searchTerm.toLowerCase())))
          );
        setFilteredData(filteredResults);
      }, [searchTerm, Prods]);
      
      const Loggingout=(e)=>{
        e.preventDefault();
        localStorage.removeItem('userData');
        window.location.href = '/signin' 
      }
    
       
      useEffect(() => {
        const userDataString = localStorage.getItem('userData');
        if (userDataString) {
          const userData = JSON.parse(userDataString);
          console.log(userData);
          setLogindata(userData);
        } else {
          console.log('No user data found in local storage');
        }
      }, []);
    
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-light   ">
                    <nav className='navbar navbar-expand-lg navbar navbar-expand-sm sticky-top navbar-dark bg-dark' style={{position:"fixed",width:"100%"}}>
                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
                         <div style={{float:"left"}}> 
                            <span className="fs-2 ps-2" style={{fontFamily:"Lucida Calligraphy"}}> FOODIES </span><span className="" style={{fontSize:"11px"}}>MART</span>
                        </div>
                        <div  style={{float:"left"}} className='mx-3'> 
                            <ul className="navbar-nav mr-auto " style={{display:"inline"}}>
                                <li style={{float:"left"}} className="nav-item active mx-1">
                                    <Link to={`/user`} className="nav-link "  >Home <span className="sr-only"> </span></Link>
                                </li>
                                <li style={{float:"left"}} className="nav-item active mx-1">
                                    <Link to={`/profile`} className="nav-link " >Profile <span className="sr-only"> </span></Link>
                                </li>
                                <li style={{float:"left"}} className="nav-item mx-1">
                                    <Link to={`/contact`} className="nav-link " >Contact <span className="sr-only"> </span></Link>
                                </li>
                                <li style={{float:"left"}} className="nav-item mx-1">
                                    <Link to={`/tracking`} className="nav-link " >Track orders<span className="sr-only"> </span></Link>
                                </li>
                            </ul>    
                        </div>
                        <div style={{float:"left"}} className='mx-2' > 
                            <input  className="form-control m-2" type="text" placeholder="Search..."  onChange={(e)=>setFormDataC({...formdataC,search:e.target.value})}  />
                        </div> 
                        <div style={{float:"left"}} className='mx-1'>
                            <button  className="btn btn-outline-success  text-light m-2 " type="submit" onClick={submitsearch} >Search</button>
                        </div>
                         
                        <div style={{float:"left"}} className=" ms-5  text-center pt-2">
                        <i  className="fa-solid fa-user"></i><span> {Logindata.email}</span>
                         
                        </div>

                        <div style={{float:"right"}} className="pt-2 mx-5">
                         <span className="bg-light text-dark px-1" style={{borderRadius:"50%"}}>{cartItemCount}</span> <img src={basket} alt="cart" style={{ height:"30px"} } onClick={viewcart}></img> 
                        </div>
                         
                        <div className="mx-5 pt-2" style={{float:"right"}} >
                        
                        <span onClick={Loggingout}> <i  className="fa-solid fa-right-from-bracket"> </i> <span className="mx-1">Logout</span> </span> 
                         
                        </div>
                        

                         </div>
                    </nav>
                </div>
            </div>  
            
            <div className="row mt-5"> 
                {displaymain&&( 
                <div className='row mt-5  ' style={{display: 'flex',flexWrap: 'wrap',gap: '0px',margin: '5px', }}>
                {/* {Prods &&filteredData.map((ele,index,arr)=> */}
                {Prods && filteredData.map((ele, index, arr) => {
                        return (
                            <div key={index} className='col-md-3 mt-3'>
                                        <div className="card  "   style={{height:'500px' ,borderRadius:'10px'}}   >
                                            <div className="card-header"> 
                                            <img src={ele.image} className="img-fluid img-thumbnail card-img-top poster mx-3" alt="..." style={{height:"150px",width:"300px"}} />
                                            </div>
                                            <div className="card-body">
                                                
                                                <h6>{ele.company}</h6>
                                                <h5 className="card-title">{ele.productname}</h5>
                                                <p className="card-text"><span className='fw-bold'> Type</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;&nbsp;&nbsp;{ele.type}</p>
                                                <p className='card-text'><span className='fw-bold'> Category    </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    :&nbsp;&nbsp;&nbsp;&nbsp;{ele.category}</p>
                                                <p className='card-text ' ><span className='fw-bold'> Description   </span>  &nbsp;&nbsp;&nbsp; :&nbsp;&nbsp;&nbsp;&nbsp;<span  style={{fontSize:"12px"}}> {ele.description}</span></p>
                                                 
                                
                                            </div>
                                            <div className="card-footer  text-center"> 
                                                 
                                                <button className='text-light text-center btn btn-danger  mx-1 py-2' style={{paddingLeft:"50px",paddingRight:"50px"}}>&#8377; {ele.price}</button>
                                                <button  className='text-light btn btn-primary px-2 py-2'  onClick={(event) => addToCart(event, ele.productname, ele.price,ele.company)}> <img src={basket} alt="cart" style={{ height:"20px"} }></img>  Add to cart   </button>  
                                                  
                                            </div>
                                        </div>
                                             
                                            
                                    </div>
                                         
                                   
                                )
                            }
                    )}
                    
                </div>
                 
                )}
                
            </div>   

            {displayc &&(
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-3"></div>
                        <div className="col-6">
                            <table border={5} cellPadding={10} cellSpacing={20} className="mt-5 pt-5 text-center text-light fs-5 " style={{ border: '2px solid black' }}>
                                <thead className="bg-primary">
                                    <tr>
                                        <th>S. NO</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Quantity &nbsp; &nbsp; &nbsp;</th>
                                        <th>Amount</th>
                                        <th>Remove Item</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartItems.map((ele, index) => {
                                            const Amount = ele.price * ele.quantity; // Assuming quantity is always 1
                                            Total += Amount; // Add the current amount to Total
                                            return (
                                                <tr className="bg-secondary mt-2 pt-3" style={{margin:"10px", border:"2px solid black"}} key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{ele.productName}</td>
                                                    <td>{ele.price}</td>
                                                    <td><span className="bg-light" onClick={(event) => decrementQuantity(event, index)}><i  className="fa-solid fa-minus text-dark px-1"></i></span><span className="px-2">{ele.quantity}</span> <span className="bg-light" onClick={(event) => incrementQuantity(event, index)}><i  className="fa-solid fa-plus text-dark px-1"></i></span></td>  
                                                    <td>&#8377;{Amount}</td>
                                                    <td><button className="btn btn-danger" onClick={removeFromCart}><i  className="fa-solid fa-trash me-2"></i>   Delete</button></td> {/* Add remove button here */}
                                                </tr>
                                            );
                                        })
                                    }
                                    <tr className="bg-dark">
                                        <td colSpan={4} className="fw-bolder">TOTAL</td>
                                        <td colSpan={2} className="fw-bold text-start ps-2">&#8377; {Total}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="text-center mt-5">
                            <button className="btn btn-warning" onClick={continueshopping}> Continue Shopping</button>  &nbsp;
                            <button className="btn btn-warning" onClick={buy}> BUY NOW</button> 
                                </div> 
                        </div>
                        <div className="col-3"></div>
                    </div>
                </div>
                 
                
            )}
                            
 
    </div>
    )
}
export default Customer;