import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import {FacebookShareButton, WhatsappShareButton, TwitterShareButton, LinkedinShareButton } from 'next-share'
import dynamic from "next/dynamic";

const SocialMedia = () => {
  if (typeof window !== 'undefined') {
    const shareUrl = window.location.href
    return (
      <div className="flex justify-start items-center gap-3 pt-2">
        <FacebookShareButton url={shareUrl}>
          <FaFacebook className="h-5 w-5"/>
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl}>
          <FaTwitter className="h-5 w-5"/>
        </TwitterShareButton>
        <WhatsappShareButton url={shareUrl}>
          <FaWhatsapp className="h-5 w-5"/>
        </WhatsappShareButton>
      </div>
    );
  }
  return null;
};

export default dynamic(()=> Promise.resolve(SocialMedia), {ssr: false})
