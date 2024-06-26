declare module 'react-grid-layout' {
    import * as React from 'react';
  
    export interface Layout {
      i: string;
      x: number;
      y: number;
      w: number;
      h: number;
      minW?: number;
      maxW?: number;
      minH?: number;
      maxH?: number;
      moved?: boolean;
      static?: boolean;
      isDraggable?: boolean;
      isResizable?: boolean;
    }
  
    export interface ResponsiveProps {
      className?: string;
      breakpoints?: { [key: string]: number };
      cols?: { [key: string]: number };
      layouts: { [key: string]: Layout[] };
      width?: number;
      rowHeight?: number;
      margin?: [number, number];
      containerPadding?: [number, number];
      isDraggable?: boolean;
      isResizable?: boolean;
      isBounded?: boolean;
      useCSSTransforms?: boolean;
      transformScale?: number;
      preventCollision?: boolean;
      compactType?: 'vertical' | 'horizontal';
      onLayoutChange?: (layout: Layout[], layouts: { [key: string]: Layout[] }) => void;
      onBreakpointChange?: (newBreakpoint: string, newCols: number) => void;
      onWidthChange?: (containerWidth: number, margin: [number, number], cols: number) => void;
      children?: React.ReactNode;
    }
  
    export class Responsive extends React.Component<ResponsiveProps, any> {}
  
    export interface WidthProviderProps {
      measureBeforeMount?: boolean;
    }
  
    export function WidthProvider<P>(component: React.ComponentType<P>): React.ComponentType<P & WidthProviderProps>;
  }
  