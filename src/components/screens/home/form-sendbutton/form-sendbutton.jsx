import React, { useState } from 'react';

function Apps() {
  const [showSmallPage, setShowSmallPage] = useState(false);

  const openSmallPage = () => {
    setShowSmallPage(true);
  };

  const closeSmallPage = () => {
    setShowSmallPage(false);
  };

  return (
    <div>
      <button onClick={openSmallPage}>Відкрити меншу сторінку</button>
      {showSmallPage && (
        <div>
          <h2>Менша сторінка</h2>
          <p>Це вміст меншої сторінки.</p>
          <button onClick={closeSmallPage}>Закрити</button>
        </div>
      )}
    </div>
  );
}

export default App;
