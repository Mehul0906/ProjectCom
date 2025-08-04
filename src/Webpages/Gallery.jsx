import React, { useState, useEffect } from "react";
import "../css/Gallery.css"; // We'll create this CSS file next
import First from "../assets/1.JPG";
import Second from "../assets/2.JPG";
import Third from "../assets/3.JPG";
import Fourth from "../assets/4.JPG";
import Fifth from "../assets/5.JPG";
import Sixth from "../assets/6.JPG";
import Palkhi from "../assets/Palkhi.jpg";
import Palkhi1 from "../assets/Palkhi1.jpg";
import Mahiladin2 from "../assets/Mahiladin2.jpg";
import mahilaDin1 from "../assets/mahilaDin1.jpg";
import HaldiKumkum1 from "../assets/HaldiKumkum1.jpg";
import HaldiKumkum2 from "../assets/HaldiKumkum2.jpg";
import HaldiKumkum3 from "../assets/HaldiKumkum3.jpg";
import BloodDonation1 from "../assets/BloodDonation1.jpg";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([
    {
      id: 1,
      imageUrl: First,
      //   title: 'TAHITI',
      //   subtitle: 'French Polynesia'
    },
    {
      id: 2,
      imageUrl: Second,
      //   title: 'PARIS',
      //   subtitle: 'France'
    },
    {
      id: 3,
      imageUrl: Third,
      //   title: 'TOKYO',
      //   subtitle: 'Japan'
    },
    {
      id: 4,
      imageUrl: Fourth,
      //   title: 'NEW YORK',
      //   subtitle: 'USA'
    },
    {
      id: 5,
      imageUrl: Fifth,
      //   title: 'ROME',
      //   subtitle: 'Italy'
    },
    {
      id: 6,
      imageUrl: Sixth,
      //   title: 'SYDNEY',
      //   subtitle: 'Australia'
    },
  ]);

  const loadMoreItems = () => {
    // In a real app, you would fetch more data from an API here
    const newItems = [
      {
        id: galleryItems.length + 1,
        imageUrl: Palkhi,
      },
      {
        id: galleryItems.length + 2,
        imageUrl: Palkhi1,
      },
      {
        id: galleryItems.length + 3,
        imageUrl: Mahiladin2,
      },
      {
        id: galleryItems.length + 4,
        imageUrl: mahilaDin1,
      },
      {
        id: galleryItems.length + 5,
        imageUrl: HaldiKumkum1,
      },
      {
        id: galleryItems.length + 6,
        imageUrl: HaldiKumkum2,
      },
      {
        id: galleryItems.length + 7,
        imageUrl: HaldiKumkum3,
      },
      {
        id: galleryItems.length + 8,
        imageUrl: BloodDonation1,
      },
      // {
      //   id: galleryItems.length + 9,
      //   imageUrl: ,
      // },
      // {
      //   id: galleryItems.length + 10,
      //   imageUrl: ,
      // },
    ];
    setGalleryItems([...galleryItems, ...newItems]);
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const openLightbox = (item, index) => {
    setSelectedImage(item);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrev = () => {
    const newIndex =
      (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedImage(galleryItems[newIndex]);
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedImage(galleryItems[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="gallery-app">
      {/* Page Header */}
      <header className="page-header py-5">
        <div className="container text-center">
          {/* <h1 className="display-4 fw-bold animate__animated animate__fadeInDown">
            Our Gallery
          </h1> */}
          <nav
            aria-label="breadcrumb"
            className="d-flex justify-content-center"
          >
            <ol style={{fontSize:"20px"}} className="breadcrumb animate__animated animate__fadeInUp">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Gallery
              </li>
            </ol>
          </nav>
        </div>
      </header>

      <div className="gallery">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            className="gallery-item"
            onClick={() => openLightbox(item, index)}
          >
            <img src={item.imageUrl} alt={item.title} />
            <div className="gallery-overlay">
              <div className="gallery-title">{item.title}</div>
              <div className="gallery-subtitle">{item.subtitle}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close-btn" onClick={closeLightbox}>
              &times;
            </span>
            <button
              className="nav-btn prev-btn"
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
            >
              &#10094;
            </button>

            <div className="lightbox-image-container">
              <img src={selectedImage.imageUrl} alt={selectedImage.title} />
              <div className="lightbox-caption">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.subtitle}</p>
                <div className="image-counter">
                  {currentIndex + 1} / {galleryItems.length}
                </div>
              </div>
            </div>

            <button
              className="nav-btn next-btn"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              &#10095;
            </button>
          </div>
        </div>
      )}

      <button className="load-more" style={{fontSize:"22px"}} onClick={loadMoreItems}>
        LOAD MORE
      </button>
    </div>
  );
};

export default Gallery;
