// useEffect komponent yuklanganda yoki dependensiyalar (deps) 
// o‘zgarganda bajariladigan yon effektlarni bajarish 
// uchun ishlatiladi. ComponentMount ComponentUpdate ComponentUnmount
// useEffect(() => {
//     // ComponentMount
//     return () => {
//         // ComponentUnmount
//     }
// }, [deps])   ComponentUpdate

import React from 'react';


export const myUseEffect = (callback: () => void, deps: any[]) => {
  const hasMounted = React.useRef(false);
  const cleanupRef = React.useRef(null);
  const prevDeps = React.useRef([] as any[]);
  const isMounted = React.useRef(false);
  if(!deps || Array.isArray(deps)) throw new Error("Deps must be an array");
  if(!isMounted.current) {
    isMounted.current = true;
    cleanupRef.current = callback();
    prevDeps.current = deps;
  } else {
    const hasChanged = deps.some((dep, i) => dep !== prevDeps.current[i]);

    if (hasChanged) {
      if (cleanupRef.current) {
        cleanupRef.current(); // Old cleanup functionni ishga tushiramiz
      }
      cleanupRef.current = callback();
      prevDeps.current = deps;
    }
  }

}