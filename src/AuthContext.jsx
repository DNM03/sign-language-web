import React, { createContext, useContext, useState, useEffect } from 'react'
import {
  getToken,
  setToken,
  removeToken,
  isLoggedIn,
  setRefreshToken,
  removeRefreshToken,
  getRefreshToken
} from './util/auth'

import axios from 'axios'
import { getMyProfile, userLogout } from './util/authService'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn())
  const [isAdmin, setUserRole] = useState(null)
  const [UserProfile, setUserProfile] = useState(null)
  const [isUserVerified, setIsVerified] = useState(null)

  useEffect(() => {
    setIsAuthenticated(isLoggedIn())
  }, [])

  const login = async (tokens) => {
    setToken(tokens.accessToken)
    setRefreshToken(tokens.refreshToken)
    setIsAuthenticated(true)
    try {
      const response = await getMyProfile()
      console.log(response.result)
      setUserRole(response.result.role)
      setUserProfile(response.result)
      setIsVerified(response.result.verify)
    } catch (error) {
      console.error('Error getting user profile:', error)
      throw error
    }
  }

  const logout = async () => {
    const data = {
      refresh_token: getRefreshToken()
    }
    await userLogout(data)
    removeToken()
    removeRefreshToken()
    setIsAuthenticated(false)
    setUserRole(null)
    setUserProfile(null)
    setIsVerified(null)
  }

  const updateProfile = async () => {
    try {
      const response = await getMyProfile();
      console.log(response);
      setUserRole(response.result.role);
      setUserProfile(response.result);
      setIsVerified(response.result.verify);
    } catch (error) {
      console.error('Error getting user profile:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, isAdmin, UserProfile, setUserProfile, isUserVerified, updateProfile }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
