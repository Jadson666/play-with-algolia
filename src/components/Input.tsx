import debounce from 'lodash/debounce'
import React, { FunctionComponent, useCallback } from 'react'

interface InputProps {
  onChange?: (e) => void
  time?: number
}

export const DebouncedInput: FunctionComponent<InputProps> = ({
  onChange = () => {},
  time = 0
}) => {
  const debouncedOnChange = debounce(onChange, time)
  const inputOnChange = useCallback((e) => debouncedOnChange(e), [])
  return <input className='searchInput' type='text' onChange={inputOnChange} />
}
