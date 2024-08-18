'use client'
import { useField, useFieldProps } from '@payloadcms/ui'
import React, { useEffect, useState } from 'react'

type Props = { path: string }

const CustomSelectField: React.FC<Props> = () => {
  const { path } = useFieldProps()
  const { value, setValue } = useField({ path })
  const [options, setOptions] = useState<{ label: string; value: number }[]>([])
  const [defaultValue, setDefaultValue] = useState<number | ''>(0)

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch('/api/images?limit=0')
        const data = await response.json()
        const totalImages = data.totalDocs

        const generatedOptions = Array.from({ length: totalImages + 1 }, (_, i) => ({
          label: (i + 1).toString(),
          value: i + 1,
        }))

        setOptions(generatedOptions)
        setDefaultValue(totalImages + 1)
        if (value === undefined) {
          setValue(totalImages + 1)
        }
      } catch (error) {
        console.error('Erreur lors du chargement des options', error)
      }
    }

    fetchOptions()
  }, [value, setValue])

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ display: 'block', marginBottom: '0.5rem' }}>Position:</label>
      <div style={{ position: 'relative' }}>
        <select
          // @ts-ignore
          value={value || defaultValue || ''}
          onChange={(e) => setValue(parseInt(e.target.value, 10))}
          style={{
            padding: '1rem 1.5rem', // Ajouter un padding à droite pour faire de la place à la flèche
            borderRadius: '4px',
            border: '1px solid #ddd',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            fontSize: '1rem',
            cursor: 'pointer',
            width: '100%',
            appearance: 'none', // Supprimer la flèche native
            background:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9' /%3E%3C/svg%3E\") no-repeat right 0.5rem center", // Ajouter une flèche personnalisée
            backgroundSize: '1.1rem', // Taille de la flèche
            backgroundPosition: 'calc(100% - 1rem)', // Position de la flèche
            outline: 'none',
          }}
        >
          <option value="">Sélectionner une position</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default CustomSelectField
