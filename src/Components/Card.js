import React from "react";

export default function card(props) {
  return (
    <div className="card flex-item*">
      <iframe
        src={props.obj.link}
        title={props.obj.title1}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="card-img-top cardiframe"
        // style={width : 80%}
      ></iframe>
      <div className="card-body">
        <h5 className="card-title">{props.obj.headtitle}</h5>
        <p className="card-text">
          {props.obj.desc}
        </p>
        <a href="/" className="btn btn-primary">
          {props.obj.btn}
        </a>
      </div>
    </div>
  );
}

