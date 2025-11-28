import { createContext, useContext, useReducer, useEffect } from 'react';

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN': {
      const user = action.payload;
      localStorage.setItem('user', JSON.stringify(user));
      return { ...state, user, isAuthenticated: true };
    }
    case 'LOGOUT': {
      localStorage.removeItem('user');
      localStorage.removeItem('cart');
      localStorage.removeItem('wishlist');
      return { ...state, user: null, isAuthenticated: false };
    }
    case 'LOAD_USER': {
      const user = action.payload;
      return { ...state, user, isAuthenticated: !!user };
    }
    case 'UPDATE_PROFILE': {
      const updatedUser = { ...state.user, ...action.payload };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return { ...state, user: updatedUser };
    }
    default:
      return state;
  }
};

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: true,
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    // Load user from localStorage on mount
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      dispatch({ type: 'LOAD_USER', payload: JSON.parse(savedUser) });
    } else {
      dispatch({ type: 'LOAD_USER', payload: null });
    }
  }, []);

  const login = async (email, password) => {
    try {
      // Simulate API call
      const user = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        name: email.split('@')[0], // Simple name extraction
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
        joinDate: new Date().toISOString(),
        preferences: {
          theme: 'light',
          notifications: true,
          newsletter: true,
        }
      };
      
      dispatch({ type: 'LOGIN', payload: user });
      return { success: true, user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const register = async (name, email, password) => {
    try {
      // Simulate API call
      const user = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        name,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
        joinDate: new Date().toISOString(),
        preferences: {
          theme: 'light',
          notifications: true,
          newsletter: true,
        }
      };
      
      dispatch({ type: 'LOGIN', payload: user });
      return { success: true, user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const updateProfile = (updates) => {
    dispatch({ type: 'UPDATE_PROFILE', payload: updates });
  };

  const value = {
    ...state,
    login,
    register,
    logout,
    updateProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};