// DO NOT DELETE

import React, { useState } from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_175.jpg',
  )
  // const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const Reload = () => {
    setIsLoading(false)
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(
        result => {
          setIsLoading(true)
          setDogUrl(result.message)
        },
        // err => {
        //   setIsLoading(true)
        //   setError(err)
        // },
      )
  }

  if (!isLoading) {
    return <div>...Loading</div>
    // } else if (error) {
    //   return <div>Error: {error.message}</div>
  } else {
    return (
      <div className="App">
        <header>
          <h1>Dogアプリ</h1>
        </header>
        <body>
          <p>犬の画像を表示するサイトです</p>
          <img src={dogUrl} alt="[Dog Image]" />
          <button onClick={() => Reload()}>Change Image</button>
        </body>
      </div>
    )
  }
}
