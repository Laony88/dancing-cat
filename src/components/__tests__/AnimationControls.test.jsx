import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AnimationControls from '../AnimationControls'

describe('AnimationControls', () => {
  it('renders both dance and cry buttons', () => {
    render(
      <AnimationControls
        isAnimating={false}
        isCrying={false}
        onToggleDancing={() => {}}
        onToggleCrying={() => {}}
      />
    )

    expect(screen.getByText(/춤추기/i)).toBeInTheDocument()
    expect(screen.getByText(/울기/i)).toBeInTheDocument()
  })

  it('shows "춤추기" when not dancing', () => {
    render(
      <AnimationControls
        isAnimating={false}
        isCrying={false}
        onToggleDancing={() => {}}
        onToggleCrying={() => {}}
      />
    )

    expect(screen.getByText('💃 춤추기')).toBeInTheDocument()
  })

  it('shows "그만 춤추기" when dancing', () => {
    render(
      <AnimationControls
        isAnimating={true}
        isCrying={false}
        onToggleDancing={() => {}}
        onToggleCrying={() => {}}
      />
    )

    expect(screen.getByText('🛑 그만 춤추기')).toBeInTheDocument()
  })

  it('shows "울기" when not crying', () => {
    render(
      <AnimationControls
        isAnimating={false}
        isCrying={false}
        onToggleDancing={() => {}}
        onToggleCrying={() => {}}
      />
    )

    expect(screen.getByText('😢 울기')).toBeInTheDocument()
  })

  it('shows "그만 울기" when crying', () => {
    render(
      <AnimationControls
        isAnimating={false}
        isCrying={true}
        onToggleDancing={() => {}}
        onToggleCrying={() => {}}
      />
    )

    expect(screen.getByText('😊 그만 울기')).toBeInTheDocument()
  })

  it('calls onToggleDancing when dance button is clicked', async () => {
    const user = userEvent.setup()
    const mockToggleDancing = vi.fn()

    render(
      <AnimationControls
        isAnimating={false}
        isCrying={false}
        onToggleDancing={mockToggleDancing}
        onToggleCrying={() => {}}
      />
    )

    const danceButton = screen.getByText('💃 춤추기')
    await user.click(danceButton)

    expect(mockToggleDancing).toHaveBeenCalledTimes(1)
  })

  it('calls onToggleCrying when cry button is clicked', async () => {
    const user = userEvent.setup()
    const mockToggleCrying = vi.fn()

    render(
      <AnimationControls
        isAnimating={false}
        isCrying={false}
        onToggleDancing={() => {}}
        onToggleCrying={mockToggleCrying}
      />
    )

    const cryButton = screen.getByText('😢 울기')
    await user.click(cryButton)

    expect(mockToggleCrying).toHaveBeenCalledTimes(1)
  })

  it('has correct aria-label for dance button when not dancing', () => {
    render(
      <AnimationControls
        isAnimating={false}
        isCrying={false}
        onToggleDancing={() => {}}
        onToggleCrying={() => {}}
      />
    )

    const danceButton = screen.getByLabelText('춤추기 시작')
    expect(danceButton).toBeInTheDocument()
  })

  it('has correct aria-label for dance button when dancing', () => {
    render(
      <AnimationControls
        isAnimating={true}
        isCrying={false}
        onToggleDancing={() => {}}
        onToggleCrying={() => {}}
      />
    )

    const danceButton = screen.getByLabelText('춤추기 정지')
    expect(danceButton).toBeInTheDocument()
  })

  it('has correct aria-label for cry button when not crying', () => {
    render(
      <AnimationControls
        isAnimating={false}
        isCrying={false}
        onToggleDancing={() => {}}
        onToggleCrying={() => {}}
      />
    )

    const cryButton = screen.getByLabelText('울기 시작')
    expect(cryButton).toBeInTheDocument()
  })

  it('has correct aria-label for cry button when crying', () => {
    render(
      <AnimationControls
        isAnimating={false}
        isCrying={true}
        onToggleDancing={() => {}}
        onToggleCrying={() => {}}
      />
    )

    const cryButton = screen.getByLabelText('울기 정지')
    expect(cryButton).toBeInTheDocument()
  })
})
