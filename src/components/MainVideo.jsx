import React from 'react'
import "./mainvideo.css"
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactPlayer from "react-player";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

const MainVideo = () => {
  const [video, setVideos] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {

      await fetch('/youtube.json')
        .then((res) => res.json())

        .then((data) => setVideos(data.video))


    };
    fetchData();

  }, [])



  const details = video.find((i) => i.id == id)
  console.log(details);

  return (
    <>
      {
        details ? (
          <div className="wrapper">
            <div className="main-video">
              <div div className="video-wrap">
                <ReactPlayer url={details.video_link} controls={true} className="video" width="100%" height="100%" />
              </div>
              <div className="details">

                <div className="d-left">
                  <span className="title">{details.title}</span>
                  <div className="info">
                    {details.video_metrics}
                  </div>
                </div>
                <div className='d-right'>
                  <div className="icons">
                    <i class="far fa-thumbs-up fa-2x"></i>
                    <i class="far fa-thumbs-down fa-2x"></i>
                    <i class="fas fa-share fa-2x"></i>

                  </div>
                </div>
              </div>
              <div className="channel-details">
                <img src={details.avatar} alt="avatar" className="avatar" />
                <div className="channel-wrapper">
                  <h5 className="channel-name">{details.channel}</h5>
                  <p className="subcount">{details.subcount} Subscribers</p>
                </div>
              </div>
            </div>
            <div className="reccomended">
              <h2>Reccomended</h2>

              {
                video.map(vid => (



                  (
                    vid.id != id ? <div className="player-wrapper"><ReactPlayer url={vid.video_link} controls={true} className="recc-player" width="100%" height="100%" /></div> : ""
                  )
                )


                )

              }

            </div>
          </div>
        ) : <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open

        >
          <CircularProgress style={{ color: "orange" }} />
        </Backdrop>}
    </>
  )
}

export default MainVideo