'use client';
require('dotenv').config();

import { useState, useEffect } from 'react';

// Function to fetch data from the NASA API
async function getData(count) {
  const apiKey = process.env.NEXT_PUBLIC_NASA_API_KEY;
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;
  const response = await fetch(url);
  const data = await response.json();
  return Array.isArray(data) ? data : [data]; // Ensure data is always an array
}

export default function Page() {
  const [apodData, setApodData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getData(4); // Fetch 4 items
      setApodData(data);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>NASAs Astronomy Picture of the Day (APOD)</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {apodData.map((item, index) => (
            <div key={index}>
              <h2>{item.title}</h2>
              <p>{item.date}</p>
              {item.media_type === 'image' ? (
                <img src={item.url} alt={item.title} style={{ maxWidth: '100%' }} />
              ) : (
                <iframe
                  src={item.url}
                  title={item.title}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{ width: '100%', height: '500px' }}
                />
              )}
              <p>{item.explanation}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
