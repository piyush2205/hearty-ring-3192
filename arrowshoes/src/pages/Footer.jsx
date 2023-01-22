import visa from "./visa.png"
import paypal from "./paypal.png"
export  default function Footer (){

return<>

<hr style={{marginTop:"50px"}}/>
<div style={{display:"flex",justifyContent:"space-around",alignItems:"center",marginTop:"20px"}} >

    <div>
        <h2 style={{color:"#333",fontSize:"14px", fontWeight: "400", lineHeight: "18px"}}>DEPARTMENTS</h2>
        
    </div>

    <div>
    <h2 style={{color:"#333",fontSize:"14px", fontWeight: "400", lineHeight: "18px"}}>HELP</h2>
    </div>

    <div>
      
    <h2 style={{color:"#333",fontSize:"14px", fontWeight: "400", lineHeight: "18px"}}>ABOUT ARROW</h2>
    </div>
    
    <div>
    <h2 style={{color:"#333",fontSize:"14px", fontWeight: "400", lineHeight: "18px"}}>ARROW.com</h2>
   
    </div>

</div>

<hr style={{marginTop:"20px" ,width:"1210px"}}/>

<div style={{display:"flex",justifyContent:"space-around",alignItems:"center",marginTop:"20px"}} >

    <div>
        <h2 style={{color:"#333",fontSize:"14px", fontWeight: "400", lineHeight: "18px",textAlign:"left"}}>Mens</h2>
        <h2 style={{color:"#333",fontSize:"14px", fontWeight: "400", lineHeight: "18px",textAlign:"left"}}>Womens</h2>
        <h2 style={{color:"#333",fontSize:"14px", fontWeight: "400", lineHeight: "18px",textAlign:"left"}}>Originals</h2>
        <h2 style={{color:"#333",fontSize:"14px", fontWeight: "400", lineHeight: "18px",textAlign:"left"}}>Discover</h2>
        <h2 style={{color:"#333",fontSize:"14px", fontWeight: "400", lineHeight: "18px",textAlign:"left"}}>Sale</h2>
    </div>

    <div>
     <h2 style={{color:"#333",fontSize:"14px", fontWeight: "400", lineHeight: "18px"}}>Product Recall</h2>
     <h2 style={{color:"#333",fontSize:"14px", fontWeight: "400", lineHeight: "18px",textAlign:"left"}}>Womens</h2>
        <h2 style={{color:"#333",fontSize:"14px", fontWeight: "400", lineHeight: "18px",textAlign:"left"}}>Originals</h2>
        <h2 style={{color:"#333",fontSize:"14px", fontWeight: "400", lineHeight: "18px",textAlign:"left"}}>Discover</h2>
        <h2 style={{color:"#333",fontSize:"14px", fontWeight: "400", lineHeight: "18px",textAlign:"left"}}>Sale</h2>

    </div>

    <div>
      
    <h2 style={{color:"#333",fontSize:"14px", fontWeight: "400", lineHeight: "18px"}}>About us</h2>
    <h2 style={{color:"#333",fontSize:"14px", fontWeight: "400", lineHeight: "18px",textAlign:"left"}}>Womens</h2>
        <h2 style={{color:"#333",fontSize:"14px", fontWeight: "400", lineHeight: "18px",textAlign:"left"}}>Originals</h2>
        <h2 style={{color:"#333",fontSize:"14px", fontWeight: "400", lineHeight: "18px",textAlign:"left"}}>Discover</h2>
        <h2 style={{color:"#333",fontSize:"14px", fontWeight: "400", lineHeight: "18px",textAlign:"left"}}>Sale</h2>
    </div>
    
    <div>
    
    <h2 style={{color:"#333",fontSize:"14px", fontWeight: "400", lineHeight: "18px",textAlign:"left"}}>Gifts Card</h2>
        <h2 style={{color:"#333",fontSize:"14px", fontWeight: "400", lineHeight: "18px",textAlign:"left"}}>Originals</h2>
        <h2 style={{color:"#333",fontSize:"14px", fontWeight: "400", lineHeight: "18px",textAlign:"left"}}>Discover</h2>
        <h2 style={{color:"#333",fontSize:"14px", fontWeight: "400", lineHeight: "18px",textAlign:"left"}}>Sale</h2>   
    </div>

</div>
<div style={{backgroundColor:"#333",display:"flex",justifyContent:"space-around",height:"350px"}}>
    <div style={{display:"flex"}}>
    <p style={{color:"white"}}>Terms&Conditions</p>
     <p style={{color:"white",marginLeft:"10px"}}>Privacy police</p>
     <p style={{color:"white",marginLeft:"10px"}}>CCPA Privacy Policy</p>
    </div>
    <div style={{width:"900px"}}>
          <p style={{color:"white"}}>
                © C. & J. Clark International 2022. Clarks and the Clarks
                logo are registered trademarks of C. & J. Clark International Limited.
            </p>
            <img src={visa} alt="" style={{width:"7%"}} />
            <img src={paypal} alt="" style={{width:"10%",marginLeft:"20px"}} />
    </div>
</div>

</>


}