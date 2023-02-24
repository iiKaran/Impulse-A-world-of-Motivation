import React from 'react'

export default function Footer() {
  return (
   <footer className="site-footer">
   <div className="container">
     <div className="row">
       <div className="col-sm-12 col-md-6">
         <h6>About</h6>
         <p className="text-justify">Imp<span>U</span>lse.com is an initiative  to help the upcoming Student and Strugllers with the proper guidance about the Life and Money. Scanfcode focuses on providing the most relatable and famus content creted by the top influiencers.</p>
       </div>

       <div className="col-xs-6 col-md-3">
         <h6>Categories</h6>
         <ul className="footer-links">
           <li><a href="/">Business</a></li>
           <li><a href="/">Startup</a></li>
           <li><a href="/">Study Motivation</a></li>
           <li><a href="/">Life Skills</a></li>
           <li><a href="/">Thinking and innovation</a></li>
         </ul>
       </div>

       <div className="col-xs-6 col-md-3">
         <h6>Quick Links</h6>
         <ul className="footer-links">
           <li><a href="http://scanfcode.com/about/">About Us</a></li>
           <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
           <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
           <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
           <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
         </ul>
       </div>
     </div>
     <hr/>
   </div>
   <div className="container">
     <div className="row">
       <div className="col-md-8 col-sm-6 col-xs-12">
         <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
       <a href="/">      IMP<span>U</span>LSE - #KaranSehgal</a>.
         </p>
       </div>

       <div className="col-md-4 col-sm-6 col-xs-12">
         <ul className="social-icons">
           <li><a className="facebook" href="/"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
           <li><a className="twitter" href="/"><i className="fa fa-twitter"></i></a></li>
           <li><a className="dribbble" href="/"><i className="fa fa-dribbble"></i></a></li>
           <li><a className="linkedin" href="/"><i className="fa fa-linkedin"></i></a></li>   
         </ul>
       </div>
     </div>
   </div>
</footer>
  )
}
