'use client';
import { useState, useEffect } from 'react';
import styles from './page.module.css'; // Import the CSS module
require('dotenv').config();

// Function to fetch data from the NASA API
async function getData(count) {
  const apiKey = process.env.NEXT_PUBLIC_NASA_API_KEY;
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;
  const response = await fetch(url);
  const data = await response.json();
  return Array.isArray(data) ? data : [data];
}

export default function Page() {
  const [apodData, setApodData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getData(4);
      setApodData(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>NASAs Astronomy Picture of the Day (APOD)</h1>
      {loading ? (
        <p className={styles.loading}>Loading...</p>
      ) : (
        <div className={styles.grid}>
          {apodData.map((item, index) => (
            <div key={index} className={styles.apodItem}>
              <h2 className={styles.apodTitle}>{item.title}</h2>
              <p className={styles.date}>{item.date}</p>
              {item.media_type === 'image' ? (
                <img src={item.url} alt={item.title} className={styles.image} />
              ) : (
                <iframe
                  src={item.url}
                  title={item.title}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className={styles.video}
                />
              )}
              <p className={styles.explanation}>{item.explanation}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
