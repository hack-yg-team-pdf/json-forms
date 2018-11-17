import React, {Component} from 'react'
import {Helmet} from "react-helmet";
import YgFormsContent from './YgFormsContent'

class YgFormsClone extends Component {
  render () {
    return (
        <div id="package">
          <Helmet>
            <link rel="stylesheet" type="text/css" media="print"  href="http://www.gov.yk.ca/forms/css/print.css" />
            <link rel="stylesheet" type="text/css" media="screen" href="http://www.gov.yk.ca/forms/css/style.css" />
            <link rel="stylesheet" type="text/css" media="screen" href="http://www.gov.yk.ca/forms/css/album.css" />
            <link rel="stylesheet" type="text/css" media="screen" href="http://www.gov.yk.ca/lb_css/lightbox.css" />
            <script type="text/javascript" src="http://www.gov.yk.ca/lb_js/prototype.js"></script>
            <script type="text/javascript" src="http://www.gov.yk.ca/lb_js/scriptaculous.js?load=effects,builder"></script>
            <script type="text/javascript" src="http://www.gov.yk.ca/lb_js/lightbox.js"></script>
            <script type='text/javascript' src="http://www.gov.yk.ca/forms/scripts/album.js"></script>
            <script src="http://www.gov.yk.ca/scripts/dw_cookies.js" type="text/javascript"></script>
            <script src="http://www.gov.yk.ca/scripts/dw_sizerdx.js" type="text/javascript"></script>
            <script src="http://www.gov.yk.ca/scripts/bookmark.js" type="text/javascript" ></script> 
          </Helmet>
          <div id="header"> 
            <div id="logo">
                <p>
                  <a href="http://www.gov.yk.ca/">
                    <img src="http://www.gov.yk.ca/forms/images/wordmark.gif" alt="Yukon government logo">
                    </img>
                  </a>
                </p>
            </div>
            <div id="search-form">
              <p>|Font Size:  
                <a href="javascript:;" onclick="dw_fontSizerDX.adjust(2); return false" title="Increase font-size"><img src="http://www.gov.yk.ca/forms/images/icon_increase.gif" alt="Increase font size"></img></a>
                <a href="javascript:;" onclick="dw_fontSizerDX.adjust(-2); return false" title="Decrease font-size"><img src="http://www.gov.yk.ca/forms/images/icon_decrease.gif" alt="Decrease font size"></img></a>
                <a href="javascript:;" onclick="dw_fontSizerDX.reset(); return false" title="Restore default font-sizes"><img src="http://www.gov.yk.ca/forms/images/icon_restore.gif"></img></a>
                <a href="http://www.gov.yk.ca/forms/contactus.html">Contact Us</a> | 
                <a href="http://www.gov.yk.ca/fr/forms/all.html">Fran&ccedil;ais</a>
              </p>
            </div>
          </div>
          <div id="department">
              <h1>Government of Yukon</h1>
          </div>
          <div id="breadcrumb">
              <ul>
                  <li><a href="http://www.gov.yk.ca/">Government of Yukon</a> &raquo;</li>
                  <li>Government of Yukon forms listed alphabetically</li>
              </ul>
          </div>
          <div id='left'>
            <div class="right_box">
              <h1>View forms</h1>
              <ul class="rightlist">
                <li><a href="http://www.gov.yk.ca/forms/" >Forms home </a> </li><li><a href="http://www.gov.yk.ca/forms/all.html">Alphabetically</a></li>
                <li><a href="http://www.gov.yk.ca/forms/cs.html">Community Services </a></li>
                <li><a href="http://www.gov.yk.ca/forms/ecd.html">Economic Development </a></li>
                <li><a href="http://www.gov.yk.ca/forms/edu.html">Education </a></li>
                <li><a href="http://www.gov.yk.ca/forms/emr.html">Energy, Mines and Resources</a></li>
                <li><a href="http://www.gov.yk.ca/forms/env.html">Environment </a></li>
                <li><a href="http://www.gov.yk.ca/forms/eco.html">Executive Council Office </a></li>
                <li><a href="http://www.gov.yk.ca/forms/fin.html">Finance</a></li>
                <li><a href="http://www.gov.yk.ca/forms/hss.html">Health and Social Services </a></li>
                <li><a href="http://www.gov.yk.ca/forms/hpw.html">Highways and Public Works </a></li>
                <li><a href="http://www.gov.yk.ca/forms/jus.html">Justice </a></li>
                <li><a href="http://www.gov.yk.ca/forms/tc.html">Tourism and Culture </a></li>
                <li><a href="http://www.gov.yk.ca/forms/yhc.html">Yukon Housing Corporation </a></li>
                <li><a href="http://www.gov.yk.ca/forms/ylc.html">Yukon Liquor Corporation </a></li>
              </ul> 
            </div>
          </div>
          <div id="full"> 
            <h1>Government of Yukon forms listed alphabetically</h1>
            <YgFormsContent />
          </div>
        </div>
    )
  }
}

export default YgFormsClone
