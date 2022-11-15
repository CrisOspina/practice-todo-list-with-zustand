import {ReactNode, useEffect, useState} from 'react'

export function LayoutHydrated({children}: {children: ReactNode}) {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return <>{isHydrated ? <div>{children}</div> : <div>Hydrating...</div>}</>
}
