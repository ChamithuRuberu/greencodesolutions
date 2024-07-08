import React from 'react'
import PropTypes from 'prop-types'
import styles from './Footer.module.css'

function Footer(props) {
  return (

    // <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    // <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    
    <footer className={styles.Footer}>
      <div className={styles.bottomBorder}>
        <div class=" row">
          <div class=" col-sm-4 col-md-4 col-sm-4  col-12 col-lg-4">
            <h5 class="headin5_amrc col_white_amrc pt2">Green Code Solution</h5>
            <p class="mb10">Leading Software Company with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</p>
            <p><i class="fa fa-location-arrow"></i> GreenCodeSolutions </p>
            <p><i class="fa fa-phone"></i>  +94-767243647  </p>
            <p><i class="fa fa fa-envelope"></i> greencodesolution@gmail.com  </p>
          </div>
    
    
    
          <div class=" col-sm-4 col-md-2  col-6 col-lg-3">
            <h5 class="headin5_amrc col_white_amrc pt2">Company</h5>
            <ul class="footer_ul_amrc">
              <li><a href="http://webenlance.com">About Us</a></li>
              <li><a href="http://webenlance.com">Services</a></li>
              <li><a href="http://webenlance.com">Careers</a></li>
    
            </ul>
          </div>
    
          <div class=" col-sm-4 col-md-6  col-6 col-lg-3">
            <h5 class="headin5_amrc col_white_amrc pt2">Support</h5>
            <ul class="footer_ul_amrc">
              <li><a href="http://webenlance.com">FAQ</a></li>
              <li><a href="http://webenlance.com">Policy</a></li>
              <li><a href="http://webenlance.com">Terms & Condition</a></li>
            </ul>
          </div>
    
    
          <div class=" col-sm-4 col-md-6  col-12 col-lg-2">
            <h5 class="headin5_amrc col_white_amrc pt2">Follow us</h5>
    
            <ul class="footer_ul2_amrc">
              <li><a href="#"><i class="fab fa-facebook fleft padding-right"></i> </a><p>Facebook<a href="#"></a></p></li>
              <li><a href="#"><i class="fab fa-linkedin fleft padding-right"></i> </a><p>Linkedin<a href="#"></a></p></li>
              <li><a href="#"><i class="fab fa-twitter fleft padding-right"></i> </a><p>Twitter<a href="#"></a></p></li>
              <li><a href="#"><i class="fab fa-whatsapp fleft padding-right"></i> </a><p>Whatsapp<a href="#"></a></p></li>
            </ul>
          </div>
        </div>
      </div>
    
    
      <div class="container">
      
        <p class="text-center">Copyright @2023 | Designed With by <a href="#">GreenCodeSolution</a></p>
    
      </div>
    </footer>
    
  )
}


export default Footer

