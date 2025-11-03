import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

describe('App', () => {
  it('renders the app with title and subtitle', () => {
    render(<App />)

    expect(screen.getByText(/Dancing Cat/i)).toBeInTheDocument()
    expect(screen.getByText(/고양이 댄싱 애니메이션 페이지/i)).toBeInTheDocument()
  })

  it('renders DancingCat and AnimationControls components', () => {
    render(<App />)

    // Check if cat image is rendered
    expect(screen.getByAltText('Dancing Cat')).toBeInTheDocument()

    // Check if control buttons are rendered
    expect(screen.getByText(/춤추기/i)).toBeInTheDocument()
    expect(screen.getByText(/울기/i)).toBeInTheDocument()
  })

  it('toggles dancing animation when dance button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    const danceButton = screen.getByText(/춤추기/i)

    // Initially should show "춤추기"
    expect(danceButton).toHaveTextContent('춤추기')

    // Click to start dancing
    await user.click(danceButton)

    // Should now show "그만 춤추기"
    expect(danceButton).toHaveTextContent('그만 춤추기')
  })

  it('toggles crying animation when cry button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    const cryButton = screen.getByText(/😢 울기/i)

    // Initially should show "울기"
    expect(cryButton).toHaveTextContent('😢 울기')

    // Click to start crying
    await user.click(cryButton)

    // Should now show "그만 울기"
    expect(cryButton).toHaveTextContent('😊 그만 울기')
  })

  it('stops dancing when crying button is clicked during dancing', async () => {
    const user = userEvent.setup()
    render(<App />)

    const danceButton = screen.getByText(/💃 춤추기/i)
    const cryButton = screen.getByText(/😢 울기/i)

    // Start dancing
    await user.click(danceButton)
    expect(danceButton).toHaveTextContent('🛑 그만 춤추기')

    // Start crying - should stop dancing
    await user.click(cryButton)
    expect(danceButton).toHaveTextContent('💃 춤추기')
    expect(cryButton).toHaveTextContent('😊 그만 울기')
  })

  it('stops crying when dancing button is clicked during crying', async () => {
    const user = userEvent.setup()
    render(<App />)

    const danceButton = screen.getByText(/💃 춤추기/i)
    const cryButton = screen.getByText(/😢 울기/i)

    // Start crying
    await user.click(cryButton)
    expect(cryButton).toHaveTextContent('😊 그만 울기')

    // Start dancing - should stop crying
    await user.click(danceButton)
    expect(cryButton).toHaveTextContent('😢 울기')
    expect(danceButton).toHaveTextContent('🛑 그만 춤추기')
  })
})
