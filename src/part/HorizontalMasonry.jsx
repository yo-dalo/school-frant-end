import React from "react";

const images = [
  "https://i.pinimg.com/736x/2e/bb/49/2ebb49c2e9cee470cfbf140ff55908db.jpg",
  "https://i.pinimg.com/736x/f3/f1/45/f3f145d5aa2f40f8c620900c60139c07.jpg",
  "https://i.pinimg.com/736x/a0/d8/82/a0d882b093ecc4da0eecd34258b63423.jpg",
  "https://i.pinimg.com/736x/2e/bb/49/2ebb49c2e9cee470cfbf140ff55908db.jpg",
  "https://i.pinimg.com/736x/f3/f1/45/f3f145d5aa2f40f8c620900c60139c07.jpg",
  "https://i.pinimg.com/736x/a0/d8/82/a0d882b093ecc4da0eecd34258b63423.jpg",
    "https://i.pinimg.com/736x/2e/bb/49/2ebb49c2e9cee470cfbf140ff55908db.jpg",
  "https://i.pinimg.com/736x/f3/f1/45/f3f145d5aa2f40f8c620900c60139c07.jpg",
  "https://i.pinimg.com/736x/a0/d8/82/a0d882b093ecc4da0eecd34258b63423.jpg",
  "https://i.pinimg.com/736x/2e/bb/49/2ebb49c2e9cee470cfbf140ff55908db.jpg",
  "https://i.pinimg.com/736x/f3/f1/45/f3f145d5aa2f40f8c620900c60139c07.jpg",
  "https://i.pinimg.com/736x/a0/d8/82/a0d882b093ecc4da0eecd34258b63423.jpg"
];

const HorizontalMasonry = () => {
  return (
   <div className="w-full h-screen overflow-x-auto overflow-y-hidden p-5">
      <div className="flex space-x-5 h-full">
        {[...Array(4)].map((_, colIndex) => (
          <div key={colIndex} className="flex flex-col space-y-5">
            {images
              .filter((_, i) => i % 4 === colIndex)
              .map((src, idx) => (
                <div key={idx} className="w-72 rounded-lg overflow-hidden shadow-lg">
                  <img src={src} alt={`img-${idx}`} className="w-full object-cover" />
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>

  );
};

export default HorizontalMasonry;
