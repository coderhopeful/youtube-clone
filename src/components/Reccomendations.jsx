import React from 'react'
import { useState, useEffect } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import "./reccomendations.css"
import { Link } from "react-router-dom"
import ReactPlayer from "react-player";

const Reccomendations = () => {
  const [recc, setRecc] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      await fetch('/youtube.json')
        .then((res) => res.json())
        .then((data) => setRecc(data.video))

    }

    fetchData();

  }, [])



  return (
    <Row>
      {
        recc.map(item => (
          <Col sm={12} md={8} lg={6} xl={6}>
            <Link to={`video/${item.id}`}>
              <Card key={item.id} className="card">
              <div className="vid-wrapper">
              <ReactPlayer url={item.video_link} controls={true} className="video" width="100%" height="100%"/>
              </div>
                <Card.Body className="card-body">

                  <Card.Title as="div"><b>{item.title}</b></Card.Title>
                  <Card.Text as="div">
          
                    <img src={item.avatar} alt="avatar-image" className="avatar" />
                    <span className="channel-name">{item.channel}</span>
                  </Card.Text>

                </Card.Body>

              </Card>

            </Link>

          </Col>
        ))
      }
    </Row>
  )
}




export default Reccomendations