export interface Card{
    id: string
    content: React.ReactNode;
}
  
  
export interface FuncionalidadePorPefil {
    ProfileName: string
    Cards: Card[]
    routes: RouteType[] 
}
  

export interface RouteType  {
    title: string
    route: string
    icon: string
}

export interface CardNavigationProps {
    routes?: RouteType[];
}

export type UserRole = "Admin" | "Client" | "User" | "Viewer";