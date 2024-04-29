import React from "react";
import "./TrendingItem.css";

const TrendingItem = () => {
  return (
    <div className="trendingitem-container">
      <div className="trendingitem-item-cart">
        <div className="trendingitem-bookmark-container">
          <svg
            className="trendingitem-bookmark"
            width="12"
            height="14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
              stroke="#FFF"
              stroke-width="1.5"
              fill="none"
            />
          </svg>
        </div>
        <div className="trendingitem-description">
          <div className="trendingitem-category">
            <p className="trendingitem-p">2019</p>
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
                fill="#FFF"
                opacity=".75"
              />
            </svg>
            <p className="trendingitem-p">Movie</p>
            <p className="trendingitem-p">PG</p>
          </div>
          <h3 className="trendingitem-h3">Beyond Earth</h3>
        </div>
      </div>
    </div>
  );
};

export default TrendingItem;