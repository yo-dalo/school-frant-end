// Gallery.jsx
import React from 'react';

const pins = [
  { id: 1, src: "img/image/a1.jpg", aspect: "4/5" },
  { id: 2, src: "img/image/a2.jpeg", aspect: "1/1" },
  { id: 3, src: "img/image/a17.jpeg", aspect: "5/3" },
  { id: 4, src: "img/image/a4.jpeg", aspect: "2/3" },
  { id: 5, src: "img/image/a5.jpeg", aspect: "4/5" },
  { id: 6, src: "img/image/a6.jpeg", aspect: "3/4" },
  { id: 7, src: "img/image/a7.jpeg", aspect: "5/4" },
  { id: 8, src: "img/image/a15.jpeg", aspect: "2/3" },
  { id: 9, src: "img/image/a9.jpeg", aspect: "4/5" },
  { id: 10, src: "img/image/a11.jpeg", aspect: "3/4" },
];

function Gallery() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Pure CSS Masonry using columns */}
        <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6">
          {pins.map((pin) => (
            <div
              key={pin.id}
              className="mb-4 break-inside-avoid rounded-xl overflow-hidden bg-white shadow-sm"
            >
              <img
                src={pin.src}
                alt=""
                className="w-full h-auto object-cover"
                style={{ aspectRatio: pin.aspect }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;