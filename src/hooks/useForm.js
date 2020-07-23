import React, { useState, useReducer } from 'react'

export const useForm = (object, submit, reducer) =>{
    const [data, dispatchData] = useReducer(reducer, object)

    const onSubmit = (e) =>{
        e.preventDefault()
        submit(data)
        dispatchData({type: 'RESET'})
    }

    const onChange = e =>{
        dispatchData({type: 'UPDATE', data: {name: e.target.name, value: e.target.value}})
    }

    return [data, onSubmit, onChange, dispatchData]
}
