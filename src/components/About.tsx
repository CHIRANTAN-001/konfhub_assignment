import React from 'react'

const htmlContent = `<blockquote><p>This is the description of an event. This event was created as an evaluation task for the role of <strong>Frontend Engineer. </strong><em>Are you the one we are looking for?</em> Don't get nervous. Take help if you need. Ask us more questions if you did not understand the problem. You can reach-us out at reachus@konfhub.com..</p></blockquote><div data-custom-image=\"true\" style=\"text-align: left;\"><div class=\"image-resize-container image-reference\" style=\"max-width: 100%; height: auto; display: inline-block;\"><img src=\"https://dev-media.konfhub.com/resources/2024/June/09/1717971318450-ffa21dd4-3b8d-4b4c-878e-32d640579510.png\" alt=\"Image\" width=\"310\" style=\"height: auto;\"></div></div><div data-youtube-video=\"\"><iframe width=\"640\" height=\"480\" allowfullscreen=\"true\" autoplay=\"false\" disablekbcontrols=\"false\" enableiframeapi=\"false\" endtime=\"0\" ivloadpolicy=\"0\" loop=\"false\" modestbranding=\"false\" origin=\"\" playlist=\"\" src=\"https://www.youtube.com/embed/bEM35JDYjrI\" start=\"0\"></iframe></div><table class=\"custom-table\" style=\"minWidth: 75px\"><colgroup><col><col><col></colgroup><tbody><tr><th colspan=\"1\" rowspan=\"1\"><p>A</p></th><th colspan=\"1\" rowspan=\"1\"><p>B</p></th><th colspan=\"1\" rowspan=\"1\"><p>C</p></th></tr><tr><td colspan=\"1\" rowspan=\"1\"><p>A1</p></td><td colspan=\"1\" rowspan=\"1\"><p>B1</p></td><td colspan=\"1\" rowspan=\"1\"><p>C1</p></td></tr><tr><td colspan=\"1\" rowspan=\"1\"><p>A2</p></td><td colspan=\"1\" rowspan=\"1\"><p>B2</p></td><td colspan=\"1\" rowspan=\"1\"><p>C2</p></td></tr></tbody></table>`

const About = ({data}) => {
  return (
      <>
          <div className='pt-16'>
              <div>
                  <span className='text-2xl font-semibold'>ABOUT EVENT</span>
              </div>
              <div className='pt-8 pr-10 leading-7'>
                  <div dangerouslySetInnerHTML={{__html: data?.description}}/>
              </div>
        </div>
      </>
  )
}

export default About