interface AuthProviderProps {
    isAuthenticate: boolean
    login: (username:string, password:string) => void ;
    logout: () => void
}