import catImage from '../assets/images/cat.svg'
import './DancingCat.css'

function DancingCat({ isAnimating, onToggle }) {
  return (
    <div className="dancing-cat-container">
      <div
        className={`cat-wrapper ${isAnimating ? 'dancing' : ''}`}
        onClick={onToggle}
      >
        <img
          src={catImage}
          alt="Dancing Cat"
          className="cat-image"
        />
      </div>
      <p className="instruction-text">
        {isAnimating ? '클릭하면 멈춰요!' : '고양이를 클릭하면 춤춰요!'}
      </p>
    </div>
  )
}

export default DancingCat
