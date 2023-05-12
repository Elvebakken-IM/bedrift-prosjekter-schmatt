import React from 'react'

const InfoSvgClosed = ({setInfo, info}) => {
  return (
    <>
        <svg onClick={() => {setInfo(!info)}} width="30px" height="30px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" fill-rule="evenodd" d="M2.293 15.293a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414l-6-6a1 1 0 00-1.414 1.414L7.586 10l-5.293 5.293zm8 0a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414l-6-6a1 1 0 10-1.414 1.414L15.586 10l-5.293 5.293z"></path> </g></svg>
    </>
  )
}

export default InfoSvgClosed