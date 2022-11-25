import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './TransactionsContext';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setisNewTransactionModalOpen] = useState(false);

  
  function handleOpenNewTransaction(){
      setisNewTransactionModalOpen(true);
  }

  function handleCloseNewTransaction(){
      setisNewTransactionModalOpen(false);
  }
  
  return (
    <TransactionsProvider>
       <Header onOpenNewTransactionModal={handleOpenNewTransaction}/>
      
       <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransaction}
      />


       <GlobalStyle />
    </TransactionsProvider>
  );
}

 
