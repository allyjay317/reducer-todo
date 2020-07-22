import React, { useState } from 'react'

export const useForm = (object, submit) =>{
    const [data, setData] = useState(object)

    const onSubmit = (e) =>{
        e.preventDefault()
        submit(data)
        setData(object)
    }

    const onChange = e =>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    return [data, onSubmit, onChange]
}
