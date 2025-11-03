import { useState } from 'react'
import './styles/global.css'
import './styles/animations.css'
import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'

function App() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [isCrying, setIsCrying] = useState(false)

  const handleToggleAnimation = () => {
    setIsAnimating(!isAnimating)
    setIsCrying(false) // 춤출 때는 울기 중지
  }

  const handleToggleCrying = () => {
    setIsCrying(!isCrying)
    setIsAnimating(false) // 울 때는 춤 중지
  }

  return (
    <div className="app-container">
      <h1>🐱 Dancing Cat 🐱</h1>
      <p className="subtitle">고양이 댄싱 애니메이션 페이지</p>
      <DancingCat isAnimating={isAnimating} isCrying={isCrying} onToggle={handleToggleAnimation} />
      <AnimationControls
        isAnimating={isAnimating}
        isCrying={isCrying}
        onToggleDancing={handleToggleAnimation}
        onToggleCrying={handleToggleCrying}
      />
    </div>
  )
}

export default App
