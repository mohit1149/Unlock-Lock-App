// Write your code here
import {useState} from 'react'
import {MainBgContainer, LockImage, Paragraph, Button} from './styledComponents'

const Unlock = () => {
  const [isActive, setActive] = useState(false)
  const updateImage = isActive
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const updateAltText = isActive ? 'unlock' : 'lock'
  const buttonText = isActive ? 'Lock' : 'Unlock'
  const paragraphText = isActive
    ? 'Your Device is Unlocked'
    : 'Your Device is Locked'
  const onClickButton = () => {
    setActive(prevState => !prevState)
  }
  return (
    <MainBgContainer>
      <LockImage src={updateImage} alt={updateAltText} />
      <Paragraph>{paragraphText}</Paragraph>
      <Button type="button" onClick={onClickButton}>
        {buttonText}
      </Button>
    </MainBgContainer>
  )
}

export default Unlock
