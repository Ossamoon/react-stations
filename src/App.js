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

  return (
    <div className="App">
      <header>
        <h1>Dogアプリ</h1>
      </header>
      <body>
        <p>犬の画像を表示するサイトです</p>
        <img src={dogUrl} alt="[Dog Image]" />
      </body>
    </div>
  )
}
