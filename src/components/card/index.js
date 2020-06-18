import React, { useState } from "react"
import propTypes from 'prop-types'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import './card.scss'

export default function CardNews({date, title, isShareable, thumbnail, text, origin}){

  const [toogle, setToogle] = useState(false)

  function isImageHere(){
    if (thumbnail){
      return (
        thumbnail &&
        <div className="imageAndIconOriginContainer">
          {isOriginHere()}
          <img src={thumbnail}/>
        </div>
      )
    }
  }

  function testClick(){
    setToogle(!toogle)
  }

  function getClass(){
    if(toogle === false) return "hide"
    return "animInLikedin"
  }

  function isHeaderHere(){
    if(date || title){
      return(
        date && title &&
        <div className="headerCardNews">
          <div className={getClass()} style={{position: "relative", top : "42px", left : "204px"}}>
            <div className="socialLinksContainer">
              <FontAwesomeIcon icon={faFacebookF} id="shareBtnFb" onClick={shareFb} className="footerSocialLinks linkedinIcon" style={{cursor:"pointer"}} color="#fff"/>
              <FontAwesomeIcon icon={faLinkedinIn} id="shareBtnLinkedin" onClick={shareLinkdin} className="footerSocialLinks linkedinIcon" color="#fff"/>
              <a href="https://twitter.com/intent/tweet?text=hello+world&via=google" data-url="https://google.fr" data-show-count="false"><FontAwesomeIcon icon={faTwitter} className="footerSocialLinks linkedinIcon" color="#fff"/></a>
            </div>
          </div>
          <FontAwesomeIcon icon={faShareAlt} className="headerCardNewsSharedButton" onClick={testClick} style={{display : isShareable ? "block" : "none"}}/>
          <p className="headerCardNewsDate">{moment(date).format( "DD.MM.YYYY")}</p>
          <h1 className="headerCardNewsTitle">{title}</h1>
        </div>
      )
    }
  }


  function paragraphe(){
    if(thumbnail){
      return(
          <p className="cardNewsParagraphe">{text}</p>
      )
    } else {
      return(
        <div className="imageAndIconOriginContainer">
          {isOriginHere()}
          <p className="cardNewsParagraphe" >{text}</p>
        </div>
      )
    }
  }

  function isOriginHere(){
    if (!origin) return
    let logoOrigin ;
    switch (origin.toLowerCase()) {
      case "twitter":
          logoOrigin = <FontAwesomeIcon icon={faTwitter} className="originIcon" color="#fff"/>
        break;
      case "linkedin":
          logoOrigin = <FontAwesomeIcon icon={faLinkedinIn} className="originIcon" color="#fff"/>
        break;
    //   default:
    //       logoOrigin = <h1 className="title" style={{color : color, textAlign: align}}/>
    }
    return logoOrigin;
  }

  //dangerouslySetInnerHTML={createMarkup()}

  function shareFb(){
    console.log('hello')
    // FB.ui({
    //   display: 'popup',
    //   method: 'share',
    //   href: 'https://google.fr',
    // }, function(response){
    // });
  }

  function shareLinkdin(){
    window.open( 
    'https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fgoogle.fr&title=TestLinkedin&summary=Hello%20les%20gens%20regardez%20%C3%A7a%20%21',
    'sharerLinkedin', 
    'toolbar=0, status=0, width=626, height=536'
    )
  }

  return(
    <>
      <div className="cardNews">
        {isHeaderHere()}
        {isImageHere()}
        {paragraphe()}
      </div>
    </>
  )
}

CardNews.propTypes = {
  date: propTypes.instanceOf(Date),
  title: propTypes.string,
  isShareable: propTypes.bool,
  thumbnail: propTypes.string,
  text: propTypes.string,
  origin: propTypes.string,
};