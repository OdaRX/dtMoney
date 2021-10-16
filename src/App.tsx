import { useState } from 'react'
import Modal from 'react-modal'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { NewTransactionsModal } from './components/NewTransactionsModal'
import { GlobalStyle } from './styles/global'
import { TransactionsProvider } from './hooks/useTransactions'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] =
    useState(false)

  function handleOpenTransactionsModal() {
    setIsNewTransactionsModalOpen(true)
  }

  function handleCloseTransactionsModal() {
    setIsNewTransactionsModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionsModal={handleOpenTransactionsModal} />

      <Dashboard />

      <NewTransactionsModal
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleCloseTransactionsModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  )
}
