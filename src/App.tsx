import './App.css'
import { Provider } from 'react-redux'
import store, { persistor } from '@/store/index'
import { PersistGate } from 'redux-persist/integration/react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from '@/pages/home/HomePage'

console.log(store)
const App = ()=>{
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </HashRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
