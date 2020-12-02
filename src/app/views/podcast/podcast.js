import React, { useEffect, useState } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

var parseString = require("xml2js").parseString;

function RSSFeed() {
  let [feed, setFeed] = useState({ title: "RSS Feed", items: [] });

  useEffect(() => {
    const RSS_URL = `https://cors-anywhere.herokuapp.com/https://feeds.buzzsprout.com/1451593.rss`;

    fetch(RSS_URL)
      .then((response) => response.text())
      .then((data) => {
        parseString(data, function (err, result) {
          setFeed({ items: result.rss.channel[0].item });
        });
      });
  }, []);

  return (
    <div>
      <div className="RSS-title">
        <h1>Recent recordings</h1>
        <a
          className="listen__item listen__item--spotify"
          target="_blank"
          rel="noreferrer"
          href="https://open.spotify.com/show/6kXxWZMn5noYw1D80vSDPa"
        >
          Spotify
        </a>
      </div>

      {feed.items.length &&
        feed.items.map((item) => {
          const regex = /(<([^>]+)>)/gi;

          return (
            <div className="RSS-item" key={item.pubDate}>
              <h2>{item.title[0]}</h2>
              <h5>
                {Math.round(item["itunes:duration"][0] / 60)}mins ◦{" "}
                {item.pubDate[0].replace("+0000", "")}
              </h5>
              <p>{item.description[0].replace(regex, "")}</p>
              <audio
                controls={true}
                preload="none"
                src={item.enclosure[0].$.url}
              ></audio>
            </div>
          );
        })}
    </div>
  );
}

function Podcast() {
  return (
    <section className="home-body u-pt-gi">
      <Grid fluid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className="u-pt-gi">
            <div className="RSS-body">
              <RSSFeed />
            </div>
          </Col>
        </Row>
      </Grid>
    </section>
  );
}

export default Podcast;
