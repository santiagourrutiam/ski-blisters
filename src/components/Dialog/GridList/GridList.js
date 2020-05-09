import React from 'react';
import './GridList.css';

export default function ImageGridList(props) {
  return (
    <div className="div_grid">
            <img className="img_grid" src={props.imgs[0]} alt="IMG" />
            <img className="img_grid" src={props.imgs[1]} alt="IMG" />
            <img className="img_grid" src={props.imgs[2]} alt="IMG" />
  </div>
  );
}