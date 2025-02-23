export const useHistory =()=> {
    return {
        push: (path: string) => {
            window.history.pushState({}, '', path);
        },
        listen: (callback: any) => {
            window.addEventListener('popstate', callback);
        }
    }
}