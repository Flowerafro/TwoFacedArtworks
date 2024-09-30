import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { fetchArtworks } from '../sanity/artworkServices.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export default function ArtWork() {
  // States to hold artworks data and current artwork ID
  const [artworks, setArtworks] = useState([]);
  const [currentId, setCurrentId] = useState(null);

  // Fetch artworks data on component mount
  useEffect(() => {
    fetchArtworks().then((data) => {
      setArtworks(data);
    });
  }, []);

  // Get slug from URL
  const { slug } = useParams();
  // State to navigate between artworks
  const navigate = useNavigate();

  // Find artwork by slug
  const artwork = useMemo(() => {
    return artworks.find(art => art && art.name && art.name.toLowerCase().replace(/ /g, '') === slug);
  }, [slug, artworks]);

  // Update currentId when artwork changes
  useEffect(() => {
    if (artwork) {
      setCurrentId(artwork.id);
    }
  }, [artwork]);

  // Find the current artwork by ID
  const currentArtwork = useMemo(() => {
    return artworks.find(art => art.id === currentId);
  }, [currentId, artworks]);

  // Generate slug based on the name of the artwork
  const genSlug = (name) => name.toLowerCase().replace(/ /g, '');

  // Next button: find the next artwork by ID and update state, navigate to next artwork
  const handleNext = () => {
    const currentIndex = artworks.findIndex(art => art.id === currentId);
    const nextIndex = (currentIndex + 1) % artworks.length;
    const nextArtwork = artworks[nextIndex];
    setCurrentId(nextArtwork.id);
    navigate(`/ArtWork/${genSlug(nextArtwork.name)}`);
  }

  // Previous button: find the previous artwork by ID and update state, navigate to previous artwork
  const handlePrev = () => {
    const currentIndex = artworks.findIndex(art => art.id === currentId);
    const prevIndex = (currentIndex - 1 + artworks.length) % artworks.length;
    const prevArtwork = artworks[prevIndex];
    setCurrentId(prevArtwork.id);
    navigate(`/ArtWork/${genSlug(prevArtwork.name)}`);
  }

  // If current artwork is not found, display "Artwork not available now"
  if (!currentArtwork) {
    return (
      <>
        <section className="artwork__section">
          <div className="artwork__btns">
            <button onClick={handlePrev} className="art__btn"><FontAwesomeIcon icon={faAngleLeft} /></button>
            <button onClick={handleNext} className="art__btn"><FontAwesomeIcon icon={faAngleRight} /></button>
          </div>
          <div className="artwork__container">
            <div className="artwork__box">
              <div className="escape__btn">
                <button onClick={() => navigate("/")} className="esc__btn"><FontAwesomeIcon icon={faCircleXmark} /></button>
              </div>
              <p className="not__found">Artwork not available now</p>
            </div>
          </div>
        </section>
      </>
    )
  } else {
    return (
      <>
        <section className="artwork__section">
          <div className="artwork__btns">
            <button onClick={handlePrev} className="art__btn"><FontAwesomeIcon icon={faAngleLeft} /></button>
            <button onClick={handleNext} className="art__btn"><FontAwesomeIcon icon={faAngleRight} /></button>
          </div>
          <div className="artwork__container">
            <div className="artwork__box">
              <div className="escape__btn">
                <button onClick={() => navigate("/")} className="esc__btn"><FontAwesomeIcon icon={faCircleXmark} /></button>
              </div>
              <img
                src={currentArtwork.watermarkImageUrl}
                alt={currentArtwork.name}
                effect='blur'
                className="artwork__img"
              />
              <div className="artwork__info">
                <p className="artwork__name">"{currentArtwork.title}"</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}