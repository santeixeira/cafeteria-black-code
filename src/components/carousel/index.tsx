const Carousel: React.FC = () => {
  return (
    <video width="320" height="240" loop autoPlay>
      <source src="./video1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Carousel;
