import './AnimationControls.css'

function AnimationControls({ isAnimating, isCrying, onToggleDancing, onToggleCrying }) {
  return (
    <div className="controls-container">
      <button
        onClick={onToggleDancing}
        className="control-button dance-button"
        aria-label={isAnimating ? '춤추기 정지' : '춤추기 시작'}
      >
        {isAnimating ? '🛑 그만 춤추기' : '💃 춤추기'}
      </button>
      <button
        onClick={onToggleCrying}
        className="control-button cry-button"
        aria-label={isCrying ? '울기 정지' : '울기 시작'}
      >
        {isCrying ? '😊 그만 울기' : '😢 울기'}
      </button>
    </div>
  )
}

export default AnimationControls
