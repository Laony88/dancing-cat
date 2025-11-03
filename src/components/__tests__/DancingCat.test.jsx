import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DancingCat from '../DancingCat'

describe('DancingCat', () => {
  it('renders cat image', () => {
    render(<DancingCat isAnimating={false} isCrying={false} onToggle={() => {}} />)

    const catImage = screen.getByAltText('Dancing Cat')
    expect(catImage).toBeInTheDocument()
  })

  it('shows default instruction text when not animating', () => {
    render(<DancingCat isAnimating={false} isCrying={false} onToggle={() => {}} />)

    expect(screen.getByText('고양이를 클릭하면 춤춰요!')).toBeInTheDocument()
  })

  it('shows dancing instruction text when dancing', () => {
    render(<DancingCat isAnimating={true} isCrying={false} onToggle={() => {}} />)

    expect(screen.getByText('클릭하면 멈춰요!')).toBeInTheDocument()
  })

  it('shows crying instruction text when crying', () => {
    render(<DancingCat isAnimating={false} isCrying={true} onToggle={() => {}} />)

    expect(screen.getByText(/울고 있어요/i)).toBeInTheDocument()
  })

  it('applies dancing class when isAnimating is true', () => {
    render(<DancingCat isAnimating={true} isCrying={false} onToggle={() => {}} />)

    const wrapper = screen.getByAltText('Dancing Cat').parentElement
    expect(wrapper).toHaveClass('cat-wrapper', 'dancing')
  })

  it('applies crying class when isCrying is true', () => {
    render(<DancingCat isAnimating={false} isCrying={true} onToggle={() => {}} />)

    const wrapper = screen.getByAltText('Dancing Cat').parentElement
    expect(wrapper).toHaveClass('cat-wrapper', 'crying')
  })

  it('applies only cat-wrapper class when both are false', () => {
    render(<DancingCat isAnimating={false} isCrying={false} onToggle={() => {}} />)

    const wrapper = screen.getByAltText('Dancing Cat').parentElement
    expect(wrapper).toHaveClass('cat-wrapper')
    expect(wrapper).not.toHaveClass('dancing')
    expect(wrapper).not.toHaveClass('crying')
  })

  it('calls onToggle when cat is clicked', async () => {
    const user = userEvent.setup()
    const mockToggle = vi.fn()

    render(<DancingCat isAnimating={false} isCrying={false} onToggle={mockToggle} />)

    const wrapper = screen.getByAltText('Dancing Cat').parentElement
    await user.click(wrapper)

    expect(mockToggle).toHaveBeenCalledTimes(1)
  })

  it('calls onToggle when cat image is clicked', async () => {
    const user = userEvent.setup()
    const mockToggle = vi.fn()

    render(<DancingCat isAnimating={false} isCrying={false} onToggle={mockToggle} />)

    const catImage = screen.getByAltText('Dancing Cat')
    await user.click(catImage)

    expect(mockToggle).toHaveBeenCalledTimes(1)
  })
})
