import catImage from '../assets/images/cat.svg'
import './DancingCat.css'

function DancingCat({ isAnimating, isCrying, onToggle }) {
  const getClassName = () => {
    if (isAnimating) return 'cat-wrapper dancing'
    if (isCrying) return 'cat-wrapper crying'
    return 'cat-wrapper'
  }

  const getInstructionText = () => {
    if (isAnimating) return '클릭하면 멈춰요!'
    if (isCrying) return '울고 있어요... 😢'
    return '고양이를 클릭하면 춤춰요!'
  }

  return (
    <div className="dancing-cat-container">
      <div
        className={getClassName()}
        onClick={onToggle}
      >
        <img
          src={catImage}
          alt="Dancing Cat"
          className="cat-image"
        />
      </div>
      <p className="instruction-text">
        {getInstructionText()}
      </p>
    </div>
  )
}

export default DancingCat
