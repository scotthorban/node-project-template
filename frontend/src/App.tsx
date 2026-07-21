import React, { useState } from 'react';

export const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="container">
      <div className="badge">React + TypeScript App</div>
      <h1>Hello World!</h1>
      <p>Welcome to your React application workspace built with TypeScript and Vite.</p>
      <button type="button" className="counter-btn" onClick={() => setCount((prev) => prev + 1)}>
        Clicks: {count}
      </button>
    </div>
  );
};
