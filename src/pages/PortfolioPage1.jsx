import React from 'react';
import roomeo from '../assets/Roomeo.png'

export default function PortfolioPage1() {
  return (
    <div className="container pt-4">
      <h2>Portfolio</h2>
      <section className="container-aboutme" id="container-work">
        <div className="container-aboutme-work" >
          <a className="roomeo" href="https://roomeo-54bd0cc57e2b.herokuapp.com/" target="_blank">
            <div className="container-aboutme-work-image container-aboutme-work-image-full-length">
              {/* <img src="../../../src/assets/Roomeo.png" alt="National Hurricane Center building" /> */}
              <div className="caption-aboutme-work-image">
                <h4>Roommate Finder</h4>
                </div>
            </div>
          </a>
        </div>

        <div className="container-aboutme-work">
          <section className="container-aboutme-work-image container-aboutme-work-image-full-length">
            <img src="../assets/nhc-building.png" alt="National Hurricane Center building" />
            <div className="caption-aboutme-work-image">General</div>
          </section>
        </div>

        <div className="container-aboutme-work">
          <section className="container-aboutme-work-image container-aboutme-work-image-full-length">
            <img src="../../../src/assets/nhc-building.png" alt="National Hurricane Center building" />
            <div className="caption-aboutme-work-image">General</div>
          </section>
        </div>

        <div className="container-aboutme-work">
          <section className="container-aboutme-work-image container-aboutme-work-image-full-length">
            <img src="../../../src/assets/nhc-building.png" alt="National Hurricane Center building" />
            <div className="caption-aboutme-work-image">General</div>
          </section>
        </div>

        <div className="container-aboutme-work">
          <section className="container-aboutme-work-image container-aboutme-work-image-full-length">
            <img src="../../../src/assets/nhc-building.png" alt="National Hurricane Center building" />
            <div className="caption-aboutme-work-image">General</div>
          </section>
        </div>

        <div className="container-aboutme-work">
          <section className="container-aboutme-work-image container-aboutme-work-image-full-length">
            <img src="../../../src/assets/nhc-building.png" alt="National Hurricane Center building" />
            <div className="caption-aboutme-work-image">General</div>
          </section>
        </div>
      </section>



    </div>
  );
}