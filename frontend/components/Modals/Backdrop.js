const Backdrop = ({ onClose }) => {
  return (
    <div
      onClick={onClose}
      className='fixed top-0 left-0  h-screen w-screen bg-black/75'></div>
  );
};

export default Backdrop;
