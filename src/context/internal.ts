import { createContext } from 'react';
import type Animated from 'react-native-reanimated';
import type { CONTEXT_MENU_STATE } from '../constants';

interface InternalContextType {
  state: Animated.SharedValue<CONTEXT_MENU_STATE>;
}

export const InternalContext = createContext<InternalContextType | null>(null);