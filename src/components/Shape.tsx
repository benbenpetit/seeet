import { ICard } from '@/core/types/Card'
import { FC } from 'react'
import LozengeHash from '@/assets/img/lozenge_hash.svg'
import OvalHash from '@/assets/img/oval_hash.svg'
import WaveHash from '@/assets/img/wave_hash.svg'

interface Props {
  shape: ICard['shape']
  filling: ICard['filling']
}

const Shape: FC<Props> = ({ shape, filling }) => {
  const getShape = () => {
    switch (shape) {
      case 'LOZENGE':
        return (
          <>
            {filling === 'STRIPED' && <img src={LozengeHash} alt="" />}
            <svg viewBox="0 0 120 206" xmlns="http://www.w3.org/2000/svg">
              <path d="M60 10L110 103L60 196L10 103L60 10Z" />
            </svg>
          </>
        )

      case 'OVAL':
        return (
          <>
            {filling === 'STRIPED' && <img src={OvalHash} alt="" />}
            <svg
              viewBox="0 0 115 210"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="10" y="10" width="95" height="190" rx="47.5" />
            </svg>
          </>
        )

      case 'WAVE':
        return (
          <>
            {filling === 'STRIPED' && <img src={WaveHash} alt="" />}
            <svg
              viewBox="0 0 110 210"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M89.2737 104.087C89.1087 104.389 88.944 104.691 88.7824 105H88.7868C82.0839 118.575 78.7325 126.124 78.7325 139.777C78.7325 141.464 78.6744 143.129 78.6166 144.787C78.3256 153.13 78.0399 161.324 85.1746 171.577C87.2461 174.554 92.1805 185.025 86.6859 189.575C78.757 196.141 69.0718 200 58.6157 200C31.766 200 10 174.556 10 143.17C10 140.079 10.2111 137.045 10.6174 134.088C11.1167 130.454 18.1026 110.938 19.9032 107.545C20.137 107.056 20.3924 106.575 20.6444 106.1C20.8411 105.73 21.0356 105.363 21.2162 105H21.2132C27.9161 91.4249 31.2675 83.8764 31.2675 70.2232C31.2675 68.5356 31.3255 66.8713 31.3834 65.2129C31.6743 56.8696 31.9601 48.676 24.8254 38.4232C22.7539 35.4464 17.8195 24.9745 23.3141 20.4245C31.243 13.8587 40.9282 10 51.3843 10C78.234 10 100 35.4438 100 66.8304C100 69.9213 99.7889 72.9546 99.3826 75.9117C98.8833 79.5462 91.9264 98.6961 90.1258 102.455C89.8503 103.031 89.5614 103.56 89.2737 104.087Z" />
            </svg>
          </>
        )
    }
  }

  return <div className="card__shape">{getShape()}</div>
}

export default Shape
