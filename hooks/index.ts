import { useContext } from 'react';
import { Context } from '@Models/provider';

export * from './use-mouse-events';
export * from './use-windows-dimension';

export const useGeneral = () => useContext(Context).general;
