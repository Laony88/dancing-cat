import { useState } from 'react'
import './styles/global.css'
import './styles/animations.css'
import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'

function App() {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleToggleAnimation = () => {
    setIsAnimating(!isAnimating)
  }

  return (
    <div className="app-container">
      <h1>🐱 Dancing Cat 🐱</h1>
      <p className="subtitle">고양이 댄싱 애니메이션 페이지</p>
      <DancingCat isAnimating={isAnimating} onToggle={handleToggleAnimation} />
      <AnimationControls isAnimating={isAnimating} onToggle={handleToggleAnimation} />
    </div>
  )
}

export default App
