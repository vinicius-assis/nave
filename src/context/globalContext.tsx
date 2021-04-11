import React, { createContext, useState } from 'react'

type TStorageProps = {
  children: React.ReactNode
}

export type TContext = {
  openModal: boolean
  handleOpenModal: () => void
  logged: boolean
  handleLogged: () => void
  openForm: boolean
  handleOpenForm: () => void
}

export const GlobalContext = createContext({})

export const GlobalStorage = ({ children }: TStorageProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [logged, setLogged] = useState<boolean>(false)
  const [openForm, setOpenForm] = useState<boolean>(false)

  const handleOpenModal = () => setOpenModal(!openModal)
  const handleOpenForm = () => setOpenForm(!openForm)
  const handleLogged = () => {
    setOpenModal(false)
    setOpenForm(false)
    setLogged(!logged)
  }

  return (
    <GlobalContext.Provider
      value={{
        openModal,
        handleOpenModal,
        logged,
        handleLogged,
        openForm,
        handleOpenForm,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
