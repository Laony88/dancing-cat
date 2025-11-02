import './AnimationControls.css'

function AnimationControls({ isAnimating, onToggle }) {
  return (
    <div className="controls-container">
      <button
        onClick={onToggle}
        className="control-button"
        aria-label={isAnimating ? '애니메이션 정지' : '애니메이션 시작'}
      >
        {isAnimating ? '⏸️ 정지' : '▶️ 시작'}
      </button>
    </div>
  )
}

export default AnimationControls
