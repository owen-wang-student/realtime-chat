"use client"
import React from 'react'
import { useEffect, useRef } from "react" 
import { useUser } from "./user"
import { User } from '@supabase/supabase-js'

export function InitUser({user}: {user:User|undefined}) {
  
  const initState = useRef(false);

  useEffect(() => {
    if(!initState.current){
      useUser.setState({user});
    }
    initState.current = true; 
    // eslint-disable-next-line
  }, [])
  
  return (
    <></>
  )
}
