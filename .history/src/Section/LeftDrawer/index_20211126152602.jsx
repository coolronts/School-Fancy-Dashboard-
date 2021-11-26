import {LogOut, Logo} from '../../components/Icons'

import Menu from '../Menu'
import React from 'react'

export default function LeftDrawer() {
  return (
    <div className="mr-8 text-white mt-6">
      <ImBooks className="text-5xl" />
      <Menu />
      <AiOutlineLogout className="text-5xl" />
    </div>
  )
}