import { useAtom } from 'jotai'
import debounce from 'lodash/debounce'
import React, { FunctionComponent, useCallback } from 'react'
import { keywordAtom } from '../stores/keywordStore'

interface InputProps {
  onChange?: (e) => void
  time?: number
}

export const DebouncedInput: FunctionComponent<InputProps> = ({
  onChange = () => {},
  time = 0
}) => {
  const [keyword, setKeyword] = useAtom(keywordAtom)
  const debouncedOnChange = debounce(onChange, time)
  const wrappedDebounce = useCallback((e) => debouncedOnChange(e), [])
  const inputOnChange = useCallback((e) => {
    setKeyword(e.target.value)
    wrappedDebounce(e)
  }, [])
  return <input className='searchInput' type='text' onChange={inputOnChange} value={keyword}/>
}
