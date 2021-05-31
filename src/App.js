// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Dogアプリ</h1>
      </header>
      <body>
        <p>犬の画像を表示するサイトです</p>
        <img
          src="https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_175.jpg"
          alt="[Dog API]"
        />
      </body>
    </div>
  )
}
