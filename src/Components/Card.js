import React from "react";

export default function card(props) {
  return (
    <>
    <h5 className="card-tittle">{props.obj.tittle}</h5>
    <iframe src={props.obj.src} title="YouTube video player" frameborder="0" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <p>{props.obj.desc}</p>
    <div className="btn-card">Watch Now!</div>
    </>
  );
}

