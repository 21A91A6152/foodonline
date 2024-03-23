import { Link } from "react-router-dom";
import homeimg from '../images/home.jpg';
import  logo from '../images/170750310/Logo Files/For Web/png/Black logo - no background.png';

 

function Home(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-dark">
                <nav class="navbar sticky-top navbar-expand-lg  " style={{position:"sticky",top:'0px'}}>
                            <div class=" col-md-4 col-sm-11">
                                    
                                    <img className="navbar-brand" src={logo} alt="logo" style={{height:"50px",width:'300px'}}></img>
                                    <button class="navbar-toggler" style={{float:"right"}} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <i class="fas fa-bars"></i>
                                    </button>
                                   
                            </div>
                            <div className="col-8">
                                       
                                            <div class="collapse navbar-collapse  " id="navbarSupportedContent" style={{float:"right",paddingRight:"60px"}} >
                                                <ul class="navbar-nav mr-auto w-100 justify-content-end">
                                                    <li class="nav-item active">
                                                        <a class="nav-link   fw-bold" href="#home" >Home <span class="sr-only">(current)</span></a>
                                                    </li>
                                                    <li class="nav-item">
                                                    <a class="nav-link  fw-bold" href="#about" >About</a>
                                                    </li>
                                                    <li class="nav-item">
                                                    <a class="nav-link   fw-bold" href="#contact" >Contact</a>
                                                    </li>
                                                    <li class="nav-item">
                                                    <a class="nav-link   fw-bold" href="#services" >Services</a>
                                                    </li>  
                                                </ul>
                                            </div>
                                      
                            </div>
                            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
                            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
           
                        </nav>
                </div>
            </div>
            
            <div className="row" id="home">  
                <div className='card'>
                    <img src={homeimg} alt='' className='img-fluid' style={{height:"600px",position:"relative",top:'0px'}} ></img>
                    <div className="card-img-overlay text-center ">
                     
                    </div>
                    <div className="card-img-overlay text-center" style={{position:"absolute",top:"300px"}}>
                        
                        
                        <div className='mt-2'>
                            <Link to={`/register`}><button className='btn btn-warning py-2 px-5 fs-3'>Sign up</button></Link>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <Link to={`/signin`}><button className='btn btn-warning py-2 px-5 fs-3'>Sign in</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row " id="about">
                <div className="col-11 mx-md-5">
                    <h1 className="text-dark fw-bolder">About us</h1>
                    <p className=" text-dark fst-italic ">
                        &nbsp;&nbsp;&nbsp;&nbsp;"Welcome to FOODIE MART, where we bring the finest culinary delights right to your doorstep.Our team is committed to offering a wide selection of high-quality food at competitive prices. At FOODIE MART, we are passionate about good food and believe that everyone deserves access to fresh, delicious ingredients.  With a focus on customer satisfaction, we strive to ensure that every purchase meets your expectations. Our mission is to make gourmet dining experiences accessible to all, offering a curated selection of premium products sourced from local farms and artisanal producers. From farm-fresh produce to gourmet specialties, we are here to elevate your dining experience. Join us on a journey of flavor exploration and culinary delight. Welcome to the world of FOODIE MART.  
 
                    </p>
                </div>
            </div>
            <div className="row " id="services">
                <div className="col-11 mx-md-5">
                    <h1 className="text-dark fw-bolder">Services</h1>
                    <p className=" text-dark fst-italic ">
                        &nbsp;&nbsp;&nbsp;&nbsp;"Welcome to FOODIE MART, where we bring the finest culinary delights right to your doorstep.Our team is committed to offering a wide selection of high-quality food at competitive prices. At FOODIE MART, we are passionate about good food and believe that everyone deserves access to fresh, delicious ingredients.  With a focus on customer satisfaction, we strive to ensure that every purchase meets your expectations. Our mission is to make gourmet dining experiences accessible to all, offering a curated selection of premium products sourced from local farms and artisanal producers. From farm-fresh produce to gourmet specialties, we are here to elevate your dining experience. Join us on a journey of flavor exploration and culinary delight. Welcome to the world of FOODIE MART.  
 
                    </p>
                </div>
            </div>
            <p>For a food e-commerce website, you can tailor the "About Us" code to highlight aspects specific to food products. Here's a sample for a food e-commerce website:

"Welcome to [Your Food E-commerce Website Name], where we bring the finest culinary delights right to your doorstep. At [Your Food E-commerce Website Name], we are passionate about good food and believe that everyone deserves access to fresh, delicious ingredients. Our mission is to make gourmet dining experiences accessible to all, offering a curated selection of premium products sourced from local farms and artisanal producers. From farm-fresh produce to gourmet specialties, we are here to elevate your dining experience. Join us on a journey of flavor exploration and culinary delight. Welcome to the world of [Your Food E-commerce Website Name]." 

Feel free to adjust and personalize this code to better reflect the unique offerings and mission of your food e-commerce website.For a food e-commerce website, you can tailor the "About Us" code to highlight aspects specific to food products. Here's a sample for a food e-commerce website:

"Welcome to [Your Food E-commerce Website Name], where we bring the finest culinary delights right to your doorstep. At [Your Food E-commerce Website Name], we are passionate about good food and believe that everyone deserves access to fresh, delicious ingredients. Our mission is to make gourmet dining experiences accessible to all, offering a curated selection of premium products sourced from local farms and artisanal producers. From farm-fresh produce to gourmet specialties, we are here to elevate your dining experience. Join us on a journey of flavor exploration and culinary delight. Welcome to the world of [Your Food E-commerce Website Name]." 

Feel free to adjust and personalize this code to better reflect the unique offerings and mission of your food e-commerce website.For a food e-commerce website, you can tailor the "About Us" code to highlight aspects specific to food products. Here's a sample for a food e-commerce website:

"Welcome to [Your Food E-commerce Website Name], where we bring the finest culinary delights right to your doorstep. At [Your Food E-commerce Website Name], we are passionate about good food and believe that everyone deserves access to fresh, delicious ingredients. Our mission is to make gourmet dining experiences accessible to all, offering a curated selection of premium products sourced from local farms and artisanal producers. From farm-fresh produce to gourmet specialties, we are here to elevate your dining experience. Join us on a journey of flavor exploration and culinary delight. Welcome to the world of [Your Food E-commerce Website Name]." 

Feel free to adjust and personalize this code to better reflect the unique offerings and mission of your food e-commerce website.For a food e-commerce website, you can tailor the "About Us" code to highlight aspects specific to food products. Here's a sample for a food e-commerce website:

"Welcome to [Your Food E-commerce Website Name], where we bring the finest culinary delights right to your doorstep. At [Your Food E-commerce Website Name], we are passionate about good food and believe that everyone deserves access to fresh, delicious ingredients. Our mission is to make gourmet dining experiences accessible to all, offering a curated selection of premium products sourced from local farms and artisanal producers. From farm-fresh produce to gourmet specialties, we are here to elevate your dining experience. Join us on a journey of flavor exploration and culinary delight. Welcome to the world of [Your Food E-commerce Website Name]." 

Feel free to adjust and personalize this code to better reflect the unique offerings and mission of your food e-commerce website.For a food e-commerce website, you can tailor the "About Us" code to highlight aspects specific to food products. Here's a sample for a food e-commerce website:

"Welcome to [Your Food E-commerce Website Name], where we bring the finest culinary delights right to your doorstep. At [Your Food E-commerce Website Name], we are passionate about good food and believe that everyone deserves access to fresh, delicious ingredients. Our mission is to make gourmet dining experiences accessible to all, offering a curated selection of premium products sourced from local farms and artisanal producers. From farm-fresh produce to gourmet specialties, we are here to elevate your dining experience. Join us on a journey of flavor exploration and culinary delight. Welcome to the world of [Your Food E-commerce Website Name]." 

Feel free to adjust and personalize this code to better reflect the unique offerings and mission of your food e-commerce website.For a food e-commerce website, you can tailor the "About Us" code to highlight aspects specific to food products. Here's a sample for a food e-commerce website:

"Welcome to [Your Food E-commerce Website Name], where we bring the finest culinary delights right to your doorstep. At [Your Food E-commerce Website Name], we are passionate about good food and believe that everyone deserves access to fresh, delicious ingredients. Our mission is to make gourmet dining experiences accessible to all, offering a curated selection of premium products sourced from local farms and artisanal producers. From farm-fresh produce to gourmet specialties, we are here to elevate your dining experience. Join us on a journey of flavor exploration and culinary delight. Welcome to the world of [Your Food E-commerce Website Name]." 

Feel free to adjust and personalize this code to better reflect the unique offerings and mission of your food e-commerce website.For a food e-commerce website, you can tailor the "About Us" code to highlight aspects specific to food products. Here's a sample for a food e-commerce website:

"Welcome to [Your Food E-commerce Website Name], where we bring the finest culinary delights right to your doorstep. At [Your Food E-commerce Website Name], we are passionate about good food and believe that everyone deserves access to fresh, delicious ingredients. Our mission is to make gourmet dining experiences accessible to all, offering a curated selection of premium products sourced from local farms and artisanal producers. From farm-fresh produce to gourmet specialties, we are here to elevate your dining experience. Join us on a journey of flavor exploration and culinary delight. Welcome to the world of [Your Food E-commerce Website Name]." 

Feel free to adjust and personalize this code to better reflect the unique offerings and mission of your food e-commerce website.For a food e-commerce website, you can tailor the "About Us" code to highlight aspects specific to food products. Here's a sample for a food e-commerce website:

"Welcome to [Your Food E-commerce Website Name], where we bring the finest culinary delights right to your doorstep. At [Your Food E-commerce Website Name], we are passionate about good food and believe that everyone deserves access to fresh, delicious ingredients. Our mission is to make gourmet dining experiences accessible to all, offering a curated selection of premium products sourced from local farms and artisanal producers. From farm-fresh produce to gourmet specialties, we are here to elevate your dining experience. Join us on a journey of flavor exploration and culinary delight. Welcome to the world of [Your Food E-commerce Website Name]." 

Feel free to adjust and personalize this code to better reflect the unique offerings and mission of your food e-commerce website.For a food e-commerce website, you can tailor the "About Us" code to highlight aspects specific to food products. Here's a sample for a food e-commerce website:

"Welcome to [Your Food E-commerce Website Name], where we bring the finest culinary delights right to your doorstep. At [Your Food E-commerce Website Name], we are passionate about good food and believe that everyone deserves access to fresh, delicious ingredients. Our mission is to make gourmet dining experiences accessible to all, offering a curated selection of premium products sourced from local farms and artisanal producers. From farm-fresh produce to gourmet specialties, we are here to elevate your dining experience. Join us on a journey of flavor exploration and culinary delight. Welcome to the world of [Your Food E-commerce Website Name]." 

Feel free to adjust and personalize this code to better reflect the unique offerings and mission of your food e-commerce website.For a food e-commerce website, you can tailor the "About Us" code to highlight aspects specific to food products. Here's a sample for a food e-commerce website:

"Welcome to [Your Food E-commerce Website Name], where we bring the finest culinary delights right to your doorstep. At [Your Food E-commerce Website Name], we are passionate about good food and believe that everyone deserves access to fresh, delicious ingredients. Our mission is to make gourmet dining experiences accessible to all, offering a curated selection of premium products sourced from local farms and artisanal producers. From farm-fresh produce to gourmet specialties, we are here to elevate your dining experience. Join us on a journey of flavor exploration and culinary delight. Welcome to the world of [Your Food E-commerce Website Name]." 

Feel free to adjust and personalize this code to better reflect the unique offerings and mission of your food e-commerce website.</p>

            <div className="row " id="contact">
                <div className="col-11 mx-md-5">
                    <h1 className="text-dark fw-bolder">About us</h1>
                    <p className=" text-dark fst-italic ">
                        &nbsp;&nbsp;&nbsp;&nbsp;"Welcome to FOODIE MART, where we bring the finest culinary delights right to your doorstep.Our team is committed to offering a wide selection of high-quality food at competitive prices. At FOODIE MART, we are passionate about good food and believe that everyone deserves access to fresh, delicious ingredients.  With a focus on customer satisfaction, we strive to ensure that every purchase meets your expectations. Our mission is to make gourmet dining experiences accessible to all, offering a curated selection of premium products sourced from local farms and artisanal producers. From farm-fresh produce to gourmet specialties, we are here to elevate your dining experience. Join us on a journey of flavor exploration and culinary delight. Welcome to the world of FOODIE MART.  
 
                    </p>
                </div>
            </div>
                

          
              
        </div>
    )
}
export default Home;
 

 
      
 