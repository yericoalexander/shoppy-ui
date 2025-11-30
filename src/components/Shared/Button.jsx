import PropTypes from 'prop-types';

const Button = ({ text, bgColor, textColor, handler = () => {}, disabled = false, loading = false }) => {
  return (
    <button
      onClick={handler}
      disabled={disabled || loading}
      className={`${bgColor} ${textColor} cursor-pointer hover:scale-105 active:scale-95 duration-300 py-2 px-8 rounded-full relative z-10 overflow-hidden group transition-all transform disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100`}
    >
      {/* Loading spinner */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Button text */}
      <span className={`${loading ? 'invisible' : 'visible'} relative z-10 font-medium`}>
        {text}
      </span>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  handler: PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

export default Button;
