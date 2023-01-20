import HomePage from "./homePage"
import img from "./R.png"
import img1 from "./location.png"
import img2 from "./user-interface.png"
import arrow from"./Arrow finance logo new.png"
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  }
   from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  
  

export  default function  Navbar(){


    return<>

    <div 
    style={{backgroundColor:"#E40613",
    border:"1px solid red",
    height:"40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // width: "100%",
    // padding: "5px",
    maxWidth: "100%",
    margin: "auto",}} 
    >
      
      <a href="" >
        <div style={{display:"flex", width:"Auto",height:"40px"}}>
            
            <p style={{lineHeight:"1",fontSize:"25px",letterSpacing:"5px",marginTop:"1px" }}>
                <span style={{color:"#FFFFFF",fontSize:"15px",paddingRight:"30px" , fontFamily: 'sans-serif' }}>
                TAKE AN EXTRA
                </span>
                <span style={{color:"#FFFFFF"}} >

                </span>
                   
                    <strong>
                        <span style={{color:"#FFFFFF"}} >
                        40% OFF CLEARANCE*
                        </span>
                   </strong>

            </p>

            <div style={{marginTop:"10px",marginLeft:"20px" }}>
            
            <p style={{lineHeight:"1",fontSize:"12px",letterSpacing:"5px" ,fontFamily: 'sans-serif',fontWeight:"bold",marginTop:"1px"}}>
            <span  style={{color:"#FFFFFF"}}>
                USE CODE : EXTRA40 
            </span>
            </p>
         
        </div>
          
        </div>

      
      
      </a> 
     
    </div>

    <div style={{background: "#f3f3f3",
    height: "44px",
    zIndex: "56",
    position: "relative",
    top: "0",
    left: "0",
    right: "0",
    lineHeight:"44px",
    // border:"1px solid black"
    }}>
        {/* <div style={{ border:"1px solid black", width:"500px", marginLeft:"1000px", height:"40px"}}> */}
        <ul style={{
    //   float: "right",
    // textAlign: "right",
    listStyle: "none",
      margin: "0",
    padding:" 0",
    height: "100%",
    // border:"1px solid blue",
    width:"500px", 
    marginLeft:"1000px", 
    
   }}>
           {/* <li  style={{color: "#333",}} > */}
            <img src={img} alt="bustrack" style={{width:"4%",marginTop:"5px"}}/>
            <a href="" style={{color: "#333",marginLeft:"10px",fontSize:"16px",marginTop:"-5px"}} >Track Order</a>
                  
           {/* </li> */}
           {/* <li style={{color: "#333",}}> */}
             <img src={img1} alt="loction" style={{width:"4%",marginLeft:"10px",marginTop:"5px"}} />
             <a href="" style={{color: "#333", marginLeft:"5px",fontSize:"16px", marginTop:"-5px"}}> Store Locator</a>
           
           {/* </li> */}
           {/* <li style={{color: "#333",}}> */}
            <img src={img2} alt="login" style={{width:"4%",marginLeft:"10px"}}/>
            <a href="" style={{color: "#333",marginLeft:"5px",fontSize:"16px",marginTop:"-5px"}}> log in/Register</a>
           
           {/* </li> */}
       </ul>
        </div>
        
        
    {/* </div> */}


    <div>

    </div>

    
              
     <Box backgroundColor="#fff" position="relative" zIndex={"55"} w="100%" display="flex">
                 
     <div style={{display:"flex",marginLeft:"100px"}}>
     
     <img src={arrow} alt="" />
    
     
    <p>Women</p>
    <p style={{marginLeft:"20px" ,color: "#333"}}>Men</p>
    <p style={{marginLeft:"20px" ,color: "#333"}}>Kids</p>
    <p style={{marginLeft:"20px" ,color: "#333"}}>Orignals</p>
    <p style={{marginLeft:"20px" ,color: "#333"}}>Sale</p>
    <p style={{marginLeft:"20px" ,color: "#333"}}>Accessories</p>


        </div>            
         </Box>
                     
    
    </>
}