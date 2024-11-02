import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share';

export default function ShareModal() {
  return (
   
    <div>
      
      <FacebookShareButton
        // {/* Url you want to share */}
        url={'http://localhost:3000'} >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <WhatsappShareButton
        // {/* Url you want to share */}
        url={'http://localhost:3000'} >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton
        // {/* Url you want to share */}
        url={'http://localhost:3000'} >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
    
  )
}
