function App() {
  return (
    <div className="app">
      {/* Background Video */}
      <video
        className="background-video"
        src="/BookShelfAnimation.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Your actual content goes here (on top of the video) */}
      <div className="content">
        <h1>Library Management System</h1>
        {/* rest of your app */}
      </div>
    </div>
  );
}

export default App;